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
      eName = 1;
    }
    if(userName.indexOf(' ') == -1) {
      const nameInputInvalid = document.getElementById("name-invalide");
      nameInputInvalid.innerHTML = "Name must be first and last name";
      nameInputInvalid.style.display = "block";
      document.getElementById("fname").classList.add("form-input-invalid");
      eName = 1;
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
    eEmail = 1;
  }
  if(!userEmail.includes('.com' || '.net' || '.org' || '.edu')) {
    const emailInputInvalid = document.getElementById("email-invalide");
    emailInputInvalid.innerHTML = "The email is invalid";
    emailInputInvalid.style.display = "block";
    document.getElementById("email").classList.add("form-input-invalid");
    eEmail = 1;
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
      ePassword = 1;
    }
    if(userPassword.indexOf(' ') != -1) {
      const passwordInputInvalid = document.getElementById("password-invalide");
      passwordInputInvalid.innerHTML = "The password is invalid";
      passwordInputInvalid.style.display = "block";
      document.getElementById("password").classList.add("form-input-invalid");
      ePassword = 1;
    }
    var valid = myReg.test(userPassword);
    var valid2 = myNumber.test(userPassword);
    if (!valid || !valid2){
      const passwordInputInvalid = document.getElementById("password-invalide");
      passwordInputInvalid.innerHTML = "The password is invalid";
      passwordInputInvalid.style.display = "block";
      document.getElementById("password").classList.add("form-input-invalid");
      ePassword = 1;
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
    eAge = 1;
  }
  var onlyNumbers = myNumber.test(userAge);
  if (!onlyNumbers){
    const ageInputInvalid = document.getElementById("age-invalide");
    ageInputInvalid.innerHTML = "Must be over 18";
    ageInputInvalid.style.display = "block";
    document.getElementById("age").classList.add("form-input-invalid");
    eAge = 1;
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
    eTel = 1;
  }
  if(userTel.indexOf(' ') != -1) {
    const telInputInvalid = document.getElementById("tel-invalide");
    telInputInvalid.innerHTML = "The phone number is not valid";
    telInputInvalid.style.display = "block";
    document.getElementById("tel").classList.add("form-input-invalid");
    eTel = 1;
  }
  if(userTel.indexOf('-') != -1) {
    const telInputInvalid = document.getElementById("tel-invalide");
    telInputInvalid.innerHTML = "The phone number is not valid";
    telInputInvalid.style.display = "block";
    document.getElementById("tel").classList.add("form-input-invalid");
    eTel = 1;
  }
  if(userTel.indexOf('(') != -1) {
    const telInputInvalid = document.getElementById("tel-invalide");
    telInputInvalid.innerHTML = "The phone number is not valid";
    telInputInvalid.style.display = "block";
    document.getElementById("tel").classList.add("form-input-invalid");
    eTel = 1;
  }
  if(userTel.indexOf(')') != -1) {
    const telInputInvalid = document.getElementById("tel-invalide");
    telInputInvalid.innerHTML = "The phone number is not valid";
    telInputInvalid.style.display = "block";
    document.getElementById("tel").classList.add("form-input-invalid");
    eTel = 1;
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
    eAdr = 1;
  }
  if (userAddress.indexOf(' ') == -1){
    const adrInputInvalid = document.getElementById("address-invalide");
    adrInputInvalid.innerHTML = "There needs to be a space";
    adrInputInvalid.style.display = "block";
    document.getElementById("address").classList.add("form-input-invalid");
    eAdr = 1;
  }
  var street = myReg.test(userAddress);
  var streetNumber = myNumber.test(userAddress);
  if (!street || !streetNumber){
    const adrInputInvalid = document.getElementById("address-invalide");
    adrInputInvalid.innerHTML = "The street or its number are not correct";
    adrInputInvalid.style.display = "block";
    document.getElementById("address").classList.add("form-input-invalid");
    eAdr = 1;
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
    eCity = 1;
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
    eCodPost = 1;
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
    eDni = 1;
  }
  var onlyNumbers2 = myNumber.test(userDni);
  if (!onlyNumbers2){
    const dniInputInvalid = document.getElementById("dni-invalide");
    dniInputInvalid.innerHTML = "Just enter numbers";
    dniInputInvalid.style.display = "block";
    document.getElementById("dni").classList.add("form-input-invalid");
    eDni = 1;
  }
}

//Button Send
var btn = document.getElementById("button");
function send_form(){
  if(eName == 1){
    eName = 0;
    return(alert('Name is not valid - The data has not been saved'));
  }
  if(eEmail == 1){
    eEmail = 0;
    return(alert('Email is not valid - The data has not been saved'));
  }
  if(ePassword == 1){
    ePassword = 0;
    return(alert('Password is not valid - The data has not been saved'))
  }
  if(eAge == 1){
    eAge = 0;
    return(alert('Age is not valid - The data has not been saved'))
  }
  if(eTel == 1){
    eTel = 0;
    return(alert('Telephone is not valid - The data has not been saved'))
  }
  if(eAdr == 1){
    eAdr = 0;
    return(alert('Address is not valid - The data has not been saved'))
  }
  if(eCity == 1){
    eCity = 0;
    return(alert('City is not valid - The data has not been saved'))
  }
  if(eCodPost == 1){
    eCodPost = 0;
    return(alert('Postal Code is not valid - The data has not been saved'))
  }
  if(eDni == 1){
    eDni = 0;
    return(alert('DNI is not valid - The data has not been saved'))
  }
  return (alert(
    `Name: ${userName}
    Email: ${userEmail}
    Password: ${userPassword}
    Age: ${userAge}
    Telephone: ${userTel}
    Address: ${userAddress}
    City: ${userCity}
    Postal Code: ${cp}
    DNI: ${userDni}
    `
    ));
}

//Limpiar
function clear_error_validations(id) {
  const validation = document.getElementById(id);
  validation.innerHTML = "";
  validation.style.display = "none";
}
