let myReg = /[a-zA-Z]/;
let myNumber = /[0-9]/;
var eName, eEmail, ePassword, eAge, eTel, eAdr, eCity, eCodPost, eDni;

// Validate name
var fname = document.getElementById("fname");
function validate_name() {
    const userName = document.getElementById("fname").value;
    const cantLetter = userName.length;
    if (cantLetter < 7) {
      const nameInputInvalid = document.getElementById("name-invalide");
      nameInputInvalid.innerHTML = "Name must be first and last name";
      nameInputInvalid.style.display = "block";
      document.getElementById("fname").classList.add("form-input-invalid");
      eName = true;
    }
    if(userName.indexOf(' ') == -1) {
      const nameInputInvalid = document.getElementById("name-invalide");
      nameInputInvalid.innerHTML = "Name must be first and last name";
      nameInputInvalid.style.display = "block";
      document.getElementById("fname").classList.add("form-input-invalid");
      eName = true;
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
    eEmail = true;
  }
  if(!userEmail.includes('.com' || '.net' || '.org' || '.edu')) {
    const emailInputInvalid = document.getElementById("email-invalide");
    emailInputInvalid.innerHTML = "The email is invalid";
    emailInputInvalid.style.display = "block";
    document.getElementById("email").classList.add("form-input-invalid");
    eEmail = true;
  }
}

//Validate password
var password = document.getElementById("password");
function validate_password() {
  const userPassword = document.getElementById("password").value;
  const cantPassword = userPassword.length;
  document.getElementById("rpassword").disabled = false;
    if (cantPassword < 8) {
      const passwordInputInvalid = document.getElementById("password-invalide");
      passwordInputInvalid.innerHTML = "The password is invalid";
      passwordInputInvalid.style.display = "block";
      document.getElementById("password").classList.add("form-input-invalid");
      ePassword = true;
      document.getElementById("rpassword").disabled = true;
    }
    if(userPassword.indexOf(' ') != -1) {
      const passwordInputInvalid = document.getElementById("password-invalide");
      passwordInputInvalid.innerHTML = "The password is invalid";
      passwordInputInvalid.style.display = "block";
      document.getElementById("password").classList.add("form-input-invalid");
      ePassword = true;
      document.getElementById("rpassword").disabled = true;
    }
    var valid = myReg.test(userPassword);
    var valid2 = myNumber.test(userPassword);
    if (!valid || !valid2){
      const passwordInputInvalid = document.getElementById("password-invalide");
      passwordInputInvalid.innerHTML = "The password is invalid";
      passwordInputInvalid.style.display = "block";
      document.getElementById("password").classList.add("form-input-invalid");
      ePassword = true;
      document.getElementById("rpassword").disabled = true;
    }
}

//Validate repear password
var repeatPassword = document.getElementById("rpassword");
function validate_repeat(){
  const repPass = document.getElementById("rpassword").value;
  var aPassword = document.getElementById("password").value;
  if(repPass != aPassword){
    const rpasswordInputInvalid = document.getElementById("rpassword-invalide");
    rpasswordInputInvalid.innerHTML = "Passwords do not match";
    rpasswordInputInvalid.style.display = "block";
    document.getElementById("rpassword").classList.add("form-input-invalid");
  }
}

//Validate Age
var age = document.getElementById("age");
function validate_age(){
  const userAge = document.getElementById("age").value;
  if (userAge < 18 || userAge > 100){
    const ageInputInvalid = document.getElementById("age-invalide");
    ageInputInvalid.innerHTML = "Must be over 18";
    ageInputInvalid.style.display = "block";
    document.getElementById("age").classList.add("form-input-invalid");
    eAge = true;
  }
  var onlyNumbers = myNumber.test(userAge);
  if (!onlyNumbers){
    const ageInputInvalid = document.getElementById("age-invalide");
    ageInputInvalid.innerHTML = "Must be over 18";
    ageInputInvalid.style.display = "block";
    document.getElementById("age").classList.add("form-input-invalid");
    eAge = true;
  }
}

//Validate telphone
var tel = document.getElementById("tel");
function validate_tel(){
  const userTel = document.getElementById("tel").value;
  const cantTel = userTel.length;
  if (cantTel < 7){
    const telInputInvalid = document.getElementById("tel-invalide");
    telInputInvalid.innerHTML = "The phone number is not valid";
    telInputInvalid.style.display = "block";
    document.getElementById("tel").classList.add("form-input-invalid");
    eTel = true;
  }
  if(userTel.indexOf(' ') != -1) {
    const telInputInvalid = document.getElementById("tel-invalide");
    telInputInvalid.innerHTML = "The phone number is not valid";
    telInputInvalid.style.display = "block";
    document.getElementById("tel").classList.add("form-input-invalid");
    eTel = true;
  }
  if(userTel.indexOf('-') != -1) {
    const telInputInvalid = document.getElementById("tel-invalide");
    telInputInvalid.innerHTML = "The phone number is not valid";
    telInputInvalid.style.display = "block";
    document.getElementById("tel").classList.add("form-input-invalid");
    eTel = true;
  }
  if(userTel.indexOf('(') != -1) {
    const telInputInvalid = document.getElementById("tel-invalide");
    telInputInvalid.innerHTML = "The phone number is not valid";
    telInputInvalid.style.display = "block";
    document.getElementById("tel").classList.add("form-input-invalid");
    eTel = true;
  }
  if(userTel.indexOf(')') != -1) {
    const telInputInvalid = document.getElementById("tel-invalide");
    telInputInvalid.innerHTML = "The phone number is not valid";
    telInputInvalid.style.display = "block";
    document.getElementById("tel").classList.add("form-input-invalid");
    eTel = true;
  }
}

