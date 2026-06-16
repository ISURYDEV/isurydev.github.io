/* Portfolio — interactions légères (vanilla JS, sans dépendance) */
(function () {
  'use strict';

  // Année dynamique dans le footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Menu mobile
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Révélation au défilement
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Bouton CV : affiché uniquement si le fichier CV existe réellement
  var cvButtons = document.querySelectorAll('#cvBtn, #cvBtn2');
  if (cvButtons.length) {
    fetch('CV_Ismail_Kramdi_Bouzouada_Alternance_Informatique.pdf', { method: 'HEAD' })
      .then(function (r) {
        if (r.ok) {
          cvButtons.forEach(function (b) { b.removeAttribute('hidden'); });
        }
      })
      .catch(function () { /* CV absent : les boutons restent masqués */ });
  }
})();
