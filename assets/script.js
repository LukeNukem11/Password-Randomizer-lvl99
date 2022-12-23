// Assignment Code
var generateBtn = document.querySelector("#generate");

//create generate password function
function generatePassword() {
  console.log("button pressed");
  
  //  set password length  to 8 < 128
  var confirmLength = prompt('Select # of characters for your password (between 8 and 128)')
  if (confirmLength <=7 || confirmLength >= 129) {
    alert('Password Length Out of Parameters');
  }
  // declare var
  var confirmSpecial = confirm('Do you want to Use special characters i.e.: !@#$...');

  var confirmNumbers = confirm('Do you want to Use Numbers i.e.: 1234...');

  var confirmUppercase = confirm('Do you want to Use Uppercase characters i.e.: ABCD...');

  var confirmLowercase = confirm('Do you want to Use Lowercase characters i.e.: abcd...');

  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
  var special = ['!', '@', '#', '$', '%', '^', '&','*', '(', ')', '-', '_', '=', '+', '|', '[', ']', '{', '}',';', ':', ',', '<', '>', '.', '/', '?'];

  var options = [];

  var password = '';

  if (confirmSpecial) {
    options = options.concat(special)
  }
  if (confirmNumbers) {
    options = options.concat(numbers)
  }
  if (confirmUppercase) {
    options = options.concat(upperCase)
  }
  if (confirmLowercase) {
    options = options.concat(lowerCase)
  }
  for (var i=0; i < confirmLength; i++) {
    password += options[Math.floor(Math.random() * options.length)];
  }

  

  // Display password in box
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
