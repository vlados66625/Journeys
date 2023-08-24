// Swiper 10.2.0
import './vendor/focus-visible-polyfill';
import Swiper from './vendor/swiper';

window.addEventListener('DOMContentLoaded', () => {
  const heroSwiper = new Swiper('.swiper-hero', {
    loop: true,
  });
});
