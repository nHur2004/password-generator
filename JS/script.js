// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordType = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

var generatePassword = function() {
  var promptCriteria = window.prompt("Which criteria would you like included in your password? Type LENGTH to choose a distinct length. Type CHAR to choose character types. Type BOTH to choose both or type RANDOM for a fully random password.");

  // if field is empty, re-run the command
  if (promptCriteria === "" || promptCriteria === null) {
    window.alert("Choice was invalid, please try again.");
    return generatePassword();
  }

  promptCriteria = promptCriteria.toLocaleLowerCase();

  // criteria choices
  // chooses only the length criteria
  if (promptCriteria === "length") {
    lengthChooser();
  // chooses only the character type criteria
  } else if (promptCriteria === "char") {
    charChooser();
  // chooses both criteria choosers
  } else if (promptCriteria === "both") {
    bothChooser();
  // chooses a fully random password
  } else if (promptCriteria === "random") {
    randomRandom();
  } else {
    window.alert("Choice was invalid, please try again.");
    return generatePassword();
  }
};

// random password length generator 
var randomLength = function() {
  var rndmLength = Math.floor(Math.random() * 121) + 8;
  return rndmLength;
};

// random character code
var randomRandom = function(L) {  
  var rndmChar = "";
  var charRandom = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
  var charRandomLength = charRandom.length;
  for ( i = 0; i < randomLength(); i++ ) {
    rndmChar += charRandom.charAt(Math.floor(Math.random() * charRandomLength));
  }
  return rndmChar;
};
console.log(randomRandom());

// length code
var lengthChooser = function() {
  var length = "";
  // while the length value has no value, prompt
  while (length === "" || length === null) {
    length = prompt("How long would you like your password? Password must be between 8 and 128 characters.");
  } // if the length value is between 8 and 128, continue
  if (length >= 8 && length <= 128) {
    window.alert("Your password will be " + length + " characters long.");
    return length;
  } // if the length value is not between 8 and 128, ask again
  else {
    window.alert("Please choose a number between 8 and 128.");
    lengthChooser();
  }
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);