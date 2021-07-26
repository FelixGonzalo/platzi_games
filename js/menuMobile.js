const header = document.querySelector('.header--principal')
const header_button = document.querySelector('.header__button')

header_button.addEventListener('click', () => {
  header.classList.toggle('menu-mobile-activo');
})