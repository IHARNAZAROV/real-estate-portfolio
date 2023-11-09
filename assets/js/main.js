(function () {
  "use strict";

  /* Loader */

  setTimeout(() => {
    document.querySelector("#loading").style.display = "none";
  }, 3000);


 

  /* Easy selector helper function */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /* Easy event listener function */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const sliderContainer = document.querySelector('.slider-container')
  const slideRight = document.querySelector('.right-slide')
  const slideLeft = document.querySelector('.left-slide')
  const upButton = document.querySelector('.up-button')
  const downButton = document.querySelector('.down-button')
  const slidesLength = slideRight.querySelectorAll('div').length
  
  let activeSlideIndex = 0
  
  slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
  
  upButton.addEventListener('click', () => changeSlide('up'))
  downButton.addEventListener('click', () => changeSlide('down'))
  
  const changeSlide = (direction) => {
      const sliderHeight = sliderContainer.clientHeight
      if(direction === 'up') {
          activeSlideIndex++
          if(activeSlideIndex > slidesLength - 1) {
              activeSlideIndex = 0
          }
      } else if(direction === 'down') {
          activeSlideIndex--
          if(activeSlideIndex < 0) {
              activeSlideIndex = slidesLength - 1
          }
      }
  
      slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
      slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
  }



  /* Testimonials slider   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /* Animation on scroll   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  /* Initiate Pure Counter   */
  new PureCounter();



  window.transitionToPage = function (href) {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function () {
      window.location.href = href;
    }, 2000);
  };

  document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector("body").style.opacity = 1;
  });
})();