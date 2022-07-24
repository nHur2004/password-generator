// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordType = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value = password;

};

var generatePassword = function() {
  var promptCriteria = window.prompt("Which criteria would you like included in your password? \nType LENGTH to choose a distinct length. \nType CHAR to choose character types. \nOr type RANDOM for a fully random password.");

  // if field is empty, re-run the command
  if (promptCriteria === "") {
    window.alert("Choice was invalid, please try again.");
    return generatePassword();
  } else if (promptCriteria === null) {
    window.alert("Cancelled.");
    stop;
  }

  promptCriteria = promptCriteria.toLocaleLowerCase();

  // criteria choices
  // chooses only the length criteria
  if (promptCriteria === "length") {
    lengthChooser();
  // chooses only the character type criteria
  } else if (promptCriteria === "char") {
    charChooser();
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

// character choice code
var charChoice = function(C) {
  var charSelected = "";
  var charULN = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  var charUL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charUN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var charLS = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
  if (C === "uln") {
    for (i = 0; i < charULN.length; i++) {
      charSelected += charULN.charAt(Math.floor(Math.random() * charULN.length));
    }
    return charSelected;
  } else if (C === "ul") {
    for (i = 0; i < charUL.length; i++) {
      charSelected += charUL.charAt(Math.floor(Math.random() * charUL.length));
    }
    return charSelected;
  } else if (C === "un") {
    for (i = 0; i < charUN.length; i++) {
      charSelected += charUN.charAt(Math.floor(Math.random() * charUN.length));
    }
    return charSelected;
  } else if (C === "ls") {
    for (i = 0; i < charLS.length; i++) {
      charSelected += charLS.charAt(Math.floor(Math.random() * charLS.length));
    }
    return charSelected;
  }
};

// random character code
var randomChar = function(length) {  
  var rndmChar = "";
  var charRandom = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
  var charRandomLength = charRandom.length;
  for ( i = 0; i < length; i++ ) {
    rndmChar += charRandom.charAt(Math.floor(Math.random() * charRandomLength));
  }
  return rndmChar;
};

var randomRandom = function() {
  document.getElementById("password").value = randomChar(randomLength());
}

// length code
var lengthChooser = function() {
  var length = "";
  // while the length value has no value, prompt
  while (length === "" || length === null) {
    length = prompt("How long would you like your password? Password must be between 8 and 128 characters.");
  } // if the length value is between 8 and 128, continue
  if (length >= 8 && length <= 128) {
    window.alert("Your password will be " + length + " characters long.");

    document.getElementById("password").value = randomChar(length);

    return length;
  } // if the length value is not between 8 and 128, ask again
  else {
    window.alert("Please choose a number between 8 and 128.");
    lengthChooser();
  }
};

// character code
var charChooser = function() {
  var charSelected = prompt("What type of characters would you like in your password?\nType ULNS for uppercase, lowercase, numbers, and symbols.\nType ULN for uppercase, lowercase, and numbers.\nType UL for uppercase and lowercase.\nType UN for uppercase and numbers.\nType LS for lowercase and symbols.");
  
  // lots of choices: ULNS ULN UL UN LS
  charSelected.toLowerCase();
  if (charSelected === "ulns") { // runs function to include all characters
    window.alert("Your password will be a random length with all character types.");

    document.getElementById("password").value = randomChar(randomLength());
    return charSelected;
  } else if (charSelected === "uln") { // runs function to run no symbols
    window.alert("Your password will be a random length with no symbol character types.")

    document.getElementById("password").value = charChoice("uln");
    return charSelected;
  } else if (charSelected === "ul") { // runs function to run upper and lowercase
    window.alert("Your password will be a random length with upper and lowercase character types.")

    document.getElementById("password").value = charChoice("ul");
    return charSelected;
  } else if (charSelected === "un") { // runs function to run upper and numbers
    window.alert("Your password will be a random length with uppercase and number character types.")

    document.getElementById("password").value = charChoice("un");
    return charSelected;
  } else if (charSelected === "ls") { // runs function to run lower and symbols
    window.alert("Your password will be a random length with lowercase and symbol character types.")

    document.getElementById("password").value = charChoice("ls");
    return charSelected;
  } else {
    window.alert("Please input one of the 5 choices.");

    charChooser();
  } if (charSelected === null || charSelected === "null") {
    window.alert("Cancelled.");
    stop;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);