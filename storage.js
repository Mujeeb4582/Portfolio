const userName = document.querySelector('#user_name');
const userEmail = document.querySelector('#email');
const userMsg = document.querySelector('#message');
const userForm = document.querySelector('#contact');
const body = document.querySelector('body');

// retrieve data from localStorage
const retrieveData = localStorage.getItem('info');

// load the body on browser refresh and pre-fill the form
body.onload = () => {
  if (retrieveData) {
    const previousData = JSON.parse(retrieveData);
    userName.value = previousData.name;
    userEmail.value = previousData.email;
    userMsg.value = previousData.message;
  }
};

document.querySelectorAll('.input').forEach((input) => {
  input.addEventListener('input', (event) => {
    event.preventDefault();

    const userInput = {
      name: userName.value,
      email: userEmail.value,
      message: userMsg.value,
    };

    // store the object in localStorage

    localStorage.setItem('info', JSON.stringify(userInput));
  });
});

userForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
