
//Check for first name validity

var fname_element = document.getElementById("first-name");
fname_element.addEventListener("input", fnameListener);

var finalfname = false;
var finallname = false;
var finalemail = false;
var finalphone = false;

function fnameListener(){
  var fnameisValid = true;
  var fname = document.getElementById("first-name").value.trim();
  for (let char of fname) {
      if ((char < "A" || char > "Z") && (char < "a" || char > "z")) {
          fnameisValid = false;
          break;
      }
  }

  if (!fnameisValid) {
    fname_element.classList.add("invalid");
    } else {
    fname_element.classList.remove("invalid");
  }

  finalfname = fnameisValid;
}

//Check for last name validity

var lname_element = document.getElementById("last-name");
lname_element.addEventListener("input", lnameListener);

function lnameListener(){
  var lnameisValid = true;
  var lname = document.getElementById("last-name").value.trim();
  for (let char of lname) {
      if ((char < "A" || char > "Z") && (char < "a" || char > "z")) {
          lnameisValid = false;
          break;
      }
  }

  if (!lnameisValid) {
    lname_element.classList.add("invalid");
    } else {
    lname_element.classList.remove("invalid");
  }

  finallname = lnameisValid;
}

//Check for email validity

var email_element = document.getElementById("email");
email_element.addEventListener("input", emailListener);

function emailListener() {
  var emailIsValid = true;
  var email = document.getElementById("email").value.trim();
  var email_element = document.getElementById("email");

  var atSymbol = email.indexOf("@");

  if (atSymbol < 1) {
    emailIsValid = false; 
  } else {
    var domainPart = email.substring(atSymbol + 1);
    var lastDot = domainPart.lastIndexOf(".");

    if (lastDot < 1 || lastDot === domainPart.length - 1) {
      emailIsValid = false; 
    }
  }
  
  if (!emailIsValid) {
    email_element.classList.add("invalid");
  } else {
    email_element.classList.remove("invalid");
  }

  finalemail = emailIsValid;
}

//Check for phone number validity

var phone_element = document.getElementById("phone-number");
phone_element.addEventListener("input", phoneListener);

function phoneListener() {
  var phoneIsValid = true;
  var phone = phone_element.value.trim();

  if (!phone.startsWith("+977 ")) {
    phone = "+977 ";
    phone_element.value = phone;
  }

  var localPart = phone.substring(5);

  if (isNaN(localPart) || localPart.length !== 10) {
    phoneIsValid = false;
  }

  if (!phoneIsValid) {
    phone_element.classList.add("invalid");
  } else {
    phone_element.classList.remove("invalid");
  }

  finalphone = phoneIsValid;
}

//Final verification of all fields before submitting.

document.getElementById("contact-form").addEventListener("submit", handleSubmit);
message_element = document.getElementById("main-message");

function handleSubmit(event) {
  event.preventDefault();  //Dodging the use of default submission.
  var finalmessage = true;
  
  if (!finalfname){
    fname_element.classList.add("invalid");
    fname_element.value = "";
    fname_element.placeholder = "Invalid first name";    
  }
  if (!finallname){
    lname_element.classList.add("invalid");
    lname_element.value = "";
    lname_element.placeholder = "Invalid last name";    
  }
  if (!finalemail){
    email_element.classList.add("invalid");
    email_element.value = "";
    email_element.placeholder = "Invalid email";    
  }
  if (!finalphone){
    phone_element.classList.add("invalid");
    phone_element.value = "";
    phone_element.placeholder = "Invalid phone number";    
  }
  if (message_element.value.length == 0) {
    message_element.classList.add("invalid");
    message_element.value = "";
    message_element.placeholder = "Message cannot be empty";
    var finalmessage = false;
  }
  
  if (finalfname && finallname && finalemail && finalphone && finalmessage) {
    alert("Form submitted successfully!");
  } else {
    alert("Form submission failed. Please check the fields.");
  }
}