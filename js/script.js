const button = document.querySelector('.menuIcon');
const buttonCancel = document.querySelector('.cancelIcon');
const navMenu = document.querySelector('.navInfoMobile, .cancelIcon');
const nav = document.querySelector('.menuIcon, .logo');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.mobileLinks');

// menu mobile function
button.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  nav.classList.toggle('dNone');
  button.classList.toggle('dNone');
  buttonCancel.classList.toggle('active');
  body.classList.toggle('active');
});

buttonCancel.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  nav.classList.remove('dNone');
  button.classList.remove('dNone');
  buttonCancel.classList.toggle('active');
});

// links functionality
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    nav.classList.toggle('dNone');
    button.classList.toggle('dNone');
    buttonCancel.classList.toggle('active');
    body.classList.toggle('active');
  });
});