//Main-slider 

const mainSliderWrapper = document.querySelector('.main-slider'),
mainSlider = document.querySelector('.main-slider__slides'),
mainSlide = document.querySelectorAll('.main-slider__slide'),
mainSliderBtns = document.querySelectorAll('.main-slider__btn');

let slideWidth = getComputedStyle(mainSlide[0]).width.slice(0, -2)

mainSliderBtns.forEach((btn, i) => {

  function changeSlide(size) {
    btn.addEventListener('click', () => {
      mainSlider.style.transform = `translateX(${size}px)`
      mainSliderBtns.forEach(btn => {
        btn.classList.remove('brown-btn')
      })
      btn.classList.add('brown-btn')
    });
  }

  switch(i) {
    case 0: 
      changeSlide(0)
      break 
    case 1: 
      changeSlide(-slideWidth)
      break
    case 2: 
      changeSlide(-slideWidth * 2)
      break
  }

});

// Two-blocks slider 

const indexPersonSliderWrapper = document.querySelector('.two-blocks__slider-wrapper'),
indexPersonSlider = document.querySelector('.two-blocks__slider'),
indexPersonSlide = document.querySelector('.two-blocks__slide'),
indexPersonPrevBtn = document.querySelector('.two-blocks__slider-btn-prev'), 
indexPersonNextBtn = document.querySelector('.two-blocks__slider-btn-next');

let offsetPerson = 0;
let personWrapperWidth = getComputedStyle(indexPersonSliderWrapper).width.slice(0, -2);


indexPersonNextBtn.addEventListener('click', () => {

  if (offsetPerson == indexPersonSliderWrapper.offsetWidth * 2) {
    offsetPerson = 0
  } else {
    offsetPerson += indexPersonSlide.offsetWidth
  }

  indexPersonSlider.style.transform = `translateX(-${offsetPerson}px)`;

});


indexPersonPrevBtn.addEventListener('click', () => {

  if (offset == 0) {
    offset = indexPersonSliderWrapper.offsetWidth * 2
  } else {
    offset -= indexPersonSlide.offsetWidth
  }

  indexPersonSlider.style.transform = `translateX(-${offset}px)`;

});

//Footer slider

const footerSliderWrapper = document.querySelector('.footer__slider-wrapper'), 
footerSlider = document.querySelector('.footer__slider'), 
footerSlide = document.querySelector('.footer__slider-image'),
footerSliderPrevBtn = document.querySelector('.footer__slider-btn-prev'),
footerSliderNextBtn = document.querySelector('.footer__slider-btn-next');

let offsetFooter = 0;
let footerWrapperWidth = getComputedStyle(footerSliderWrapper).width.slice(0, -2);

footerSliderNextBtn.addEventListener('click', () => {

  if (offsetFooter == footerSlide.offsetWidth * 2) {
    offsetFooter = 0
  } else {
    offsetFooter += footerSlide.offsetWidth
  }

  footerSlider.style.transform = `translateX(-${offsetFooter}px)`

});

footerSliderPrevBtn.addEventListener('click', () => {

  if (offsetFooter == 0) {
    offsetFooter = footerSlide.offsetWidth * 2
  } else {
    offsetFooter -= footerSlide.offsetWidth
  }

  footerSlider.style.transform = `translateX(-${offsetFooter}px)`

});