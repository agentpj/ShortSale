// js.script for Short Sale Website

var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var phoneInput = document.querySelector("#phone");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
//submitEl.addEventListener("click", showResponse);
