const scenes=[...document.querySelectorAll('.scene')];
const bars=[...document.querySelectorAll('.progress i')];
const tabs=[...document.querySelectorAll('.module-tabs button')];
const images=[...document.querySelectorAll('.module-image')];
const duration=20;let started=performance.now();
function setModule(index){tabs.forEach((tab,i)=>tab.classList.toggle('selected',i===index));images.forEach((image,i)=>image.classList.toggle('selected',i===index))}
tabs.forEach((tab,i)=>tab.addEventListener('click',()=>setModule(i)));
function tick(now){const elapsed=(typeof window.__renderTime==='number'?window.__renderTime:(now-started)/1000)%duration;const index=Math.min(4,Math.floor(elapsed/4));scenes.forEach((scene,i)=>scene.classList.toggle('active',i===index));bars.forEach((bar,i)=>bar.style.background=i===index?'var(--orange)':'#c4d0d5');if(index===2)setModule(Math.floor(((elapsed%4)/4)*3));requestAnimationFrame(tick)}requestAnimationFrame(tick);
