const scenes = [...document.querySelectorAll('.scene')];
const bars = [...document.querySelectorAll('.progress i')];
const duration = 20;
let started = performance.now();
function tick(now) {
  const elapsed = (typeof window.__renderTime === 'number' ? window.__renderTime : (now - started) / 1000) % duration;
  const index = Math.min(4, Math.floor(elapsed / 4));
  scenes.forEach((scene, i) => scene.classList.toggle('active', i === index));
  bars.forEach((bar, i) => bar.style.background = i === index ? 'var(--orange)' : '#50616c');
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
