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

// Dynamic HTML
const speakers = [
  {
    name: 'Carl Jung',
    description: 'Swiss psychiatrist and psychoanalyst who founded analytical psychology',
    image: './css/Featured/Jung.jpg',
    detail: "Jung's 'Psychological Types' inspired Aushra to create Socionics",
    id: 'spkr1',
    class: 'one',
  },
  {
    name: 'Aushra Augusta',
    description: 'Lithuanian economist who founded Socionics',
    image: './css/Featured/Aushra.jpg',
    detail: 'Established Model A in the 1960s and 1970s in Vilnius, Lithuania',
    id: 'spkr2',
    class: 'two',
  },
  {
    name: 'Viktor Gulenko',
    description: 'Ukrainian founder of the School of Humanitarian Socionics',
    image: './css/Featured/Gulenko.png',
    detail: 'Psychologist and socionist who created Model G',
    id: 'spkr3',
    class: 'three',
  },
  {
    name: 'Vera Stratiyevskaya',
    description: 'Russian author of popular type and intertype relationship descriptions',
    image: './css/Featured/Stratiyevskaya.jpg',
    detail: 'Known for producing some of the most lifelike descriptions of socionic types',
    id: 'spkr4',
    class: 'four',
  },
  {
    name: 'Grigoriy Reinin',
    description: 'Russian creator of the Reinin dichotomies.',
    image: './css/Featured/Reinin.jpg',
    detail: 'One of the most prominent socionics theorists of St. Petersburg community',
    id: 'spkr5',
    class: 'five',
  },
  {
    name: 'Ekaterina Filatova',
    description: 'Early Russian socionist from St. Petersburg, Russia',
    image: './css/Featured/Filatova.jpg',
    detail: 'Known for her collection of photographs of people of different sociotypes',
    id: 'spkr6',
    class: 'six',
  },
];

// Declare body
const body = document.querySelector('.main-container');
// Create "speakers" div
const speakersDiv = document.createElement('div');
speakersDiv.classList.add('speakers');

// Declare "about-partners" section
const aboutPartners = document.querySelector('.about-partners');
// Put "speakers" before Partners section
body.insertBefore(speakersDiv, aboutPartners);

for (let i = 0; i < speakers.length; i += 1) {
  const speaker = document.createElement('div');
  speaker.classList.add('speaker');
  speakersDiv.appendChild(speaker);

  speaker.innerHTML = `
  <div class="speaker-bg">
    <img class="speaker-img" src="${speakers[i].image}" alt="Viktor Gulenko">
  </div>
  <h2 class="speaker-name">${speakers[i].name}</h2>
  <p class="speaker-desc red">${speakers[i].description}</p>
  <h5 class="speaker-detail">${speakers[i].detail}</h5>
  `;
}