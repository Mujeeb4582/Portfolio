const workData = [
  {
    projectNumber: 1,
    title: 'Daily ToDo Task',
    projectDetail: 'A website that lets you add list of to do task that helps you to organize your day. It lists the tasks that you need to do and allows you to mark them as complete. It uses local-storage to store the data.It was built as an introduction to web dev using ES6 and Webpack.',
    Img: './ProjectImages/List-of-to-do.gif',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    Tech: ['HTML', 'CSS', 'ES6 JavaScript', 'Git', 'Webpack', 'Eslint'],
    sourceLink: 'https://github.com/Mujeeb4582/To-Do-List-App',
    liveLink: 'https://mujeeb4582.github.io/To-Do-List-App/dist/',
  },
  {
    projectNumber: 2,
    title: 'BookStore CMA',
    projectDetail: 'Bookstore CMS is an SPA made for all the book lovers. It provides an easy way to organize a collection of book, as well as progress tracking functionalities. For instance, a user can easily add a new book by providing a book title and the category. It is built using React.js.',
    Img: 'https://user-images.githubusercontent.com/109666020/221373541-9bd0ac0a-5c0f-4e19-b430-b6c81ba1f2bd.png',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    Tech: [
      'TailWindCSS',
      'ES6 JavaScript',
      'React',
      'Redux',
      'Rest-API',
      'Unit testing',
      'Git',
    ],
    sourceLink: 'https://github.com/Mujeeb4582/Bookstore-CMA',
    liveLink: 'https://mujeeb4582.github.io/Bookstore-CMA/',
  },
  {
    projectNumber: 3,
    title: 'GLOBAL SUMMIT',
    projectDetail: `The project I have completed is my first capstone project, which involved utilizing HTML, CSS, and JavaScript to build a functional web application. Throughout the project, I worked with these programming languages to design and develop the various elements of the application.
      `,
    Img: 'https://user-images.githubusercontent.com/109666020/221826371-cfaab064-8709-4584-bd02-6335c4aa9b24.png',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    Tech: ['HTML', 'CSS', 'JavaScript', 'Git', 'ESLint'],
    sourceLink: 'https://github.com/Mujeeb4582/FirstCapStone',
    liveLink: 'https://mujeeb4582.github.io/FirstCapStone/',
  },
  {
    projectNumber: 4,
    title: 'Space-X',
    projectDetail: 'This web application offers space travel services for both commercial and scientific purposes. It allows users to reserve rockets and participate in specific space missions. The application is designed to make it easy for people to access and experience the wonders of space travel.',
    Img: 'https://repository-images.githubusercontent.com/579898104/cfcbe2c9-84b6-43e8-8974-75a89a4acb61',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    Tech: [
      'TailWindCSS',
      'ES6 JavaScript',
      'React',
      'Redux',
      'Rest-API',
      'Unit testing',
      'Git',
      'Pair-Programming',
    ],
    sourceLink: 'https://github.com/Mujeeb4582/space-x',
    liveLink: 'https://space-traval-x.netlify.app/',
  },
  {
    projectNumber: 5,
    title: 'Air-Pollution-App',
    projectDetail: 'This is a web application that is designed to be used on mobile devices such as smartphones or tablets. The primary purpose of the application is to retrieve data on air pollution from an API (which is likely an external data source that provides the information) and display it in a web browser. To build this application, the developers chose to use two popular frameworks called React and Redux. React is a JavaScript library for building user interfaces, while Redux is a state management library that helps manage the data flow of the application. Using these frameworks allowed the developers to build a responsive and dynamic application that is optimized for mobile devices.',
    // Img: 'https://github.com/Mujeeb4582/Recipe-app/assets/109666020/572173ba-ae64-4555-aa0a-6aebf78121c5',
    Img: [
      'https://raw.githubusercontent.com/Mujeeb4582/Air-Pollution-App/dev/src/images/HomePage.jpeg',
      'https://raw.githubusercontent.com/Mujeeb4582/Air-Pollution-App/dev/src/images/DetailsPage.jpeg',
    ],
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    Tech: [
      'BootStrap',
      'ES6 JavaScript',
      'React',
      'Redux',
      'Rest-API',
      'Unit testing',
      'Git',
      'Pair-Programming',
    ],
    sourceLink: 'https://github.com/Mujeeb4582/Air-Pollution-App',
    liveLink: 'https://air-pollution.onrender.com/',
  },
  {
    projectNumber: 6,
    title: 'Recipe-APP',
    projectDetail: 'The Recipe App enables users to conveniently manage their recipes, ingredients, and inventory. Users can save ingredients, track their availability, create recipes, and generate a comprehensive shopping list that takes into account the ingredients they have and those they need for a particular recipe. Moreover, as sharing recipes is a crucial aspect of cooking, the application allows users to make their recipes public for easy access by anyone.',
    Img: 'https://github.com/Mujeeb4582/Recipe-app/assets/109666020/59f75a12-75c1-4cc6-b2b3-a14918af0395',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    Tech: [
      'Ruby on Rails',
      'TailWindCSS',
      'Rails-RSpec',
      'PostgreSQL',
      'Unit test',
      'Integration test',
      'Rubocop-rails',
      'Pair-Programming',
    ],
    sourceLink: 'https://github.com/Mujeeb4582/Recipe-app',
    liveLink: 'https://recipe-app-jk5k.onrender.com/',
  },
];

const popModal = document.getElementById('popup');
// eslint-disable-next-line no-unused-vars
const closeModal = () => {
  popModal.style.transform = 'translateX(-100%)';
  popModal.style.transition = 'all 0.5s ease';
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
    <div class="modal">
      <div onclick="closeModal()" class="close"><img src="images/close.svg" alt="close-icon"></div>
      ${
  myWork.Img.length === 2
    ? `<div class="image">
            ${myWork.Img.map(
    (ele) => `<img src="${ele}" alt="Snapshoot-portfolio">`,
  ).join('')}
          </div>`
    : `<div class="single-image">
            <img src="${myWork.Img}" alt="Snapshoot-portfolio">
          </div>`
}
      <div class="modal-details">
        <h3 class="popup-title">${myWork.title}</h3>
        <ul class="popup-items">
          ${myWork.Tech.map((ele) => `<li>${ele}</li>`).join('')}
        </ul>
        <p class="popup-details">${myWork.projectDetail}</p>
        <div class="popup-action-btn">
          <a href="${myWork.liveLink}" class="resume" target="_blank">
            See Live
            <img src="${myWork.liveIcon}" alt="Go-live">
          </a>
          <a href="${myWork.sourceLink}" class="resume" target="_blank">
            See Source
            <img src="${myWork.githubIcon}" alt="Gitub-file">
          </a>
        </div>
      </div>
    </div>
  `;
  popModal.style.display = 'block';
  popModal.style.transform = 'translate(0, 0)';
  popModal.style.transition = 'all 0.5s ease';
}
