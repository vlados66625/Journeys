// Swiper 10.2.0
import './vendor/focus-visible-polyfill';
import Swiper from './vendor/swiper';

window.addEventListener('DOMContentLoaded', () => {
  const heroSwiper = new Swiper('.header-bottom', {
    loop: true,
    speed: 300,
    pagination: {
      el: '.header-bottom__swiper-pagination',
      clickable: true,
    },
  });

  const upcomingTours = new Swiper('.upcoming-tours__swiper', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.upcoming-tours__button-next',
      prevEl: '.upcoming-tours__button-prev',
    },
  });

  const trainingSwiper = new Swiper('.training__swiper', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.training__button-next',
      prevEl: '.training__button-prev',
    },
  });

  const updateSwiperOptions = () => {
    if (window.innerWidth >= 1200) {
      upcomingTours.params.spaceBetween = 30;
      upcomingTours.params.slidesPerView = 3;

      trainingSwiper.params.slidesPerView = 4;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      upcomingTours.params.slidesPerView = 2;
      upcomingTours.params.spaceBetween = 18;


      trainingSwiper.params.slidesPerView = 3;
    } else {
      upcomingTours.params.slidesPerView = 1;

      trainingSwiper.params.slidesPerView = 1;
    }
    upcomingTours.update();
    upcomingTours.updateSlides();


    trainingSwiper.update();
    trainingSwiper.updateSlides();
  };


  updateSwiperOptions();
  window.addEventListener('resize', updateSwiperOptions);

});
