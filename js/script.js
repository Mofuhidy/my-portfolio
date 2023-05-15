let button = document.querySelector ('.menuIcon');
let navMenu = document.querySelector('.navInfoMobile, .cancelIcon');
let nav = document.querySelector('.menuIcon, .logo');
button.addEventListener('click',()=> {
  navMenu.classList.toggle('active')
})