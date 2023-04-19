const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const profile = document.querySelector('.profile');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

const toggleMenu = () => {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
};

const navItemBackgroundColor = (
  profileColor,
  profileBackgroundColor,
  aboutColor,
  aboutBackgroundColor,
  contactColor,
  contactBackgroundColor,
) => {
  profile.style.backgroundColor = profileBackgroundColor;
  profile.style.color = profileColor;
  about.style.backgroundColor = aboutBackgroundColor;
  about.style.color = aboutColor;
  contact.style.backgroundColor = contactBackgroundColor;
  contact.style.color = contactColor;
};

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => menuItem.addEventListener('click', toggleMenu));

profile.addEventListener('click', () => navItemBackgroundColor('white', '#36b37e', '#344563', 'white', '#344563', 'white'));

about.addEventListener('click', () => navItemBackgroundColor('#344563', 'white', 'white', '#36b37e', '#344563', 'white'));

contact.addEventListener('click', () => navItemBackgroundColor('#344563', 'white', '#344563', 'white', 'white', '#36b37e'));
