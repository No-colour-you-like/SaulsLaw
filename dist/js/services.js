// Services change title color on hover 

const serviceBlockImage = document.querySelectorAll('.service-block__image'),
serviceBlockTtitle = document.querySelectorAll('.service-block__title'); 

serviceBlockImage.forEach((image, i) => {

  image.addEventListener('mouseover', () => {
    serviceBlockTtitle[i].classList.add('brown-color')
  })

  image.addEventListener('mouseout', () => {
    serviceBlockTtitle[i].classList.remove('brown-color')
  })

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