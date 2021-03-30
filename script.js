//Get the button:
mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  var security2 = document.getElementById("feed");
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    setTimeout(function(){}, 2000); // run donothing after 0.5 seconds
    console.log("Bottom of the page. Load more posts!")
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// const app = Vue.createApp({
//   data() {
//     return {
//       componentKey: 0
//     }
//   },
//   methods: {
//     posts() {

//     }
//   }
// })

function updateSecurityQuestion1View() {
  // grab the elements by id
  var security1 = document.getElementById("security1");
  var divSecurity1 = document.getElementById("divSecurity1");

  // if yes is selected
  if (security1.value != "0") {
    divSecurity1.classList.remove("invisible");
  }
  // no error, make it nice again
  // if they change their mind
  if (security1.value == "0") {
    divSecurity1.classList.add("invisible");
  }
}

function updateSecurityQuestion2View() {
  // grab the elements by id
  var security2 = document.getElementById("security2");
  var divSecurity2 = document.getElementById("divSecurity2");

  // if yes is selected
  if (security2.value != "0") {
    divSecurity2.classList.remove("invisible");
  }
  // no error, make it nice again
  // if they change their mind
  else {
    divSecurity2.classList.add("invisible");
  }
}

function updateSecurityQuestion3View() {
  // grab the elements by id
  var security3 = document.getElementById("security3");
  var divSecurity3 = document.getElementById("divSecurity3");

  // if yes is selected
  if (security3.value != "0") {
    divSecurity3.classList.remove("invisible");
  }
  // no error, make it nice again
  // if they change their mind
  else {
    divSecurity3.classList.add("invisible");
  }
}

function validateForm() {
  var passwordSignUp = document.querySelector("#password-sign-up");
  var passwordConfirm = document.querySelector("#password-confirm");
  var divPasswordError = document.querySelector("#divPasswordError");
  var specialCharacterError = document.querySelector("#specialCharacterError");
  var formIsValid = true;

  // Password Check 
  if (passwordSignUp.value == "") {
    divPasswordError.classList.remove("invisible");
    divPasswordError.innerHTML = "The Password cannot be empty.";
    passwordSignUp.classList.add("hasError");
    formIsValid = false;
  }

  else if (passwordConfirm.value == "") {
    divPasswordError.classList.remove("invisible");
    divPasswordError.innerHTML = "The Password cannot be empty.";
    passwordConfim.classList.add("hasError");
    formIsValid = false;
  }

  else if (passwordSignUp.value != passwordConfirm.value) {
    divPasswordError.classList.remove("invisible");
    divPasswordError.innerHTML = "The Password cannot be empty.";
    passwordConfim.classList.add("hasError");
    formIsValid = false;
  }

  // Special Character Check
  var elements = document.getElementsByTagName("input");

  var invalidChars = ['<', '>', '#', '-', '{', '}', '(', ')', '`', '"'];
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < invalidChars.length; j++) {
      if (elements[i].value.indexOf(invalidChars[j]) != -1) {
        specialCharacterError.classList.remove("invisible");
        specialCharacterError.innerHTML = "NO SPECIAL CHARACTERS!";
        elements[i].classList.add("hasError");
        formIsValid = false;
      }
    }
  }

  // Password Strength Check (one upper, one lower, one numeric)
  var passwordSignUp = document.querySelector("#password-sign-up");
  var divPasswordError = document.querySelector("#divPasswordError");
  var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (!passwordSignUp.value.match(pass)) {
    divPasswordError.classList.remove("invisible");
    divPasswordError.innerHTML = "The password must contain one upper case letter, one lowercase letter, and one number.";
    passwordSignUp.classList.add("hasError");
    formIsValid = false;
  }
  else {
    divPasswordErrorclassList.add("invisible");
    passwordSignUp.classList.remove("hasError");
  }
}