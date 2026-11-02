(function () {
  'use strict';

  /* Belt and braces for hosts that cannot force HTTPS: send plain-HTTP visitors to the secure page. */
  if (location.protocol === 'http:' && location.hostname === 'dynamobuildingsolutions.com') {
    location.replace('https://' + location.host + location.pathname + location.search + location.hash);
    return;
  }

  var btn = document.getElementById('menu-btn');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
  }
  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });
})();
