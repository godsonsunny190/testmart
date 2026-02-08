$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});


/* ===================================== */
/*             FADE SLIDER              */
/* ===================================== */

var swiper = new Swiper(".hero-banner", {
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
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 4.2,
      spaceBetween: 30,
    },

    1280: {
      slidesPerView: 5,
      spaceBetween: 40,
    },

    1440: {
      slidesPerView: 7,
      spaceBetween: 80,
    }
  }
});


/* ===================================== */
/*             PRODUCT SLIDER            */
/* ===================================== */

var swiper = new Swiper(".whitepaper-carousel", {
  spaceBetween: 30,
  slidesPerView: 4,
  centerSlide: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

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
      spaceBetween: 30,
    },
  }
});



/* ===================================== */
/*                 SLIDER - 1            */
/* ===================================== */

var swiper = new Swiper(".slider-1", {
  spaceBetween: 24,
  slidesPerView: 3,
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
      slidesPerView: 3,
      spaceBetween: 24,
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

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (mobileMenuToggle) {
    const toggleMenu = (isOpen) => {
      mobileMenu?.classList.toggle('active', isOpen);
      mobileOverlay?.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
    };

    mobileMenuToggle.addEventListener('click', () => toggleMenu(true));
    mobileMenuClose?.addEventListener('click', () => toggleMenu(false));
    mobileOverlay?.addEventListener('click', () => toggleMenu(false));
  }

  document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
      const dropdown = document.getElementById(this.dataset.target);
      const icon = this.querySelector('.mobile-dropdown-icon');
      const isActive = dropdown.classList.contains('active');

      document.querySelectorAll('.mobile-dropdown-content').forEach(d => d.classList.remove('active'));
      document.querySelectorAll('.mobile-dropdown-icon').forEach(i => i.classList.remove('rotated'));

      if (!isActive) {
        dropdown.classList.add('active');
        icon?.classList.add('rotated');
        this.setAttribute('aria-expanded', 'true');
      } else {
        this.setAttribute('aria-expanded', 'false');
      }
    });
  });
});


/* ===================================== */
/*               MODAL SCRIPT            */
/* ===================================== */
const triggers = document.querySelectorAll(".trigger");
const modals = document.querySelectorAll(".modal");

triggers.forEach(trigger => {
  trigger.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.classList.add("show-modal");
  });
});

modals.forEach(modal => {
  const closeButton = modal.querySelector(".close-button");
  closeButton.addEventListener("click", function () {
    modal.classList.remove("show-modal");
  });
});

window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.classList.remove("show-modal");
  }
});


/* ===================================== */
/* PRODUCT LISTVIEW AND GRIDVIEW JS    */
/* ===================================== */
(function() {
  const listViewBtn = document.getElementById('listViewBtn');
  const gridViewBtn = document.getElementById('gridViewBtn');
  const productsContainer = document.getElementById('productsContainer');

  if (listViewBtn && gridViewBtn && productsContainer) {
    listViewBtn.addEventListener('click', () => {
      productsContainer.classList.remove('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-5');
      productsContainer.classList.add('listView', 'flex', 'flex-col', 'gap-4');

      listViewBtn.classList.add('bg-sky-600');
      listViewBtn.querySelector('svg')?.classList.add('text-white');
      gridViewBtn.classList.remove('bg-sky-600');
      gridViewBtn.querySelector('svg')?.classList.remove('text-white');
    });

    gridViewBtn.addEventListener('click', () => {
      productsContainer.classList.remove('listView', 'flex', 'flex-col', 'gap-4');
      productsContainer.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-5');

      gridViewBtn.classList.add('bg-sky-600');
      gridViewBtn.querySelector('svg')?.classList.add('text-white');
      listViewBtn.classList.remove('bg-sky-600');
      listViewBtn.querySelector('svg')?.classList.remove('text-white');
    });
  }
})();

/* ===================================== */
/* DETAILS ASIDE JS            */
/* ===================================== */
(function() {
  const yesBtn = document.getElementById('yes-button');
  const asidePrimary = document.querySelector('.aside-primary');
  const asideSecondary = document.querySelector('.aside-secondery');

  if (yesBtn && asidePrimary && asideSecondary) {
    yesBtn.addEventListener('click', function() {
      asidePrimary.classList.add('hidden');
      asideSecondary.classList.remove('hidden');
    });
  }
})();

/* ===================================== */
/*        PRODUCT RANGE SLIDER JS        */
/* ===================================== */
(function() {
  const rangeSlider = document.getElementById('rangeInput');
  const progressBar = document.getElementById('progressBar');
  const handle = document.getElementById('handle');
  const tooltip = document.getElementById('tooltip');
  const tooltipText = document.getElementById('tooltipText');

  if (rangeSlider && progressBar && handle) {
    rangeSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      const min = e.target.min || 0;
      const max = e.target.max || 100;
      const percent = ((val - min) / (max - min)) * 100;

      progressBar.style.width = `${percent}%`;
      handle.style.left = `${percent}%`;
      if (tooltip) tooltip.style.left = `${percent}%`;
      if (tooltipText) tooltipText.innerText = `$${val}`;
    });
  }
})();

/* ===================================== */
/*                   TAB JS              */
/* ===================================== */

$(".tabBtn").on("click", function(e) {
    var $this = $(this),
        target = $this.data("target");

    $this.addClass("active")
         .siblings(".tabBtn")
         .removeClass("active");

    $(".tabContent").hide().removeClass("active");
    $(target).show().addClass("active");
});

/* ===================================== */
/*             THUMB SLIDER              */
/* ===================================== */

  var swiper = new Swiper(".gallery-slider", {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".thumb-slider", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


/* ===================================== */
/*             PRODUCT SLIDER            */
/* ===================================== */

const contentSlider = new Swiper('.content-block-slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


/* ===================================== */
/*             SEARCH SCRIPT             */
/* ===================================== */

$(document).ready(function () {
  function initializeSelect(selectBox) {
    const searchInput = selectBox.find(".custom-select-input");
    const listBox = selectBox.find(".custom-select-list");
    const items = listBox.find("li:not(.custom-select-empty)");
    const emptyItem = listBox.find(".custom-select-empty");

    function filterItems(value) {
      let count = 0;
      items.each(function () {
        const match = $(this).text().toLowerCase().includes(value);
        $(this).toggle(match && count++ < 10);
      });
      return count;
    }

    function toggleList(value, count) {
      listBox.toggle(value.length > 0);
      emptyItem.toggle(value.length > 0 && count === 0);
    }

    function selectItem(item) {
      searchInput.val(item.text());
      listBox.hide();
      console.log("Selected:", item.text(), "ID:", item.data("id"));
    }

    searchInput.on("input focus", function () {
      const value = $(this).val().toLowerCase();
      toggleList(value, filterItems(value));
    });

    searchInput.on("blur", function () {
      const value = $(this).val().toLowerCase();
      if (!items.filter((_, el) => $(el).text().toLowerCase() === value).length) {
        $(this).val("");
      }
    });

    listBox.on("mousedown", "li:not(.custom-select-empty)", function () {
      selectItem($(this));
    });

    searchInput.on("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const firstItem = listBox.find("li:not(.custom-select-empty):visible").first();
        if (firstItem.length) selectItem(firstItem);
      } else if (e.key === "Escape") {
        $(this).val("");
        listBox.hide();
      }
    });
  }

  initializeSelect($("#vendor_select"));
  initializeSelect($("#customer_select"));
});
