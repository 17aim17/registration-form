const check_email = () => {
  const emailError = document.getElementById('errorEmail');
  emailError.innerHTML = '';
  const emial_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailValue = email.value;

  if (emailValue.trim().length == 0) {
    emailError.innerHTML = 'Email Filed is required';
    email.classList.add('error');
    return false;
  } else if (!emailValue.match(emial_regex)) {
    emailError.innerHTML = 'Email is Invalid';
    email.classList.add('error');
    return false;
  } else {
    emailError.innerHTML = '';
    email.classList.remove('error');
    return true;
  }
};

const check_fName = () => {
  const errorfName = document.getElementById('errorfName');
  errorfName.innerHTML = '';
  const name_regex = /^[a-zA-Z ]*$/;
  const fnameValue = fName.value;

  if (fnameValue.trim().length == 0) {
    errorfName.innerHTML = 'First Name is Required';
    fName.classList.add('error');
    return false;
  } else if (!fnameValue.match(name_regex)) {
    errorfName.innerHTML = 'Name should only contain a-z A-Z';
    fName.classList.add('error');
    return false;
  } else {
    errorfName.innerHTML = '';
    fName.classList.remove('error');
    return true;
  }
};

const check_lName = () => {
  const errorlName = document.getElementById('errorlName');
  errorlName.innerHTML = '';
  const name_regex = /^[a-zA-Z ]*$/;
  const lnameValue = lName.value;

  if (!lnameValue.match(name_regex) && lnameValue.trim().length > 0) {
    errorlName.innerHTML = 'Name should only contain a-z A-Z';
    lName.classList.add('error');
    return false;
  } else {
    errorlName.innerHTML = '';
    lName.classList.remove('error');
    return true;
  }
};

const check_phone = () => {
  const errorPhone = document.getElementById('errorPhone');
  errorPhone.innerHTML = '';
  var phone_regex = /^[789]\d{9}$/;
  const phoneValue = phone.value;

  if (phoneValue.trim().length === 0) {
    errorPhone.innerHTML = 'Phone is required';
    phone.classList.add('error');
    return false;
  } else if (!phoneValue.match(phone_regex)) {
    errorPhone.innerHTML = 'Phone number is Invalid';
    phone.classList.add('error');
    return false;
  } else {
    errorPhone.innerHTML = '';
    phone.classList.remove('error');
    return true;
  }
};

const check_address = () => {
  const errorAddress = document.getElementById('errorAddress');
  errorAddress.innerHTML = '';
  var name_regex = /^[a-zA-Z /.,|()-]*$/;
  var invalid_input = /^[<>{}|:;]*$/;
  const addressValue = address.value;

  if (addressValue.trim().length === 0) {
    errorAddress.innerHTML = 'Address is required';
    address.classList.add('error');
    return false;
  } else if (
    !addressValue.match(name_regex) ||
    addressValue.match(invalid_input)
  ) {
    errorAddress.innerHTML =
      'Invalid Input, Only Text, Spaces, / . - | ( )  allowed';
    address.classList.add('error');
    return false;
  } else {
    errorAddress.innerHTML = '';
    address.classList.remove('error');
    return true;
  }
};

const check_photo = () => {
  const errorPhoto = document.getElementById('errorPhoto');
  errorPhoto.innerHTML = '';
  const filePath = photo.value;
  const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

  if (photo.value == '') {
    errorPhoto.innerHTML = 'Photo is required';
    photo.classList.add('error');
    return false;
  } else if (!allowedExtensions.exec(filePath)) {
    photo.value = '';
    errorPhoto.innerHTML =
      'Please upload file having extensions .jpeg/.jpg/.png/.gif only.';
    photo.classList.add('error');
    return false;
  } else if (photo.files[0].size > 256000) {
    errorPhoto.innerHTML =
      'Photo size is greater than 250 kb . <a href="https://www.dcrustrhythm.org/how_to_resize_photo.html" target="_blank">Click here</a> to know how to reduce file size';
    photo.classList.add('error');
    return false;
  } else {
    errorPhoto.innerHTML = '';
    photo.classList.remove('error');
    return true;
  }
};

const check_rollNo = () => {
  const errorRoll = document.getElementById('errorRoll');
  errorRoll.innerHTML = '';
  var digit_regex = /^[0-9]*$/;
  const rollNoValue = rollNo.value;

  if (rollNoValue.trim().length === 0) {
    errorRoll.innerHTML = 'Roll No is required';
    rollNo.classList.add('error');
    return false;
  } else if (!rollNoValue.match(digit_regex)) {
    errorRoll.innerHTML = 'Only Digits 0-9 are allowded';
    rollNo.classList.add('error');
    return false;
  } else {
    errorRoll.innerHTML = '';
    rollNo.classList.remove('error');
    return true;
  }
};

const check_branch = () => {
  const errorBranch = document.getElementById('errorBranch');
  errorBranch.innerHTML = '';
  var my_regex = /[a-zA-Z]|\s|\.*/;
  const branchValue = branch.value;

  if (branchValue.trim().length === 0) {
    errorBranch.innerHTML = 'Branch Feld is required';
    branch.classList.add('error');
    return false;
  } else {
    errorBranch.innerHTML = '';
    branch.classList.remove('error');
    return true;
  }
};

const check_password = () => {
  const errorPassword = document.getElementById('errorPassword');
  errorPassword.innerHTML = '';
  var my_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const passwordValue = password.value;

  if (passwordValue.trim().length === 0) {
    errorPassword.innerHTML = 'Password is required';
    password.classList.add('error');
    return false;
  } else if (!passwordValue.match(my_regex)) {
    errorPassword.innerHTML =
      'Password should contain atleast one number and one special character and min lenght is 6 characters';
    password.classList.add('error');
    return false;
  } else {
    errorPassword.innerHTML = '';
    password.classList.remove('error');
    return true;
  }
};
