// Captura frames PNG para montar um MP4 em After Effects, Remotion ou FFmpeg.
// Uso: npm run render:frames -- --out=frames --fps=30
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
const args = Object.fromEntries(process.argv.slice(2).map(v => v.replace(/^--/, '').split('=')));
const out = args.out || 'frames'; const fps = Number(args.fps || 30);
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
await page.goto(`file://${process.cwd().replaceAll('\\','/')}/index.html`);
for (let i = 0; i < 20 * fps; i++) {
  await page.evaluate((time) => { window.__renderTime = time; }, i / fps);
  await page.screenshot({ path: `${out}/frame-${String(i).padStart(4, '0')}.png` });
}
await browser.close();
console.log(`Frames gerados em ${out}/`);
