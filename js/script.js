//Main-slider 

const mainSliderWrapper = document.querySelector('.main-slider'),
mainSlider = document.querySelector('.main-slider__slides'),
mainSlide = document.querySelectorAll('.main-slider__slide'),
mainSliderBtns = document.querySelectorAll('.main-slider__btn');



mainSliderBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    
    mainSlider.style.transform = 'translateX(-1600px)'
  });
});