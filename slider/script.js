'use strict';
// ====== V1 ======
function slider() {
  const slides = document.querySelectorAll('.slider__item-wrapper');
  const btnLeft = document.querySelector('.slider__item-btn-left');
  const btnRight = document.querySelector('.slider__item-btn-right');
  const dots = document.querySelectorAll('.slider__dot');

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

// ====== V2 ======
function slider2() {
  const slides = document.querySelectorAll('.slider2__item');
  const btnLeft = document.querySelector('.slider2__btn--left');
  const btnRight = document.querySelector('.slider2__btn--right');

  let curSlide = 0;
  const totalSlides = slides.length;

  function goToSlide(slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }
  goToSlide(0);

  // nextSlide
  function nextSlide() {
    if (curSlide === totalSlides - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  }

  // prevSlide
  function prevSlide() {
    if (curSlide === 0) {
      curSlide = totalSlides - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  }

  btnLeft.addEventListener('click', prevSlide);
  btnRight.addEventListener('click', nextSlide);

  // slider keyboard events
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });

  // slider dots
  const dotsContainer = document.querySelector('.slider2__dots');

  function createDots() {
    slides.forEach((s, i) => {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class='slider2__dot' data-slide='${i}'></button>`,
      );
    });
  }
  createDots();

  function activateDot(slider) {
    document
      .querySelectorAll('.slider2__dot')
      .forEach(d => d.classList.remove('slider2__dot--active'));

    document
      .querySelector(`.slider2__dot[data-slide = '${slider}']`)
      .classList.add('slider2__dot--active');
  }
  activateDot(0);

  dotsContainer.addEventListener('click', function (e) {
    const target = e.target;

    if (target.classList.contains('slider2__dot')) {
      const slide = target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
}
slider2();

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  // console.log(e);
  e.returnValue = true;
});
