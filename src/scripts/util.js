const fullname = document.getElementById('fullname');

const phone = document.getElementById('phone');

const dob = document.getElementById('dob');

const rollNo = document.getElementById('rollNo');

const collage = document.getElementById('collage');

const course = document.getElementById('course');

const branch = document.getElementById('branch');

const year = document.getElementById('year');

export const check_fullname = () => {
  const errorFullname = document.getElementById('errorFullname');
  errorFullname.innerHTML = '';
  const name_regex = /^[a-zA-Z .]*$/;
  const fullnameValue = fullname.value;

  if (fullnameValue.trim().length == 0) {
    errorFullname.innerHTML = 'Please enter your Name';
    fullname.classList.add('error');
    return false;
  } else if (!fullnameValue.match(name_regex)) {
    errorFullname.innerHTML =
      'Name should only contain letters. Do not use Special Characters';
    fullname.classList.add('error');
    return false;
  } else {
    errorFullname.innerHTML = '';
    fullname.classList.remove('error');
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

export const check_dob = () => {
  const errorDob = document.getElementById('errorDob');
  errorDob.innerHTML = '';
  const dobValue = dob.value;
  const current = new Date();

  if (!dobValue) {
    errorDob.innerHTML = 'Please select your Date-Of-Birth';
    // errorDob.setCustomValidity('Please select your Date-Of-Birth');
    dob.classList.add('error');
    return false;
  } else if (current.getFullYear() - new Date(dobValue).getFullYear() < 10) {
    errorDob.innerHTML = 'Please choose appropirate years ';
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
  console.log(value);

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
  var value = course.options[course.selectedIndex].value;
  console.log(value);

  if (value === 'none') {
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
  var value = branch.options[branch.selectedIndex].value;
  console.log(value);

  if (value === 'none') {
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
  console.log(value);

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
