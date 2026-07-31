// ==========================================================================
// AI Income Academy — script.js (vanilla JS, no dependencies)
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky header shadow on scroll ---------- */
  var header = document.getElementById('siteHeader');
  function handleHeaderScroll() {
    if (window.scrollY > 12) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  handleHeaderScroll();
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  function closeNav() {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  /* ---------- FAQ accordion ---------- */
  var triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach(function (trigger) {
    var panel = trigger.nextElementSibling;
    panel.style.maxHeight = '0px';

    trigger.addEventListener('click', function () {
      var isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // close all other panels (single-open accordion)
      triggers.forEach(function (t) {
        if (t !== trigger) {
          t.setAttribute('aria-expanded', 'false');
          t.nextElementSibling.style.maxHeight = '0px';
        }
      });

      if (isOpen) {
        trigger.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = '0px';
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Scroll reveal (fade-in sections) ---------- */
  var revealSelectors = [
    '.inside-card', '.bonus-card', '.testimonial-card', '.chip-card',
    '.benefit-item', '.section-title', '.section-sub'
  ];
  var revealEls = document.querySelectorAll(revealSelectors.join(','));

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    revealEls.forEach(function (el) { el.classList.add('reveal'); });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 5, 4) * 0.08) + 's';
      observer.observe(el);
    });
  }

  /* ---------- Back to top button ---------- */
  var backToTop = document.getElementById('backToTop');
  function toggleBackToTop() {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  toggleBackToTop();
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Lazy-load images (progressive enhancement) ---------- */
  document.querySelectorAll('img[data-src]').forEach(function (img) {
    if ('loading' in HTMLImageElement.prototype) {
      img.src = img.getAttribute('data-src');
      img.loading = 'lazy';
    } else if ('IntersectionObserver' in window) {
      var imgObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.getAttribute('data-src');
            obs.unobserve(entry.target);
          }
        });
      });
      imgObserver.observe(img);
    } else {
      img.src = img.getAttribute('data-src');
    }
  });

});
