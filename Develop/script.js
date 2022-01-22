// Getting elements by ID 
 var lengthEl = document.getElementById('slider');
 var output = document.getElementById('password')
 var generateBtn = document.querySelector("#generate");
 var passwordBox = document.getElementById("password");
 var string = "";
 

generateBtn.addEventListener("click", () => {

    var password = "";
    var checkedLowercase = document.getElementById("lowercase").checked;
    var checkedUpper = document.getElementById("uppercase").checked;
    var checkedNumeric = document.getElementById("numeric").checked;
    var checkedSpecial = document.getElementById("special").checked;
    var result = "";

    console.log(checkedLowercase);
    console.log(checkedUpper);
    console.log(checkedNumeric);
    console.log(checkedSpecial);
    
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

    if (!checkedLowercase && !checkedUpper && !checkedNumeric && !checkedSpecial) {
        alert("Please Specify Password Requirements!");
        location.reload();
    }

    for (var i = 0; i < lengthEl.value; i++) {
        let output = result[Math.floor(Math.random() * result.length)];
        password += output;
    }
    
    passwordBox.innerText = password;
    output = string;

});

