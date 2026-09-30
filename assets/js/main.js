document.addEventListener("DOMContentLoaded", function () {
  /* ==========================================================================
     GSAP Animation Section Start
  ========================================================================== */
  gsap.registerPlugin(ScrollTrigger);
  const imgContainer = document.querySelectorAll(".animation-img");
  const imgConRev = document.querySelectorAll(".animation-img-2");
  imgContainer.forEach((container) => {
    const img = container.querySelector("img");
    gsap.fromTo(
      img,
      {
        scale: 1,
      },
      {
        scale: 1.1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      },
    );
  });

  imgConRev.forEach((container) => {
    const img = container.querySelector("img");
    gsap.from(img, {
      scale: 1.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  });
  /* ==========================================================================
     GSAP Animation Section End
  ========================================================================== */

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
     Portfolio Section Start
  ========================================================================== */
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: "4%",
    autoHeight: false,
    centeredSlides: false,
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
      1200: {
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
     Portfolio Section End
  ========================================================================== */
});
