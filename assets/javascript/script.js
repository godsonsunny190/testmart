/* ===================================== */
/*             FADE SLIDER              */
/* ===================================== */

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/* ===================================== */
/*             PRODUCT SLIDER            */
/* ===================================== */

var swiper = new Swiper(".product-carousel", {
  spaceBetween: 30,
  slidesPerView: 5,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});