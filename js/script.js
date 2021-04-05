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
  }

});