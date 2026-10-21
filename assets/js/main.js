// ===== SLIDESHOW =====
(function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('#slideControls button');
  if (!slides.length) return;

  let current = 0;
  let interval;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function startAuto() {
    interval = setInterval(() => goTo(current + 1), 5000);
  }

  function resetAuto() {
    clearInterval(interval);
    startAuto();
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      resetAuto();
    });
  });

  startAuto();
})();

// ===== MOBILE MENU =====
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
})();

// ===== LANGUAGE AUTO-DETECT (فقط برای صفحه اصلی انگلیسی) =====
(function () {
  const isRoot = !location.pathname.includes('/fa/');
  const prefersFa = navigator.language && navigator.language.toLowerCase().startsWith('fa');
  const alreadyChosen = sessionStorage.getItem('lang-chosen');

  if (isRoot && prefersFa && !alreadyChosen) {
    sessionStorage.setItem('lang-chosen', '1');
    location.href = 'fa/index.html';
  }
})();

// ===== YEAR IN FOOTER =====
document.getElementById('year').textContent = new Date().getFullYear();