let navMain = document.querySelector('.header-top__navigation');
let navToggle = document.querySelector('.header-top__toggle');

export const addEvtToggleButton = () => {
  if (navMain && navToggle) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('header-top__navigation--closed')) {
        navMain.classList.remove('header-top__navigation--closed');
        navMain.classList.add('header-top__navigation--opened');
        navToggle.classList.remove('header-top__toggle--closed');
        navToggle.classList.add('header-top__toggle--opened');
      } else {
        navMain.classList.add('header-top__navigation--closed');
        navMain.classList.remove('header-top__navigation--opened');
        navToggle.classList.add('header-top__toggle--closed');
        navToggle.classList.remove('header-top__toggle--opened');
      }
    });
  }
}
