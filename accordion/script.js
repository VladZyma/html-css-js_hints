'use strict';
// ====== ACCORDION v1 ======
const accordionEl = document.querySelector('.accordion');

accordionEl.addEventListener('click', function (e) {
  const target = e.target;
  const currTarget = e.currentTarget;

  if (target !== currTarget) {
    target
      .closest('.accordion__item')
      .classList.toggle('accordion__item--open');
  }
});
