// Getting elements by ID 
 var lengthEl = document.getElementById('slider');
 var output = document.getElementById('password')
 var generateBtn = document.querySelector("#generate");
 var passwordBox = document.getElementById("password");
 var string = "";
 
// Add event listener for the Generate Password button on click

generateBtn.addEventListener("click", () => {

    // Add variables
    var password = "";
    // Grab elements by ID
    var checkedLowercase = document.getElementById("lowercase").checked;
    var checkedUpper = document.getElementById("uppercase").checked;
    var checkedNumeric = document.getElementById("numeric").checked;
    var checkedSpecial = document.getElementById("special").checked;
    var result = "";
    // Add console logs for debugging
    console.log(checkedLowercase);
    console.log(checkedUpper);
    console.log(checkedNumeric);
    console.log(checkedSpecial);
    // Conditional statements for checking if checkboxes are selected
    // If a checkboxes is selected, add elemements to result variables (initially an empty string)
    if (checkedLowercase) {
        result += "abcdefghijklmnopqrstuvwxyz";
    }
    if (checkedUpper) {
        result += "ABCDEFGHIJKLMNOPQRSTUVWXYX";
    }

    if (checkedNumeric) {
        result += "0123456789";
    }

    if (checkedSpecial) {
        result += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
    // If neither of the checkboxes are selected, display an alert
    // Upon clicking on the Ok button in the alert window, reload the page
    if (!checkedLowercase && !checkedUpper && !checkedNumeric && !checkedSpecial) {
        alert("Please Specify Password Requirements!");
        location.reload();
    }
    // for loop for generating a password of the specified length
    for (var i = 0; i < lengthEl.value; i++) {
        let output = result[Math.floor(Math.random() * result.length)];
        password += output;
    }
    // Print the ouput in the text area
    passwordBox.innerText = password;
    output = string;

});

