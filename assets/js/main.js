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

 /* Testimonials slider   */
/* new Swiper(".testimonials-slider", {
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
  }); */
 
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


// Snow
/* document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.querySelector(".snow-container");

  const particlesPerThousandPixels = 0.1;
  const fallSpeed = 1.25;
  const pauseWhenNotActive = true;
  const maxSnowflakes = 200;
  const snowflakes = [];

  let snowflakeInterval;
  let isTabActive = true;

  function resetSnowflake(snowflake) {
      const size = Math.random() * 5 + 1;
      const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
      const viewportHeight = window.innerHeight;

      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
      snowflake.style.top = `-${size}px`;

      const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
      snowflake.style.animationDuration = `${animationDuration}s`;
      snowflake.style.animationTimingFunction = "linear";
      snowflake.style.animationName =
          Math.random() < 0.5 ? "fall" : "diagonal-fall";

      setTimeout(() => {
          if (parseInt(snowflake.style.top, 10) < viewportHeight) {
              resetSnowflake(snowflake);
          } else {
              snowflake.remove(); // Remove when it goes off the bottom edge
          }
      }, animationDuration * 1000);
  }

  function createSnowflake() {
      if (snowflakes.length < maxSnowflakes) {
          const snowflake = document.createElement("div");
          snowflake.classList.add("snowflake");
          snowflakes.push(snowflake);
          snowContainer.appendChild(snowflake);
          resetSnowflake(snowflake);
      }
  }

  function generateSnowflakes() {
      const numberOfParticles =
          Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
          particlesPerThousandPixels;
      const interval = 5000 / numberOfParticles;

      clearInterval(snowflakeInterval);
      snowflakeInterval = setInterval(() => {
          if (isTabActive && snowflakes.length < maxSnowflakes) {
              requestAnimationFrame(createSnowflake);
          }
      }, interval);
  }

  function handleVisibilityChange() {
      if (!pauseWhenNotActive) return;

      isTabActive = !document.hidden;
      if (isTabActive) {
          generateSnowflakes();
      } else {
          clearInterval(snowflakeInterval);
      }
  }

  generateSnowflakes();

  window.addEventListener("resize", () => {
      clearInterval(snowflakeInterval);
      setTimeout(generateSnowflakes, 1000);
  });

  document.addEventListener("visibilitychange", handleVisibilityChange);
}); */


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
