// Swiper 10.2.0
import './vendor/focus-visible-polyfill';
import Swiper from './vendor/swiper';

window.addEventListener('DOMContentLoaded', () => {
  const heroSwiper = new Swiper('.header-bottom', {
    loop: true,
    pagination: {
      el: '.header-bottom__swiper-pagination',
      clickable: true,
    },
  });
});
