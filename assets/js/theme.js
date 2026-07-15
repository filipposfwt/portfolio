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
