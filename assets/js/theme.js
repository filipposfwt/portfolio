// --- Dark/light theme toggle (initial theme set in head.html to avoid flash) ---
(function () {
  var btn = document.querySelector('.theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var root = document.documentElement;
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
})();

// --- Hamburger menu overlay ---
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var overlay = document.getElementById('site-menu');
  if (!toggle || !overlay) return;

  function setOpen(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  toggle.addEventListener('click', function () {
    setOpen(!document.body.classList.contains('menu-open'));
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // Close when a menu link is clicked
  overlay.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });
})();

// --- Lightbox slideshow (ceramics + any [data-gallery] trigger) ---
(function () {
  var lb = document.getElementById('lightbox');
  if (!lb) return;
  var imgEl = lb.querySelector('.lightbox__img');
  var titleEl = lb.querySelector('.lightbox__title');
  var counterEl = lb.querySelector('.lightbox__counter');
  var gallery = [];
  var idx = 0;

  function render() {
    imgEl.src = gallery[idx];
    counterEl.textContent = (idx + 1) + ' / ' + gallery.length;
  }
  function open(urls, title, bg, start) {
    if (!urls || !urls.length) return;
    gallery = urls;
    idx = Math.min(Math.max(parseInt(start, 10) || 0, 0), urls.length - 1);
    titleEl.textContent = title || '';
    lb.style.setProperty('--lb-bg', bg || '#ffffff');
    document.body.classList.add('lightbox-open');
    lb.setAttribute('aria-hidden', 'false');
    render();
  }
  function close() {
    document.body.classList.remove('lightbox-open');
    lb.setAttribute('aria-hidden', 'true');
    imgEl.src = '';
  }
  function step(n) {
    idx = (idx + n + gallery.length) % gallery.length;
    render();
  }

  document.querySelectorAll('[data-gallery]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var urls;
      try { urls = JSON.parse(btn.getAttribute('data-gallery')); } catch (e) { return; }
      open(urls, btn.getAttribute('data-title'), btn.getAttribute('data-bg'), btn.getAttribute('data-index'));
    });
  });

  lb.querySelector('.lightbox__close').addEventListener('click', close);
  lb.querySelector('.lightbox__nav--next').addEventListener('click', function () { step(1); });
  lb.querySelector('.lightbox__nav--prev').addEventListener('click', function () { step(-1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });

  document.addEventListener('keydown', function (e) {
    if (lb.getAttribute('aria-hidden') === 'true') return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') step(1);
    else if (e.key === 'ArrowLeft') step(-1);
  });
})();
