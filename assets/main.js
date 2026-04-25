/* FortunaDelClub – Shared JS */

// Mobile nav toggle
function toggleNav(btn) {
  const nav = document.getElementById('main-nav');
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

// Tab switching
function switchTab(btn, targetId) {
  const parent = btn.closest('[data-tabs]') || document;
  parent.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
  parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active'); btn.setAttribute('aria-selected','true');
  document.getElementById(targetId).classList.add('active');
}

// Scroll fade-in
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.info-card, .step, details, .update-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
  });
});
