// Exporta o Reel aprovado em MP4 vertical a partir do mesmo HTML do preview.
import { mkdir, rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import path from 'node:path';
import ffmpegStatic from 'ffmpeg-static';

const root = process.cwd();
const frames = path.join(root, '.render-frames');
const outputDir = path.join(root, 'renders');
const output = path.join(outputDir, 'noah-ark-reels-v1.mp4');
const ffmpeg = process.env.FFMPEG_PATH || ffmpegStatic || 'ffmpeg';

await mkdir(outputDir, { recursive: true });
await rm(frames, { recursive: true, force: true });

await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, ['render-frames.mjs', '--out=.render-frames', '--fps=30'], { stdio: 'inherit', cwd: root });
  child.on('error', reject);
  child.on('exit', code => code === 0 ? resolve() : reject(new Error(`Captura de frames falhou com código ${code}.`)));
});

await new Promise((resolve, reject) => {
  const child = spawn(ffmpeg, [
    '-y', '-framerate', '30', '-i', path.join(frames, 'frame-%04d.png'),
    '-vf', 'scale=1080:1920:force_original_aspect_ratio=disable',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', output
  ], { stdio: 'inherit', cwd: root, windowsHide: true });
  child.on('error', error => reject(new Error(`FFmpeg não foi encontrado. Instale FFmpeg ou defina FFMPEG_PATH. Detalhe: ${error.message}`)));
  child.on('exit', code => code === 0 ? resolve() : reject(new Error(`FFmpeg falhou com código ${code}.`)));
});

console.log(`MP4 gerado em ${output}`);
