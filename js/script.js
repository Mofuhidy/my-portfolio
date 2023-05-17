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

// validation form
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const errorMsg = document.querySelector('.error');
const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;

function isValid(e) {
  e.preventDefault();
  // cheking email value if it is the same as the regex pattern
  if (regex.test(email.value)) {
    form.submit();
    form.reset();
  } else {
    errorMsg.innerText = 'The email should be in lower case';
  }
}

form.addEventListener('submit', (e) => {
  isValid(e);
});