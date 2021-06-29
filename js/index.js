const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const mainNavbar = document.querySelector('.main-navbar');

menu.addEventListener('click', () => {
  mainNavbar.classList.add('open');
});

close.addEventListener('click', () => {
  mainNavbar.classList.remove('open');
});
