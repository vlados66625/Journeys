let navMain = document.querySelector('.header-top__navigation');
let navToggle = document.querySelector('.header-top__toggle');
let navLogo = document.querySelector('.header-top__logo');
let navTelephoneIcon = document.querySelector('.header-top__telephone');


export const addEvtToggleButton = () => {
  if (navMain && navToggle && navLogo && navTelephoneIcon) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('header-top__navigation--closed')) {
        navMain.classList.remove('header-top__navigation--closed');
        navMain.classList.add('header-top__navigation--opened');
        navToggle.classList.remove('header-top__toggle--closed');
        navToggle.classList.add('header-top__toggle--opened');
        navLogo.classList.add('header-top__logo-icon--dark');
        navTelephoneIcon.classList.add('header-top__telephone--dark');
      } else {
        navMain.classList.add('header-top__navigation--closed');
        navMain.classList.remove('header-top__navigation--opened');
        navToggle.classList.add('header-top__toggle--closed');
        navToggle.classList.remove('header-top__toggle--opened');
        navLogo.classList.remove('header-top__logo-icon--dark');
        navTelephoneIcon.classList.remove('header-top__telephone--dark');
      }
    });
  }
};
