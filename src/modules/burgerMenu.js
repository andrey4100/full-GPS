// leftside-menu

export const btnMenuOpen = document.querySelector('.btn__burger');
const btnMenuClose = document.querySelector('.leftside-menu__btn-close');
const menuBurger = document.querySelector('.leftside-menu');
const menuBurgerBg = document.querySelector('.leftside-menu__bg');

btnMenuOpen.addEventListener('click', () => {
  menuBurger.classList.remove("leftside-menu--close");
  menuBurgerBg.classList.add("active");
});

btnMenuClose.addEventListener('click', () => {
  menuBurger.classList.add("leftside-menu--close");
  menuBurgerBg.classList.remove("active");
});

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(menuBurger) || e.composedPath().includes(btnMenuOpen) || e.composedPath().includes(modalBond) || e.composedPath().includes(callClose) || e.composedPath().includes(modalCall);
  if (!withinBoundaries) {
    menuBurger.classList.add("leftside-menu--close");
    menuBurgerBg.classList.remove("active");
  }
})


// modal-bond

export const bondOpenInmenu = document.querySelector('.chat__btn');
const bondOpenInHeader = document.querySelector('.bond__btn');
const bondClose = document.querySelector('.modal-bond__btn-close');
const modalBond = document.querySelector('.modal-bond');
const bgBond = document.querySelector('.modal-bond__bg');

bondOpenInmenu.addEventListener('click', () => {
  modalBond.classList.add("modal-bond--open");
  bgBond.classList.add("active");
  modalCall.classList.remove("modal-call--open");
});

bondOpenInHeader.addEventListener('click', () => {
  modalBond.classList.add("modal-bond--open");
  bgBond.classList.add("active");
});

bondClose.addEventListener('click', () => {
  modalBond.classList.remove("modal-bond--open");
  bgBond.classList.remove("active");
});

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(modalBond) || e.composedPath().includes(btnMenuOpen)|| e.composedPath().includes(menuBurger) || e.composedPath().includes(menuBurger) || e.composedPath().includes(bondOpenInHeader);
  if (!withinBoundaries) {
    modalBond.classList.remove("modal-bond--open");
    bgBond.classList.remove("active");
  }
})


// modal-call

const callOpenInMenu = document.querySelector('.call__btn');
const callOpenInHeader = document.querySelector('.phone__btn');
const callClose = document.querySelector('.modal-call__btn-close');
const modalCall = document.querySelector('.modal-call');
const bgCall = document.querySelector('.modal-call__bg');

callOpenInMenu.addEventListener('click', () => {
  modalCall.classList.add("modal-call--open");
  bgCall.classList.add("active");
  modalBond.classList.remove("modal-bond--open");
});

callOpenInHeader.addEventListener('click', () => {
  modalCall.classList.add("modal-call--open");
  bgCall.classList.add("active");
});

callClose.addEventListener('click', () => {
  modalCall.classList.remove("modal-call--open");
  bgCall.classList.remove("active");
});

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(modalBond) || e.composedPath().includes(btnMenuOpen)|| e.composedPath().includes(menuBurger) || e.composedPath().includes(callOpenInHeader) || e.composedPath().includes(modalCall);
  if (!withinBoundaries) {
    modalCall.classList.remove("modal-call--open");
    bgCall.classList.remove("active");
  }
})