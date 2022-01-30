const burger = document.querySelector('.burger');
const nav = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.menu li');
const img = document.querySelector('.face__img');
const navBar = document.querySelector('.navbar');
const lines = document.querySelectorAll('.burger div');

function navActivate() {
  if (img.style.display == 'inline') {
    img.style.display = 'none';
  } else {
    img.style.display = 'inline';
  }
  nav.classList.toggle('nav-active');

  navBar.classList.toggle('navbar-active');

  lines.forEach((link) => {
    if (link.style.cssText) {
      link.style.cssText = '';
    } else {
      link.style.cssText = 'background-color:white';
    }
  });
  burger.classList.toggle('toggle');
}

burger.addEventListener('click', () => {
  navActivate();
  linksAct();
});
function linksAct() {
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.2s ease forwards ${
        index / 7 + 1.2
      }s`;
    }
  });
}
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    linksAct();
    navActivate();
  });
});
