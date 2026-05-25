/* FortunaDelClub – Shared JS
   Handles: shared includes loader, mobile nav, tab switching, scroll animations
*/

// ── Shared includes loader ──────────────────────────────────────────────────
// Loads ann-bar, header, footer from assets/includes/ into placeholder divs.
// After header loads: sets active nav link and re-attaches hamburger handler.
// CSS hides placeholders until loaded to prevent flash of unstyled content.

(function loadIncludes() {
  const base = (function getBase() {
    const scripts = document.getElementsByTagName('script');
    for (let s of scripts) {
      if (s.src && s.src.includes('main.js')) {
        return s.src.replace('main.js', 'includes/');
      }
    }
    return 'assets/includes/';
  })();

  function load(id, file, callback) {
    const el = document.getElementById(id);
    if (!el) return;
    fetch(base + file)
      .then(r => r.ok ? r.text() : Promise.reject(r.status))
      .then(html => {
        el.outerHTML = html;
        if (callback) callback();
      })
      .catch(err => console.warn('FDC include error:', file, err));
  }

  // Load announcement bar
  load('fdc-ann-bar', 'ann-bar.html');

  // Load header, then set active nav link + re-attach hamburger
  load('fdc-header', 'header.html', function () {
    // Set active nav link based on current page filename
    const page = location.pathname.split('/').pop() || 'index.html';
    const link = document.querySelector('#main-nav a[href="' + page + '"]');
    if (link) link.classList.add('active');
  });

  // Load footer
  load('fdc-footer', 'footer.html');
})();

// ── Mobile nav toggle ───────────────────────────────────────────────────────
// Called from hamburger button onclick. Works after header include loads
// because onclick is re-evaluated from the injected HTML.
function toggleNav(btn) {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

// ── Tab switching ───────────────────────────────────────────────────────────
function switchTab(btn, targetId) {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.tab-content').forEach(c => {
    c.classList.remove('active');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
  const target = document.getElementById(targetId);
  if (target) target.classList.add('active');
}

// ── Scroll fade-in ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.info-card, .step, details, .update-card')
    .forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      observer.observe(el);
    });
});
