'use strict';
// ====== V1 ======

function slider() {
  const slides = document.querySelectorAll('.slider__item-wrapper');
  const btnLeft = document.querySelector('.slider__item-btn-left');
  const btnRight = document.querySelector('.slider__item-btn-right');
  const dots = document.querySelectorAll('.slider__dot');

  console.log(slides);

  let curSlide = 0;
  const maxSlide = slides.length;

  function goToSlide(slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translate(${100 * (i - slide)}%, -50%)`;
    });
  }
  goToSlide(0);

  function activateDots(slide) {
    dots.forEach(d => d.classList.remove('slider__dot--fill'));
    dots[slide].classList.add('slider__dot--fill');
  }
  activateDots(0);

  // NEXT SLIDE
  function nextSlide() {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDots(curSlide);
  }

  // PREV SLIDE
  function prevSlide() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDots(curSlide);
  }

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
}
slider();
