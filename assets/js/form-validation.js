const form = document.querySelector('#contact');
const email = document.getElementById('email');
const errorInfo = document.getElementById('error');

function validateEmail() {
  let errorMessage = '';
  const emailPattren = /^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]+(?:\.[a-z-0-9-]+)*$/;
  if (!email.value.match(emailPattren)) {
    errorMessage += 'The content of the email field has to be in lower case.';
    errorInfo.innerHTML = `
      <span style='color:red; border:1px solid red; padding: 8px;'>${errorMessage}</span>
    `;
    return false;
  }
  errorMessage += 'Form sent successfully';
  errorInfo.innerHTML = `
      <span style='color:green; border:1px solid green; padding: 8px;'>${errorMessage}</span>`;
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail();
  if (emailValid) {
    form.submit();
  }
});
