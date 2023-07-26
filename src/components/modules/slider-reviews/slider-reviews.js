import Swiper, { Navigation } from "swiper";

new Swiper(".swiper-container", {
  modules: [Navigation],
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 20,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 16,

    },
    374: {
        slidesPerView: 1,
        spaceBetween: 16,

    },
    // when window width is >= 480px
    480: {
        slidesPerView: 3,
        spaceBetween: 30,

    },
    // when window width is >= 640px
    600: {
        slidesPerView: 2,
        spaceBetween: 30,

    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,

    }
}
});
