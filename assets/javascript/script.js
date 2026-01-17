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
  spaceBetween: 28,
  slidesPerView: 5,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3.2,
    },
    1024: {
      slidesPerView: 4,
    },

    1280: {
      slidesPerView: 5,
    },

  },

});




/* ===================================== */
/*             PRODUCT SLIDER            */
/* ===================================== */

var swiper = new Swiper(".logo-carousel", {
  spaceBetween: 80,
  slidesPerView: 7,
  centerSlide: true,
  loop: true,
  // autoplay: {
  //   delay: 1500,
  //   disableOnInteraction: false,
  // },
});



/* ===================================== */
/*           ACCORDION SCRIPT            */
/* ===================================== */

document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('svg');
    const title = button.querySelector('span');
    const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';

    // Close all items
    document.querySelectorAll('.accordion-content').forEach(item => {
      item.style.maxHeight = '0px';
      const parent = item.previousElementSibling;
      const otherIcon = parent.querySelector('svg');
      const otherTitle = parent.querySelector('span');
      otherIcon.classList.remove('rotate-180');
      otherIcon.classList.replace('text-[#0075BF]', 'text-black');
      otherTitle.classList.replace('text-[#0075BF]', 'text-black');
    });

    // Open clicked item if it was closed
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add('rotate-180');
      icon.classList.replace('text-black', 'text-[#0075BF]');
      title.classList.replace('text-black', 'text-[#0075BF]');
    }
  });
});