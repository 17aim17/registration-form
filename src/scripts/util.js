const username = document.getElementById('username');

const email = document.getElementById('email');

const phone = document.getElementById('phone');

const photo = document.getElementById('photo');

const dob = document.getElementById('dob');

const rollNo = document.getElementById('rollNo');

const collage = document.getElementById('collage');

const course = document.getElementById('course');

const branch = document.getElementById('branch');

const year = document.getElementById('year');
export const check_email = () => {
  const emailError = document.getElementById('errorEmail');
  emailError.innerHTML = '';
  const emial_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailValue = email.value;

  if (emailValue.trim().length == 0) {
    emailError.innerHTML = 'Please enter email';
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

export const check_username = () => {
  const errorUsername = document.getElementById('errorUsername');
  errorUsername.innerHTML = '';
  const username_regex = /^[a-z0-9]*$/;
  const userNameValue = username.value;

  if (userNameValue.trim().length == 0) {
    errorUsername.innerHTML = 'Please enter username';
    username.classList.add('error');
    return false;
  } else if (
    !userNameValue.match(username_regex) ||
    userNameValue.length > 30
  ) {
    errorUsername.innerHTML =
      'Username should only contain a-z and 0-9 and max length is 30 characters';
    username.classList.add('error');
    return false;
  } else {
    errorUsername.innerHTML = '';
    username.classList.remove('error');
    return true;
  }
};

export const check_phone = () => {
  const errorPhone = document.getElementById('errorPhone');
  errorPhone.innerHTML = '';
  var phone_regex = /^[789]\d{9}$/;
  const phoneValue = phone.value;

  if (phoneValue.trim().length === 0) {
    errorPhone.innerHTML = 'Please enter Contact no.';
    phone.classList.add('error');
    return false;
  } else if (!phoneValue.match(phone_regex)) {
    errorPhone.innerHTML = 'Contact no. is Invalid';
    phone.classList.add('error');
    return false;
  } else {
    errorPhone.innerHTML = '';
    phone.classList.remove('error');
    return true;
  }
};

export const check_photo = () => {
  const errorPhoto = document.getElementById('errorPhoto');
  errorPhoto.innerHTML = '';
  const filePath = photo.value;
  const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

  if (photo.value == '') {
    errorPhoto.innerHTML = 'Please select your Image';
    photo.classList.add('error');
    return false;
  } else if (!allowedExtensions.exec(filePath)) {
    photo.value = '';
    errorPhoto.innerHTML =
      'Please upload file having extensions .jpeg/.jpg/.png/.gif only.';
    photo.classList.add('error');
    return false;
  } else if (photo.files[0].size > 256000) {
    errorPhoto.innerHTML = 'Photo size is greater than 250 kb.';
    //  <a href="https://www.dcrustrhythm.org/how_to_resize_photo.html" target="_blank">Click here</a> to know how to reduce file size
    photo.classList.add('error');
    return false;
  } else {
    errorPhoto.innerHTML = '';
    photo.classList.remove('error');
    return true;
  }
};

export const check_dob = () => {
  const errorDob = document.getElementById('errorDob');
  errorDob.innerHTML = '';
  const dobValue = dob.value;
  const current = new Date();

  if (!dobValue) {
    errorDob.innerHTML = 'Please select your Date-Of-Birth';
    dob.classList.add('error');
    return false;
  } else if (new Date(dob.value) >= current) {
    errorDob.innerHTML = 'Current or Future dates not allowded';
    dob.classList.add('error');
    return false;
  } else {
    errorDob.innerHTML = '';
    dob.classList.remove('error');
    return true;
  }
};

export const check_rollNo = () => {
  const errorRoll = document.getElementById('errorRoll');
  errorRoll.innerHTML = '';
  var digit_regex = /^[0-9]*$/;
  const rollNoValue = rollNo.value;

  if (rollNoValue.trim().length === 0) {
    errorRoll.innerHTML = 'Please enter Collage Roll No.';
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

export const check_collage = () => {
  const errorCollage = document.getElementById('errorCollage');
  errorCollage.innerHTML = '';
  var value = collage.options[collage.selectedIndex].value;

  if (value === 'none') {
    errorCollage.innerHTML = 'Please select your Collage';
    collage.classList.add('error');
    return false;
  } else {
    errorCollage.innerHTML = '';
    collage.classList.remove('error');
    return true;
  }
};

export const check_course = () => {
  const errorCourse = document.getElementById('errorCourse');
  errorCourse.innerHTML = '';
  var my_regex = /[a-zA-Z]|\s|\.*/;
  const courseValue = course.value;

  if (courseValue.trim().length === 0) {
    errorCourse.innerHTML = 'Please enter your Course';
    course.classList.add('error');
    return false;
  } else {
    errorCourse.innerHTML = '';
    course.classList.remove('error');
    return true;
  }
};

export const check_branch = () => {
  const errorBranch = document.getElementById('errorBranch');
  errorBranch.innerHTML = '';
  var my_regex = /[a-zA-Z]|\s|\.*/;
  const branchValue = branch.value;

  if (branchValue.trim().length === 0) {
    errorBranch.innerHTML = 'Please enter your Branch';
    branch.classList.add('error');
    return false;
  } else {
    errorBranch.innerHTML = '';
    branch.classList.remove('error');
    return true;
  }
};

export const check_year = () => {
  const errorYear = document.getElementById('errorYear');
  errorYear.innerHTML = '';
  var value = year.options[year.selectedIndex].value;

  if (value === 'none') {
    errorYear.innerHTML = 'Please select your current studying year';
    year.classList.add('error');
    return false;
  } else {
    errorYear.innerHTML = '';
    year.classList.remove('error');
    return true;
  }
};
