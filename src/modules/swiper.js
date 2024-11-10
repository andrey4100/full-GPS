import Swiper from 'swiper/bundle';
import 'swiper/scss';

// swiperBrand

export let swiperBrand = new Swiper('.swiper-brand', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1.2,
  
    on: {
      resize: () => {
        if (window.innerWidth >= 767) {
          if (swiperBrand !== null) {
            swiperBrand.destroy(true, true)
            swiperBrand = null
          }
        }
      },
    },

    pagination:{
        el: '.my-custom-pagination-div1',
        clickable: true,
        renderBullet: (index, className) => {
        return '<span class="' + className + '">'  + "</span>";
        },
      },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      420: {
        slidesPerView: 1.65,
      },
      520: {
        slidesPerView: 2.05,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        enabled: false,
      },
    },
  });

// swiperMachinery

let swiperMachinery = new Swiper('.swiper-machinery', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 0,
  slidesPerView: 1.2,

  on: {
    resize: () => {
      if (window.innerWidth >= 767) {
        if (swiperMachinery !== null) {
          swiperMachinery.destroy(true, true)
          swiperMachinery = null
        }
      }
    },
  },

  pagination:{
      el: '.my-custom-pagination-div2',
      clickable: true,
      renderBullet: (index, className) => {
      return '<span class="' + className + '">'  + "</span>";
      },
    },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    420: {
      slidesPerView: 1.65,
    },
    520: {
      slidesPerView: 2.05,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      enabled: false,
    },
  },
});


// swiperPrice

let swiperPrice = new Swiper('.swiper-price', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 0,
  slidesPerView: 1.2,

  on: {
    resize: () => {
      if (window.innerWidth >= 767) {
        if (swiperPrice !== null) {
          swiperPrice.destroy(true, true)
          swiperPrice = null
        }
      }
    },
  },

  pagination:{
      el: '.my-custom-pagination-div3',
      clickable: true,
      renderBullet: (index, className) => {
      return '<span class="' + className + '">'  + "</span>";
      },
    },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    420: {
      slidesPerView: 1.65,
    },
    520: {
      slidesPerView: 2.05,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      enabled: false,
    },
  },
});
