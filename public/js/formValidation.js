// Register form validation

function validateRegisterForm() {
  var name = document.getElementById("exampleInputtext1").value.trim();
  var email = document.getElementById("exampleInputEmail1").value.trim();
  var mobileNo = document.getElementById("exampleInputMobile").value.trim();
  var password = document.getElementById("exampleInputPassword1").value;

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var mobileError = document.getElementById("mobileError");
  var passwordError = document.getElementById("passwordError");

  // Reset previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  mobileError.textContent = "";
  passwordError.textContent = "";

  // Validate name
  if (name === "") {
    nameError.textContent = "Please enter your name.";
    return false;
  }

  // Validate email
  if (email === "") {
    emailError.textContent = "Please enter your email address.";
    return false;
  } else if (!validateEmail(email)) {
    emailError.textContent = "Please enter a valid email address.";
    return false;
  }

  // Validate mobile number
  if (mobileNo === "") {
    mobileError.textContent = "Please enter your mobile number.";
    return false;
  } else if (!validateMobileNumber(mobileNo)) {
    mobileError.textContent =
      "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.";
    return false;
  }

  // Validate password
  if (password === "") {
    passwordError.textContent = "Please enter a password.";
    return false;
  }

  return true; 
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateMobileNumber(mobileNo) {
  var re = /^[6789]\d{9}$/;
  return re.test(mobileNo);
}

// login form validation
function validateLoginForm() {
    var email = document.getElementById('exampleInputEmail1').value.trim();
    var password = document.getElementById('exampleInputPassword1').value;

    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    // Reset previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validate email
    if (email === '') {
        emailError.textContent = 'Please enter your email address.';
        return false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    }

    // Validate password
    if (password === '') {
        passwordError.textContent = 'Please enter your password.';
        return false;
    }

    return true;
}