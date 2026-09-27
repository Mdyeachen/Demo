document.addEventListener("DOMContentLoaded", function () {
  /* ==========================================================================
    Header Section Start
  ========================================================================== */

  // header sticky change class
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    const scrollThreshold = window.innerHeight * 0.5;
    if (window.scrollY > scrollThreshold) {
      header.classList.add("header-bg");
    } else {
      header.classList.remove("header-bg");
    }
  });
  /* ==========================================================================
    Header Section End
  ========================================================================== */

  /* ==========================================================================
     Header Section Start
  ========================================================================== */

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: "4%",
    autoHeight: false,
    centeredSlides: true,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,

    mousewheel: {
      forceToAxis: true,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    breakpoints: {
      // Tablet
      768: {
        slidesPerView: 2,
        spaceBetween: "4%",
      },

      // Desktop
      992: {
        slidesPerView: 3,
        spaceBetween: "2%",
      },
    },

    /* Pagination Dots */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    /* Scrollbar */
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },

    navigation: false,
  });

  /* ==========================================================================
     Header Section End
  ========================================================================== */
});