//Validate Address
var address = document.getElementById("address");
function validate_address(){
  const userAddress = document.getElementById("address").value;
  const cantAddress = userAddress.length;
  if (cantAddress < 5){
    const adrInputInvalid = document.getElementById("address-invalide");
    adrInputInvalid.innerHTML = "The address must be at least 5 characters";
    adrInputInvalid.style.display = "block";
    document.getElementById("address").classList.add("form-input-invalid");
    eAdr = true;
  }
  if (userAddress.indexOf(' ') == -1){
    const adrInputInvalid = document.getElementById("address-invalide");
    adrInputInvalid.innerHTML = "There needs to be a space";
    adrInputInvalid.style.display = "block";
    document.getElementById("address").classList.add("form-input-invalid");
    eAdr = true;
  }
  var street = myReg.test(userAddress);
  var streetNumber = myNumber.test(userAddress);
  if (!street || !streetNumber){
    const adrInputInvalid = document.getElementById("address-invalide");
    adrInputInvalid.innerHTML = "The street or its number are not correct";
    adrInputInvalid.style.display = "block";
    document.getElementById("address").classList.add("form-input-invalid");
    eAdr = true;
  }
}

//Validate city
var city = document.getElementById("city");
function validate_city(){
  const userCity = document.getElementById("city").value;
  const cityCant = userCity.length;
  if (cityCant < 3) {
    const cityInputInvalid = document.getElementById("city-invalide");
    cityInputInvalid.innerHTML = "Enter the full name of the city";
    cityInputInvalid.style.display = "block";
    document.getElementById("city").classList.add("form-input-invalid");
    eCity = true;
  }
}

//Validate Postal Code
var codpost = document.getElementById("postal-code");
function validate_codpost(){
  const cp = document.getElementById("postal-code").value;
  const cpCant = cp.length;
  if (cpCant < 3){
    const cityInputInvalid = document.getElementById("codpost-invalide");
    cityInputInvalid.innerHTML = "The value doesn't correspond to a postal code";
    cityInputInvalid.style.display = "block";
    document.getElementById("postal-code").classList.add("form-input-invalid");
    eCodPost = true;
  }
}

//Validate dni
var dni = document.getElementById("dni");
function validate_dni(){
  const userDni = document.getElementById("dni").value;
  const cantDni = userDni.length;
  if (cantDni < 7 || cantDni > 8){
    const dniInputInvalid = document.getElementById("dni-invalide");
    dniInputInvalid.innerHTML = "The DNI must contain between 7 and 8 characters";
    dniInputInvalid.style.display = "block";
    document.getElementById("dni").classList.add("form-input-invalid");
    eDni = true;
  }
  var onlyNumbers2 = myNumber.test(userDni);
  if (!onlyNumbers2){
    const dniInputInvalid = document.getElementById("dni-invalide");
    dniInputInvalid.innerHTML = "Just enter numbers";
    dniInputInvalid.style.display = "block";
    document.getElementById("dni").classList.add("form-input-invalid");
    eDni = true;
  }
}

//Button Send
var btn = document.getElementById("button");
function send_form(){
  if(eName == true){
    eName = false;
    return(alert('Name is not valid - The data has not been saved'));
  }
  if(eEmail == true){
    eEmail = false;
    return(alert('Email is not valid - The data has not been saved'));
  }
  if(ePassword == true){
    ePassword = false;
    return(alert('Password is not valid - The data has not been saved'))
  }
  if(eAge == true){
    eAge = false;
    return(alert('Age is not valid - The data has not been saved'))
  }
  if(eTel == true){
    eTel = false;
    return(alert('Telephone is not valid - The data has not been saved'))
  }
  if(eAdr == true){
    eAdr = false;
    return(alert('Address is not valid - The data has not been saved'))
  }
  if(eCity == true){
    eCity = false;
    return(alert('City is not valid - The data has not been saved'))
  }
  if(eCodPost == true){
    eCodPost = false;
    return(alert('Postal Code is not valid - The data has not been saved'))
  }
  if(eDni == true){
    eDni = false;
    return(alert('DNI is not valid - The data has not been saved'))
  }
  var fieldName = document.getElementById('fname').value;
  var fieldEmail = document.getElementById('email').value;
  var fieldPassword = document.getElementById('password').value;
  var fieldAge = document.getElementById('age').value;
  var fieldTel = document.getElementById('tel').value;
  var fieldAdr = document.getElementById('address').value;
  var fieldCity = document.getElementById('city').value;
  var fieldPc = document.getElementById('postal-code').value;
  var fieldDni = document.getElementById('dni').value;
  if(fieldName == "" && fieldEmail == "" && fieldPassword == "" && fieldAge == "" && fieldTel == ""
  && fieldAdr == "" && fieldCity == "" && fieldPc == "" && fieldDni == ""){
    alert('All fields must be complete');
  } else {alert('Full Name: ' + fieldName +
    ' Email: ' + fieldEmail +
    ' Password: ' + fieldPassword +
    ' Age: ' + fieldAge +
    ' Telephone: '+ fieldTel +
    ' Address: '+ fieldAdr +
    ' City: '+ fieldCity +
    ' Postal Code: ' + fieldPc +
    ' DNI: ' + fieldDni);
  }
}

//Limpiar
function clear_error_validations(id) {
  const validation = document.getElementById(id);
  validation.innerHTML = "";
  validation.style.display = "none";
}
