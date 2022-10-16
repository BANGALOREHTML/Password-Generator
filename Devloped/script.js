///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////

  // SETS THE  MIN AND MAX LENGTH OF THE PASSWORD
  const minLength = 8;
  const maxLength = 128;

  //
  var lengthConfirm = prompt(
    "How long would you like your password to be? (8-128)"
  );

  if (lengthConfirm > -minLength && lengthConfirm <= maxLength) {
    console.log(lengthConfirm);
  } else {
    alert(" Not a  valid number. Please try again.");
    return;
  }

  let userChoice = "";

  // CONFIRMS IF USER WANTS LOWERCASE LETTERS

  var lowerCaseConfirm = confirm(
    "Would you like to include lowercase letters?"
  );
  if (lowerCaseConfirm) {
    userChoice += lowerCase;
    console.log(userChoice);
  }

  // confirms  if user wants uppercase letters
  var upperCaseConfirm = confirm(
    "Would you like to include upper case letters?"
  );
  if (upperCaseConfirm) {
    userChoice += upperCase;
    console.log(userChoice);
  }
  // confirms  if user wants number letters
  var numbersConfirm = confirm("Would you like to include numbers?");
  if (numbersConfirm) {
    userChoice += numbers;
    console.log(userChoice);
  }

  // confirms  if user wants special characters
  var specialCharactersConfirm = confirm(
    "Would you like to include special characters letters?"
  );
  if (specialCharactersConfirm) {
    userChoice += specialCharacters;
    console.log(userChoice);
  }

  var text = "";

  // the loop?
  for (let i = 0; i < lengthConfirm; i++) {
    text += userChoice[Math.floor(Math.random() * userChoice.length)];
  }

  return text;

  // I know I need a function because that tells the cpu the action?
  // I know I need a variable because that is what we use to store the data
  // I know I need to use math.random because that is what we use to generate random characters
  // I know we need logic because that is what we use to tell the computer what to do

  // ************************************************************************************************
}
