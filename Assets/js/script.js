// Create variables for password criteria lowercase, uppercase, numeric, and/or special characters.
var loCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// With assistance from https://morioh.com/p/0b5bd0ececd4 I used the .map(function(v)) to transform my strings from loCase array into uppercase.
var upCase = loCase.map(function(loC) {
  return loC.toUpperCase()});
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spCh = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// Uncomment function to console the passord criteria variables
// function consoleArray(all) {
//   for (var i = 0; i < all.length; i++){
//     console.log(all[i]);
//   }
//   console.log("----------")
// }

// consoleArray(loCase);
// consoleArray(upCase);
// consoleArray(numeric);
// consoleArray(spCh);

// Looks for id #geneate in the index file. (Assignment Code)
var generateBtn = document.querySelector("#generate");

// Function that runs through questions to select password criteria, and run through a loop to create it to the requested lenght.
function generatePassword(){
// Pop up message asking for how many characters user would like to have in the password.
// do/while loop if user enters a number less than 8 or greater than 128.
  do { 
    var passLength = prompt("Type how many characters you would like your password to contain. Please note minimum 8 and maximum 128.");
    var numPassLength = parseInt(passLength);

    if (numPassLength < 8 || numPassLength > 128 || !numPassLength) {
      alert("You did not enter a valid number.");
    }
  }
  while (numPassLength < 8 || numPassLength > 128 || !numPassLength);
    console.log(numPassLength);

  // Ask user to confirm if password should include lower case.
  var okLoCase = confirm("Click OK to confirm including lower case.");
  console.log(okLoCase);

  // Ask user to confirm if password should include upper case.
  var okUpCase = confirm("Click OK to confirm including upper case.");
  console.log(okUpCase);

  // Ask user to confirm if password should include numeric characters.
  var okNum = confirm("Click OK to confirm including numeric characters.");
  console.log(okNum);

  // Ask user to confirm if password should include special characters.
  var okSpCh = confirm("Click OK to confirm including special characters.");
  console.log(okSpCh);

  // Creates an array where the password is going to be stored according to the selected criteria after the for loop runs.
  var finalGePass = [];

  // Loop through the criterias for the amount of times limited by the password lenght.
  for (var i=0; i < numPassLength; i++) {
  
    // Each if statement is checking which criteria the user has confirmed
    // If confirmed, randomly select a value inside that array length and add that value to the beginning of the finalGePass array.
    if (okLoCase){
    finalGePass.unshift(loCase[Math.floor(Math.random() * loCase.length)]);
    }
    if (okUpCase){
    finalGePass.unshift(upCase[Math.floor(Math.random() * upCase.length)]);
    }
    if (okNum){
    finalGePass.unshift(numeric[Math.floor(Math.random() * numeric.length)]);
    }
    if (okSpCh){
    finalGePass.unshift(spCh[Math.floor(Math.random() * spCh.length)]);
    }
    finalGePass = finalGePass.slice(0, numPassLength);
  }
  // Return the values of an array as a string.
  return finalGePass.join("");
}

// Write password to the #password input (Assignment Code)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button (Assignment Code)
// Added generatePassword to the assigment code to run the function that generates the password.
generateBtn.addEventListener("click", writePassword, generatePassword);
