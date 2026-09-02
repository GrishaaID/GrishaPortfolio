// ==========================================================
// Mobile nav toggle
// ==========================================================
const railToggle = document.getElementById('railToggle');
const railLinks = document.querySelector('.rail-links');

railToggle.addEventListener('click', () => {
  railLinks.classList.toggle('open');
});

// close mobile menu after picking a link
railLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    railLinks.classList.remove('open');
  });
});

// ==========================================================
// Active link highlight while scrolling
// ==========================================================
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.rail-links a');

const highlightObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -50% 0px' }
);

sections.forEach((section) => highlightObserver.observe(section));

// ==========================================================
// Reveal sections on scroll (fade + rise, once)
// ==========================================================
const revealTargets = document.querySelectorAll('.workflow, .projects, .about, .contact');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

// ==========================================================
// Contact form (client-side only — hook up a real backend/
// form service like Formspree, Netlify Forms, etc. later)
// ==========================================================
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Thanks — this is a static demo, so nothing was actually sent yet. Wire this up to a form service to go live.';
  form.reset();
});
