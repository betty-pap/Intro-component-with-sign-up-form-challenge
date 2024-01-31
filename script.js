let errorInvalidEmail = document.querySelector('.error-invalid-email');

let button = document.querySelector('button'); 
let form = document.querySelector('form');
let inputEmail = document.getElementById('email');


// empty error message //
function checkField (e) {
  e.preventDefault();
  let isValid = true;
  document.querySelectorAll('.validate').forEach(el => {
    let error = el.closest('label').querySelector('.error-empty').classList;
    if (el.value.trim().length === 0) {
      isValid = false;
      error.add('error-empty-active');
      el.classList.add('invalid');
    } else {
      error.remove('error-empty-active');
      el.classList.remove('invalid');
    }
  })
  return isValid;
}

form.addEventListener('submit', checkField);


// email error message//

function checkEmail (e) {
  e.preventDefault();
  let email = e.target.querySelector('[type="email"]').value;
  if (!validateEmail(email)){
    errorInvalidEmail.innerHTML = "Looks like this is not an email";
  } else {
    errorInvalidEmail.innerHTML = "";
  }
}


// email checking //

function validateEmail (email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', checkEmail);