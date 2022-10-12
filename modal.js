const workData = [
  {
projectNumber : 1,
    title : 'Keeping tracks of hunders of components',
    projectDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileImg: '/images/popup-mobile-image1.png',
    desktopImg: '/images/popup-desktop-image.svg',
    githubIcon: '/images/popup-github.svg',
    liveIcon: '/images/popup-live.svg',
    mobileTech: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/Mujeeb4582/Portfolio',
    liveLink: 'https://mujeeb4582.github.io/Portfolio/'
  },
  {
    projectNumber : 2,
    title : 'Keeping tracks of hunders of components',
    projectDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileImg: '/images/popup-mobile-image1.png',
    desktopImg: '/images/popup-desktop-image.svg',
    githubIcon: '/images/popup-github.svg',
    liveIcon: '/images/popup-live.svg',
    mobileTech: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/Mujeeb4582/Portfolio',
    liveLink: 'https://mujeeb4582.github.io/Portfolio/'
  },
  {
    projectNumber : 3,
    title : 'Keeping tracks of hunders of components',
    projectDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileImg: '/images/popup-mobile-image1.png',
    desktopImg: '/images/popup-desktop-image.svg',
    githubIcon: '/images/popup-github.svg',
    liveIcon: '/images/popup-live.svg',
    mobileTech: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/Mujeeb4582/Portfolio',
    liveLink: 'https://mujeeb4582.github.io/Portfolio/'
  },
  {
    projectNumber : 4,
    title : 'Keeping tracks of hunders of components',
    projectDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileImg: '/images/popup-mobile-image1.png',
    desktopImg: '/images/popup-desktop-image.svg',
    githubIcon: '/images/popup-github.svg',
    liveIcon: '/images/popup-live.svg',
    mobileTech: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/Mujeeb4582/Portfolio',
    liveLink: 'https://mujeeb4582.github.io/Portfolio/'
  },
  {
    projectNumber : 5,
    title : 'Keeping tracks of hunders of components',
    projectDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileImg: '/images/popup-mobile-image1.png',
    desktopImg: '/images/popup-desktop-image.svg',
    githubIcon: '/images/popup-github.svg',
    liveIcon: '/images/popup-live.svg',
    mobileTech: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/Mujeeb4582/Portfolio',
    liveLink: 'https://mujeeb4582.github.io/Portfolio/'
  },
  {
    projectNumber : 6,
    title : 'Keeping tracks of hunders of components',
    projectDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileImg: '/images/popup-mobile-image1.png',
    desktopImg: '/images/popup-desktop-image.svg',
    githubIcon: '/images/popup-github.svg',
    liveIcon: '/images/popup-live.svg',
    mobileTech: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: 'https://github.com/Mujeeb4582/Portfolio',
    liveLink: 'https://mujeeb4582.github.io/Portfolio/'
  },
]

const popModal = document.getElementById('popup');

const closeModal = () => {
  popModal.style.display = 'none';
};

window.onclick = function modal(event) {
  if (event.target === popModal) {
    popModal.style.display = 'none';
  }
};

function dynamicpro (proidx) {
  const myWork = workData[proidx];
  popModal.innerHTML = `
  <div class = "modal">
  <div onclick="closeModal()" class="close"><img src="images/close.svg" alt="close-icon"></div>
  <div class="mobile-image">
  <img src="${myWork.mobileImg}" alt="Snapshoot-portfolio">
  </div>
  <div class ="modal-details">
  <h3 class="popup-title">${myWork.title}</h3>
  <ul class="popup-items"> ${myWork.mobileTech.map((ele) => `<li>${ele}</>`)}</ul>
  <p class="popup-details">${myWork.projectDetail}</p>
  <div class="popup-action-btn">
    <button><a href="${myWork.liveLink}">See Live</a><img src="${myWork.liveIcon}" alt="Go-live"></button>
    <button><a href="${myWork.sourceLink}">See Source</a><img src="${myWork.githubIcon}" alt="Gitub-file"></button>
  </div>
  </div>
  </div>
  `;
  popup.style.display = 'block';
}

