/*  ----- menu  -----  */

const menuHamburger = document.querySelector('.hamburguer');
const navMobile = document.querySelector('.navbar2023');
const navMobileLinks = document.querySelectorAll('.nav-list2023 a');
const hamburgerImage = document.querySelector('#hamburguer');

function toggleMenu() {
  if (navMobile.classList.contains('active')) {
    hamburgerImage.src = './images/equis.png';
  } else {
    hamburgerImage.src = './images/mobile_menu 1.png';
  }
}

menuHamburger.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  toggleMenu();
});

navMobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('active');
    toggleMenu();
  });
});

/*  ----- speakers  -----  */

const speakersData = [
  {
    speakerBackground: './images/speaker_background.jpg',
    speakerImg: './images/pexels-gustavo-fring-4173168.jpg',
    name: 'Emre Keshavarz',
    position: 'Co-founder & CTO',
    description: 'E-commerce\'s evolution is driven by Erme, a dynamic co-founder & CTO, focused on disruptive innovation.',
  },
  {
    speakerBackground: './images/speaker_background.jpg',
    speakerImg: './images/pexels-mikhail-nilov-8729951.jpg',
    name: 'Mikhail nilov',
    position: 'Co-founder',
    description: 'Meet Mikhail, a co-founder and business analytics expert in the dynamic world of e-commerce. His expertise drives data-driven strategies, enabling businesses to thrive in the digital marketplace.',
  },
  {
    speakerBackground: './images/speaker_background.jpg',
    speakerImg: './images/pexels-edmond-dantès-4342400.jpg',
    name: 'Edmond Dantes',
    position: 'Account Manager',
    description: 'Introducing Edmond, an accomplished account manager specializing in the realm of e-commerce. With a keen eye for detail and exceptional client relationship skills, Edmond ensures seamless operations and client satisfaction.',
  },
  {
    speakerBackground: './images/speaker_background.jpg',
    speakerImg: './images/pexels-andrea-piacquadio-3769021.jpg',
    name: 'Andrea Piaquadio',
    position: 'Project Manager',
    description: 'Say hello to Andrea, a skilled project manager in the realm of e-commerce. With a knack for organization and a strategic mindset, Andrea ensures successful implementation and delivery of projects in the digital marketplace.',
  },
  {
    speakerBackground: './images/speaker_background.jpg',
    speakerImg: './images/pexels-emmy-e-2381069.jpg',
    name: 'Alex Wolf',
    position: 'Human Recourses',
    description: 'Meet Alex, a dedicated human resources professional specializing in the fast-paced world of e-commerce. With a focus on talent acquisition and employee development, Alex cultivates a thriving and motivated workforce within the industry.',
  },
  {
    speakerBackground: './images/speaker_background.jpg',
    speakerImg: './images/pexels-christina-morillo-1181690.jpg',
    name: 'Christina Morillo',
    position: 'Finances',
    description: 'Introducing Christina, a dynamic professional specializing in business deployment within the realm of e-commerce. With a strategic mindset and meticulous planning, Christina drives successful implementation of business strategies in the digital marketplace.',
  },
];

const speakersContainer = document.getElementById('speakersContainer');
const seeMoreBtn = document.getElementById('seeMoreBtn');
const showMoreSpeakersCount = 2;

function createSpeakerElement(speaker) {
  const speakerInfo = document.createElement('div');
  speakerInfo.classList.add('speakerInfo');

  const speakerPicture = document.createElement('div');
  speakerPicture.classList.add('SepeakerPicture');

  const speakerBackgroundImg = document.createElement('img');
  speakerBackgroundImg.src = speaker.speakerBackground;
  speakerBackgroundImg.classList.add('speakerBackground');
  speakerBackgroundImg.alt = 'speakerBackground';

  const speakerImg = document.createElement('img');
  speakerImg.src = speaker.speakerImg;
  speakerImg.classList.add('speakerImg');
  speakerImg.alt = 'speakerImg';

  const speakerCurr = document.createElement('div');
  speakerCurr.classList.add('SpeakerCurr');

  const speakerTitle = document.createElement('h2');
  speakerTitle.classList.add('SpeakerTitle');
  speakerTitle.textContent = speaker.name;

  const speakerPosition = document.createElement('p');
  speakerPosition.classList.add('SpeakerPosition');
  speakerPosition.textContent = speaker.position;

  const speakerDescription = document.createElement('p');
  speakerDescription.classList.add('SpeakerDescription');
  speakerDescription.textContent = speaker.description;

  speakerPicture.appendChild(speakerBackgroundImg);
  speakerPicture.appendChild(speakerImg);

  speakerCurr.appendChild(speakerTitle);
  speakerCurr.appendChild(speakerPosition);
  speakerCurr.appendChild(speakerDescription);

  speakerInfo.appendChild(speakerPicture);
  speakerInfo.appendChild(speakerCurr);

  return speakerInfo;
}
function showSpeakers(startIndex, endIndex) {
  speakersContainer.innerHTML = '';
  for (let i = startIndex; i < endIndex; i += 1) {
    const speaker = speakersData[i];
    const speakerElement = createSpeakerElement(speaker);
    speakersContainer.appendChild(speakerElement);
  }
}
function showAllSpeakers() {
  showSpeakers(0, speakersData.length);
  seeMoreBtn.style.display = 'none';
}
function handleSeeMoreClick() {
  showAllSpeakers();
}
seeMoreBtn.addEventListener('click', handleSeeMoreClick);
showSpeakers(0, showMoreSpeakersCount);