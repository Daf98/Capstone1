// TOGGABLE MENU //

// Declaring elements
const openedMenu = document.querySelector('.opened-menu');
const menuItems = document.querySelectorAll('.menu-item');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const mainContainer = document.querySelector('.main-container');

// Opening menu
function openHamburgerMenu() {
  openedMenu.classList.add('open-menu');
  closeIcon.style.display = 'block';
  hamburgerIcon.style.display = 'none';
  mainContainer.classList.add('blur');
}

hamburgerMenu.addEventListener('click', openHamburgerMenu);

// Clsoing menu
function clickLinks() {
  openedMenu.classList.remove('open-menu');
  closeIcon.style.display = 'none';
  hamburgerIcon.style.display = 'block';
  mainContainer.classList.remove('blur');
}

menuItems.forEach(
  (item) => {
    item.addEventListener('click', clickLinks);
  },
);