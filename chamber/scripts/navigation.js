const navElement = document.querySelector('.nav-bar');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navElement.classList.toggle('nav--open');
    hamburger.classList.toggle('hamburger--open')
});

navElement.addEventListener('click', () => {
    navElement.classList.remove('nav--open');
    hamburger.classList.remove('hamburger--open')
});