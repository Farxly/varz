const card = document.getElementById('card');
const yesBtn = document.getElementById('yesBtn');
const noBtn  = document.getElementById('noBtn');
const overlay = document.getElementById('overlay');
const flowersLayer = document.getElementById('flowers');

/* === NO BUTTON: selalu kabur + mengecil tiap klik === */
let noScale = 1;
noBtn.addEventListener('click', () => {
  // pindah ke posisi random
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20) + 10;
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20) + 10;
  noBtn.style.position = 'fixed';
  noBtn.style.left = `${x}px`;
  noBtn.style.top  = `${y}px`;

  // mengecil terus
  noScale = Math.max(0.25, noScale * 0.9);
  noBtn.style.transform = `scale(${noScale})`;
});

/* === YES BUTTON: ganti ke layar thank you + hujan love/bunga nonstop === */
yesBtn.addEventListener('click', () => {
  // sembunyikan kartu
  card.style.opacity = '0';
  card.style.transform = 'scale(0.98)';
  setTimeout(() => {
    card.style.display = 'none';
    showCelebration();
  }, 220);
});

function showCelebration(){
  overlay.classList.add('show');
  startLoveRain(); // mulai love rain tanpa henti
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
