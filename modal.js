const workData = [
  {
    projectNumber: 1,
    title: 'Daily ToDo Task',
    projectDetail:
      'A website that lets you add list of to do task that helps you to organize your day. It lists the tasks that you need to do and allows you to mark them as complete. It uses local-storage to store the data.It was built as an introduction to web dev using ES6 and Webpack.',
    mobileImg: './ProjectImages/List-of-to-do.gif',
    desktopImg: './ProjectImages/List-of-to-do.gif',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    mobileTech: ['HTML', 'CSS', 'ES6 JavaScript', 'Git', 'Webpack'],
    desktopTech: ['HTML', 'CSS', 'ES6 JavaScript', 'Git', 'Webpack'],
    sourceLink: 'https://github.com/Mujeeb4582/To-Do-List-App',
    liveLink: 'https://mujeeb4582.github.io/To-Do-List-App/dist/',
  },
  {
    projectNumber: 2,
    title: 'Awesome Books',
    projectDetail:
      'A website that lets you add books with their author. It uses local-storage to store the data.',
    mobileImg: './ProjectImages/Awesome-books/awesomebooklistmobile.png',
    desktopImg: './ProjectImages/Awesome-books/awesome_books_list.png',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    mobileTech: ['HTML', 'CSS', 'ES6 JavaScript', 'Git', 'Webpack'],
    desktopTech: ['HTML', 'CSS', 'ES6 JavaScript', 'Git', 'Webpack'],
    sourceLink: 'https://github.com/Mujeeb4582/Awesome-Books-with-ES6',
    liveLink: 'https://mujeeb4582.github.io/Awesome-Books-with-ES6/',
  },
  {
    projectNumber: 3,
    title: 'Hello! Sharing world DIGITAL YOUTH GLOBAL SUMMIT 2019',
    projectDetail:
      'A fun festival where people from more than 80 countries who believe in the value of sharing and openness and create positive change gather and share ideas will be held in Pakistan in October.',
    mobileImg: './ProjectImages/Capstone/Mobiledetailcapstone.png',
    desktopImg: './ProjectImages/Capstone/Desktop_image.png',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    mobileTech: ['HTML', 'CSS', 'JavaScript', 'Git', 'ESLint'],
    desktopTech: ['HTML', 'CSS', 'JavaScript', 'Git', 'ESLint'],
    sourceLink: 'https://github.com/Mujeeb4582/FirstCapStone',
    liveLink: 'https://mujeeb4582.github.io/FirstCapStone/',
  },
  {
    projectNumber: 4,
    title: 'Keeping tracks of hunders of components',
    projectDetail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileImg: './images/popup-mobile-image1.png',
    desktopImg: './images/popup-desktop-image.svg',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    mobileTech: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopTech: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/Mujeeb4582/Portfolio',
    liveLink: 'https://mujeeb4582.github.io/Portfolio/',
  },
  {
    projectNumber: 5,
    title: 'Keeping tracks of hunders of components',
    projectDetail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileImg: './images/popup-mobile-image1.png',
    desktopImg: './images/popup-desktop-image.svg',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    mobileTech: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopTech: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/Mujeeb4582/Portfolio',
    liveLink: 'https://mujeeb4582.github.io/Portfolio/',
  },
  {
    projectNumber: 6,
    title: 'Keeping tracks of hunders of components',
    projectDetail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileImg: './images/popup-mobile-image1.png',
    desktopImg: './images/popup-desktop-image.svg',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    mobileTech: ['Ruby on Rails', 'CSS', 'JavaScript'],
    desktopTech: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/Mujeeb4582/Portfolio',
    liveLink: 'https://mujeeb4582.github.io/Portfolio/',
  },
];

const popModal = document.getElementById('popup');
// eslint-disable-next-line no-unused-vars
const closeModal = () => {
  popModal.style.display = 'none';
};

window.onclick = function modal(event) {
  if (event.target === popModal) {
    popModal.style.display = 'none';
  }
};
// eslint-disable-next-line no-unused-vars
function dynamicpro(proidx) {
  const myWork = workData[proidx];
  popModal.innerHTML = `
  <div onclick="closeModal()" class="dclose"><img src="images/desktop-close.svg" alt="close-icon"></div>
  <div class = "modal">
  <div onclick="closeModal()" class="close"><img src="images/close.svg" alt="close-icon"></div>
  <div class="mobile-image">
  <img src="${myWork.mobileImg}" alt="Snapshoot-portfolio">
  </div>
  <div class="desktop-image">
  <img src="${myWork.desktopImg}" alt="Snapshoot-portfolio">
  </div>
  <div class ="modal-details">
  <h3 class="popup-title">${myWork.title}</h3>
  <ul class="popup-items"> ${myWork.mobileTech.map(
    (ele) => `<li>${ele}</>`,
  )}</ul>
  <ul class="d-popup-items"> ${myWork.desktopTech.map(
    (ele) => `<li>${ele}</>`,
  )}</ul>
  <p class="popup-details">${myWork.projectDetail}</p>
  <div class="popup-action-btn">
    <button><a href="${myWork.liveLink}">See Live<img src="${
  myWork.liveIcon
}" alt="Go-live"></a></button>
    <button><a href="${myWork.sourceLink}">See Source<img src="${
  myWork.githubIcon
}" alt="Gitub-file"></a></button>
  </div>
  </div>
  </div>
  `;
  popModal.style.display = 'block';
}
