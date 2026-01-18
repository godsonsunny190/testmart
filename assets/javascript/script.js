/* ===================================== */
/*             FADE SLIDER              */
/* ===================================== */

var swiper = new Swiper(".hero-banner", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,

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
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 28,
    },

    1280: {
      slidesPerView: 5,
      spaceBetween: 28,
    },

  },
});


/* ===================================== */
/*             PRODUCT SLIDER            */
/* ===================================== */


// Initialize Swiper
var swiper = new Swiper(".logo-carousel", {
  spaceBetween: 80,
  slidesPerView: 7,
  centeredSlides: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  loop: true,
  allowTouchMove: false,

  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 16,
    },

    640: {
      slidesPerView: 3.2,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 3.2,
    },

    1024: {
      slidesPerView: 4.2,
    },

    1280: {
      slidesPerView: 5,
    },

    1440: {
      slidesPerView: 7,
    }
  }
});

const marqueeEl = document.querySelector('.logo-carousel');
marqueeEl.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});

marqueeEl.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});


/* ===================================== */
/*             PRODUCT SLIDER            */
/* ===================================== */

var swiper = new Swiper(".whitepaper-carousel", {
  spaceBetween: 50,
  slidesPerView: 4,
  centerSlide: true,
  loop: true,
  // autoplay: {
  //   delay: 1500,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },

    1280: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
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


/* ===================================== */
/*           MOBILE MENU SCRIPT          */
/* ===================================== */

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

function openMobileMenu() {
  mobileMenu.classList.add('active');
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  mobileMenuToggle.setAttribute('aria-expanded', 'true');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
  mobileMenuToggle.setAttribute('aria-expanded', 'false');
}

mobileMenuToggle.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);


const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target');
    const dropdown = document.getElementById(targetId);
    const icon = this.querySelector('.mobile-dropdown-icon');

    dropdown.classList.toggle('active');
    icon.classList.toggle('rotated');
  });
});

/* ===================================== */
/*               MODAL SCRIPT            */
/* ===================================== */
// SOLUTION: All triggers open the same modal
const modal = document.querySelector(".modal");
const triggers = document.querySelectorAll(".trigger");
const closeButton = modal.querySelector(".close-button");

triggers.forEach(trigger => {
  trigger.addEventListener("click", function () {
    modal.classList.add("show-modal");
  });
});

closeButton.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("show-modal");
  }
});
