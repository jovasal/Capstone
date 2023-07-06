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

const speakersContainer = document.getElementById('speakersContainer');
const seeMoreBtn = document.getElementById('seeMoreBtn');
const speakerInfos = Array.from(document.getElementsByClassName('speakerInfo'));

//  Delete all speakers
for (let i = 0; i < 6; i += 1) {
  speakersContainer.removeChild(speakersContainer.firstChild);
}
for (let i = 0; i < 6; i += 1) {
  speakersContainer.removeChild(speakersContainer.firstChild);
}

// Show the firs 2 speakers
const initialSpeakerInfos = speakerInfos.slice(0, 2);
initialSpeakerInfos.forEach((speakerInfo) => {
  speakersContainer.appendChild(speakerInfo.cloneNode(true));
});

// Button control
seeMoreBtn.addEventListener('click', () => {
  const remainingSpeakerInfos = speakerInfos.slice(2);
  remainingSpeakerInfos.forEach((speakerInfo) => {
    speakersContainer.appendChild(speakerInfo.cloneNode(true));
  });
  seeMoreBtn.style.display = 'none';
});
