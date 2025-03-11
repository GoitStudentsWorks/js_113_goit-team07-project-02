import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


new Swiper(".about-skills-swiper", {
    slidesPerView: 6,
    slidesPerGroup: 1,
    loop: true,

    modules: [Navigation, Pagination, Keyboard ],

    navigation: {
      nextEl: ".about-skills-btn",
    },
  
    keyboard: {
      enabled: true,
      pageUpDown: true,
    },
  
    mousewheel: {
      invert: true,
    },
  
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },

    on: {
      slideChangeTransitionEnd: function () {
        document.querySelectorAll(".about-skills-txt").forEach((e) => {
          e.classList.remove("ellips-red");
        });
  
        const visibleSlides = document.querySelectorAll(".swiper-slide");
        const firstVisibleSlide = Array.from(visibleSlides).find((slide) => {
          return slide.getBoundingClientRect().left >= 0;
        });
  
        if (firstVisibleSlide) {
          const firstTextElement =
            firstVisibleSlide.querySelector(".about-skills-txt");
          if (firstTextElement) {
            firstTextElement.classList.add("ellips-red");
          }
        }
      },
    },
  });

  new Accordion(".about-info", {
    duration: 500,
    showMultiple: true,
    openOnInit:[0],
    elementClass:"about-info-item",
    triggerClass:"about-info-btn",
    panelClass:"about-info-content",
    activeClass:"is-active",
  
  });  