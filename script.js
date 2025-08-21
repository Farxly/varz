const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const question = document.querySelector('.question');
const buttons = document.querySelector('.buttons');
const result = document.querySelector('.result');

// tombol no ngelak
noBtn.addEventListener('mouseenter', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'fixed';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// klik yes
yesBtn.addEventListener('click', () => {
  question.style.display = 'none';
  buttons.style.display = 'none';
  result.style.display = 'flex';
  spawnEmojis();
  setInterval(spawnEmojis, 1200);
});

function spawnEmojis() {
  const emojis = ['❤️','💖','💘','🌹','🥰','💞','💕','💓'];
  const emoji = document.createElement('div');
  emoji.classList.add('falling');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.animationDuration = (Math.random() * 3 + 3) + 's';
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 6000);
}

/* === LOVE RAIN: super meriah & tidak kelar-kelar === */
const LOVE_EMOJIS = ['💖','💗','❤️','💕','💘','💞','💓','🌸','🌺','🌷','💐','✨','🥰','💝'];
let rainTimer = null;

function spawnOneLove(){
  const el = document.createElement('span');
  el.className = 'love';
  el.textContent = LOVE_EMOJIS[Math.floor(Math.random()*LOVE_EMOJIS.length)];

  // posisi & ukuran random
  el.style.left = Math.random()*100 + 'vw';
  const size = 18 + Math.random()*24;
  el.style.fontSize = size + 'px';

  // durasi & rotasi random via CSS var
  const dur = (2.8 + Math.random()*3.2).toFixed(2) + 's';
  el.style.setProperty('--dur', dur);
  el.style.setProperty('--rot', Math.floor(Math.random()*360) + 'deg');

  flowersLayer.appendChild(el);
  // cleanup
  setTimeout(()=> el.remove(), 7000);
}

function startLoveRain(){
  if (rainTimer) return;
  // burst terus-menerus (setiap 160ms bikin 5–10 emoji)
  rainTimer = setInterval(() => {
    const count = 5 + Math.floor(Math.random()*6);
    for (let i=0;i<count;i++) spawnOneLove();
  }, 160);
}

/* Responsif: jika resize, biarkan love rain lanjut (elemen baru menyesuaikan) */
window.addEventListener('resize', ()=>{ /* no-op – cukup biarkan elemen baru adapt */ });
