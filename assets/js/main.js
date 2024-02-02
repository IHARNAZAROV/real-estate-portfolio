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

 
  var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
    effect: "fade",
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
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


  // Hero slider JS
  $(".hero-slider").owlCarousel({
    animateOut: "flipOutX",
    animateIn: "fadeIn",
    items: 1,
    loop: true,
    nav: true,
    dots: true,
  });

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
