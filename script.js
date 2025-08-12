// Basic client-side enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Newsletter UX
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', () => {
      setTimeout(() => {
        alert('Thanks! Please check your email to confirm.');
      }, 100);
    });
  }
});
