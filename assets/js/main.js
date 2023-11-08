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


  var options = {
    accessibility: true,
    prevNextButtons: false,
    pageDots: true,
    setGallerySize: true,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15
    }
  };
  
  var carousel = document.querySelector('[data-carousel]');
  var slides = document.getElementsByClassName('carousel-cell');
  var flkty = new Flickity(carousel, options);
  
  flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
      var image = slides[i];
      var x = (slide.target + flkty.x) * -1/3;
      image.style.backgroundPosition = x + 'px';

    });
  });


  /* Easy on scroll event listener   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /* Navbar links active state on scroll  */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /* Scrolls to an element with header offset  */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  /* Back to top button  */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /* Mobile nav toggle  */
  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /* Scrool with ofset on links with a class name .scrollto  */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let body = select("body");
        if (body.classList.contains("mobile-nav-active")) {
          body.classList.remove("mobile-nav-active");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /* Scroll with ofset on page load with hash links in the url */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /* Hero type effect  */
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
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

  /*Clock*/
  let date = document.getElementById("date");
  let time = document.getElementById("time");
  let d, currentDate, currentTime, lastDate, lastTime;

  function tick() {
    d = new Date();

    currentDate = d.toLocaleDateString("ru", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    currentTime = d.toLocaleTimeString("ru", {
      hour: "numeric",
      minute: "numeric",
    });

    if (lastDate !== currentDate) {
      date.textContent = currentDate;
      lastDate = currentDate;
    }

    if (lastTime !== currentTime) {
      let meridian = currentTime.substr(currentTime.length - 2);
      time.innerHTML =
        currentTime.substr(0, currentTime.length - 3) + ":" + meridian;
      lastTime = currentTime;
    }
  }

  tick();
  setInterval(tick, 1000);

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
