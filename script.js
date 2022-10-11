const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

// --------POPUP Window

const body = document.querySelector('body');
const popupChild = document.createElement('dialog');
popupChild.classList.add('popup');
popupChild.setAttribute('id', 'popup');
body.appendChild(popupChild);
popupChild.innerHTML = `
<div class="close"><img src="images/close.svg" alt="close-icon"></div>
<div class="mobile-image">
  <img src="./images/popup-mobile-image1.png" alt="Snapshoot-portfolio">
</div>
<h3 class="popup-title">Keeping track of hundreds of components</h3>
<ul class="popup-items">
  <li>Ruby on rails</li>
  <li>css</li>
  <li>javScript</li>
</ul>
<div class="popup-details">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
</div>
<div class="popup-action-btn">
  <button><a href="#">See Live</a><img src="./images/popup-live.svg" alt="Go-live"></button>
  <button><a href="https://github.com/Mujeeb4582/Portfolio">See Source</a><img src="./images/popup-github.svg" alt="Gitub-file"></button>
</div>
`;

const popup = document.querySelector('#popup');
const openPopup = document.querySelectorAll('.project');
const closePopup = document.querySelector('.close');

openPopup.forEach((project) => {
  project.addEventListener('click', () => {
    popup.showModal();
  });
});

closePopup.addEventListener('click', () => {
  popup.close();
});