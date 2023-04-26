// Write Javascript code!
const registerForm = document.querySelector('.registration-form');
const submitButton = registerForm.querySelector('.registration-form__submit');
const usernameInput = registerForm.querySelector('#username');
const passwordInput = registerForm.querySelector('#password');
const emailInput = registerForm.querySelector('#email');
const phoneInput = registerForm.querySelector('#phone-number');
const newsletterInput = registerForm.querySelector('#newsletter');

// create a div for the response
const responseContainer = document.createElement('div');
responseContainer.classList.add('response-container');
registerForm.appendChild(responseContainer);



submitButton.addEventListener('click', (event) => {
  // prevent form submission
  event.preventDefault();
  getData();

});

function getData() {
  // create the payload
  const payload = {
    username: usernameInput.value,
    password: passwordInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    newsletter: newsletterInput.checked,
  };

  fetch('https://5e8c6579e61fbd00164aebec.mockapi.io/register')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then((data)=>{
      // print in the console
      console.log(data);
      const responseText = document.createTextNode(`Registration successful. data: ${data}`);
      responseContainer.appendChild(responseText);
    })
    .catch((error) => { // handle error
      console.error('Error:', error); 
    });
}