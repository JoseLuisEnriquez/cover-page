// Validate name
var fname = document.getElementById("fname");
function validate_name() {
    const userName = document.getElementById("fname").value;
    const cantLetter = userName.length;
    if (cantLetter < 7) {
      const nameInputInvalid = document.getElementById("name-invalide");
      nameInputInvalid.innerHTML = "El nombre es invalido";
      nameInputInvalid.style.display = "block";
      document.getElementById("fname").classList.add("form-input-invalid");
    }
    if(userName.indexOf(' ') == -1) {
      const nameInputInvalid = document.getElementById("name-invalide");
      nameInputInvalid.innerHTML = "El nombre es invalido";
      nameInputInvalid.style.display = "block";
      document.getElementById("fname").classList.add("form-input-invalid");
    }
}

// Validate email
var email = document.getElementById("email");
function validate_email() {
  const userEmail = document.getElementById("email").value;
  if(userEmail.indexOf('@') == -1) {
    const emailInputInvalid = document.getElementById("email-invalide");
    emailInputInvalid.innerHTML = "The email is invalid";
    emailInputInvalid.style.display = "block";
    document.getElementById("email").classList.add("form-input-invalid");
  }
  if(userEmail.includes('.com' || '.net' || '.org' || '.edu')) {
    const emailInputInvalid = document.getElementById("email-invalide");
    emailInputInvalid.innerHTML = "The email is invalid";
    emailInputInvalid.style.display = "block";
    document.getElementById("email").classList.add("form-input-invalid");
  }
}

//Validate password
var password = document.getElementById("password");
function validate_password() {
  const userPassword = document.getElementById("password").value;
  const cantPassword = userPassword.length;
    if (cantPassword < 8) {
      const passwordInputInvalid = document.getElementById("password-invalide");
      passwordInputInvalid.innerHTML = "The password is invalid";
      passwordInputInvalid.style.display = "block";
      document.getElementById("password").classList.add("form-input-invalid");
    } else if (str.search(/\d/) == -1) {
      const passwordInputInvalid = document.getElementById("password-invalide");
      passwordInputInvalid.innerHTML = "The password is invalid";
      passwordInputInvalid.style.display = "block";
      document.getElementById("password").classList.add("form-input-invalid");
    } else if (str.search(/[a-zA-Z]/) == -1) {
      const passwordInputInvalid = document.getElementById("password-invalide");
      passwordInputInvalid.innerHTML = "The password is invalid";
      passwordInputInvalid.style.display = "block";
      document.getElementById("password").classList.add("form-input-invalid");
    } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
      const passwordInputInvalid = document.getElementById("password-invalide");
      passwordInputInvalid.innerHTML = "The password is invalid";
      passwordInputInvalid.style.display = "block";
      document.getElementById("password").classList.add("form-input-invalid");
    }
}

//Limpiar
function clear_error_validations(id) {
  const validation = document.getElementById(id);
  validation.innerHTML = "";
  validation.style.display = "none";
}
