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

//Services open info 

const serviceBtns = document.querySelectorAll('.interest-service__btn'),
serviceText = document.querySelectorAll('.interest-service__main-text');

serviceBtns.forEach((btn, i) => {

  btn.addEventListener('click', () => {
    serviceText.forEach(text => {
      text.classList.remove('height-open')
    });
    serviceText[i].classList.add('height-open')
  });

});

//Lines 

const experienceLinesFirst = document.querySelectorAll('.our-exps__single-line-first'),
experienceLinesSecond = document.querySelectorAll('.our-exps__single-line-second');


function lineWidth(i, valueFirst, valueSecond) {
  experienceLinesFirst[i].style.width = `${valueFirst}`
  experienceLinesSecond[i].style.width = `${valueSecond}`
}

lineWidth(0, '95%', '5%');
lineWidth(1, '80%', '20%');
lineWidth(2, '87%', '13%');
lineWidth(3, '73%', '27%');
lineWidth(4, '82%', '18%');


//About-slider 

const aboutSliderWrapper = document.querySelector('.about-slider__wrapper'),
aboutSlider = document.querySelector('.about-slider__main'), 
aboutSlide = document.querySelectorAll('.about-slide'),
aboutPrevBtn = document.querySelector('.about-slider__btn-prev'),
aboutNextBtn = document.querySelector('.about-slider__btn-next');


const sliderFunction = (wrapper, nextBtn, prevBtn, slide, slidesArr, slider) => {

  let offset = 0;
  let personWrapperWidth = getComputedStyle(wrapper).width.slice(0, -2);

  nextBtn.addEventListener('click', () => {

    if (offset == slidesArr.length * slide.offsetWidth - slide.offsetWidth) {
      offset = 0
    } else {
      offset += slide.offsetWidth
    }
  
    slider.style.transform = `translateX(-${offset}px)`;
  
  });

  prevBtn.addEventListener('click', () => {

    if (offset == 0) {
      offset = slidesArr.length * slide.offsetWidth - slide.offsetWidth
    } else {
      offset -= slide.offsetWidth
    }
  
    slider.style.transform = `translateX(-${offset}px)`;
  
  });

}

sliderFunction(aboutSliderWrapper, aboutNextBtn, aboutPrevBtn, aboutSlide[0], aboutSlide, aboutSlider)





