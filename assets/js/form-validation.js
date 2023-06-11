const form = document.querySelector('#contact');
const email = document.getElementById('email');
const userName = document.getElementById('user_name');
const errorInfo = document.getElementById('error');

function validateEmail() {
  let errorMessage = '';
  const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

  // Trim the input values to remove leading and trailing spaces
  const emailValue = email.value.trim();
  const userNameValue = userName.value.trim();

  if (!emailValue.match(emailPattern)) {
    errorMessage += 'The content of the email field has to be a valid email address.';
  }

  if (userNameValue === '') {
    errorMessage += 'Username field cannot be empty.';
  } else if (userNameValue.length < 3) {
    errorMessage += 'Username should be at least 3 characters long.';
  }

  if (errorMessage !== '') {
    errorInfo.innerHTML = `
      <span style='color:red; border:1px solid red; padding: 8px;'>${errorMessage}</span>
    `;
    return false;
  }

  errorMessage += 'Form sent successfully';
  errorInfo.innerHTML = `
    <span style='color:green; border:1px solid green; padding: 8px;'>${errorMessage}</span>
  `;
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail();
  if (emailValid) {
    form.submit();
  }
});
