// Button showMoreBrand

export const showMoreBrand = document.querySelector('.brand__btn--show');
const showLessBrand = document.querySelector('.brand__btn--close');
const productsLengthBrand = document.querySelectorAll('.brand__cards-item').length;
let itemsBrand = 6;

showMoreBrand.addEventListener('click', () => {
  itemsBrand += 5;
  const arrayBrand = Array.from(document.querySelector('.swiper-wrapper').children);
  const visItemsBrand = arrayBrand.slice(0, itemsBrand);

  visItemsBrand.forEach(el => el.classList.add('is-visible'));
  if (visItemsBrand.length === productsLengthBrand) {
    showMoreBrand.classList.remove("visible");
    showMoreBrand.classList.add("hidden");
    showLessBrand.classList.add("visible");
  }
});

showLessBrand.addEventListener('click', () => {
  itemsBrand -= 5;

  const arrayBrand = Array.from(document.querySelector('.swiper-wrapper').children);
  const visItemsBrand = arrayBrand.slice(itemsBrand, productsLengthBrand);

  visItemsBrand.forEach(el => el.classList.remove('is-visible'));
  if (itemsBrand === 6) {
    showLessBrand.classList.remove("visible");
    showMoreBrand.classList.add("visible");
    showLessBrand.classList.add("hidden");
  }
});

// Button showMoreMachinery

const showMoreMachinery = document.querySelector('.machinery__btn--show');
const showLessMachinery = document.querySelector('.machinery__btn--close');
const productsLengthMachinery = document.querySelectorAll('.machinery__cards-item').length;
let itemsMachinery = 3;

showMoreMachinery.addEventListener('click', () => {
  itemsMachinery += 1;
  const arrayMachinery = Array.from(document.querySelector('.swiper-wrapper__machinery').children);
  const visItemsMachinery = arrayMachinery.slice(0, itemsMachinery);

  visItemsMachinery.forEach(el => el.classList.add('is-visible'));
  if (visItemsMachinery.length === productsLengthMachinery) {
    showMoreMachinery.classList.remove("visible");
    showMoreMachinery.classList.add("hidden");
    showLessMachinery.classList.add("visible");
  }
});

showLessMachinery.addEventListener('click', () => {
    itemsMachinery -= 1;
  
    const arrayMachinery = Array.from(document.querySelector('.swiper-wrapper__machinery').children);
    const visItemsMachinery = arrayMachinery.slice(itemsMachinery, productsLengthMachinery);
  
    visItemsMachinery.forEach(el => el.classList.remove('is-visible'));
    if (itemsMachinery === 3) {
      showLessMachinery.classList.remove("visible");
      showMoreMachinery.classList.add("visible");
      showLessMachinery.classList.add("hidden");
    }
  });
