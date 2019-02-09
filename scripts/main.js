const form = document.getElementById('submitform');

const email = document.getElementById('email');

const fName = document.getElementById('fName');

const lName = document.getElementById('lName');

const phone = document.getElementById('phone');

const address = document.getElementById('address');

const photo = document.getElementById('photo');

const rollNo = document.getElementById('rollNo');

const branch = document.getElementById('branch');

const password = document.getElementById('password');

email.addEventListener('focusout', () => {
  check_email();
});

fName.addEventListener('focusout', () => {
  check_fName();
});

lName.addEventListener('focusout', () => {
  check_lName();
});

phone.addEventListener('focusout', () => {
  check_phone();
});

address.addEventListener('focusout', () => {
  check_address();
});

photo.addEventListener('focusout', () => {
  check_photo();
});

rollNo.addEventListener('focusout', () => {
  check_rollNo();
});

branch.addEventListener('focusout', () => {
  check_branch();
});

password.addEventListener('focusout', () => {
  check_password();
});

form.addEventListener('submit', e => {
  e.preventDefault();

  check_fName();
  check_lName();
  check_email();
  check_phone();
  check_address();
  check_photo();
  check_rollNo();
  check_branch();
  check_password();

  if (
    check_fName() &&
    check_email() &&
    check_phone() &&
    check_address() &&
    check_photo() &&
    check_rollNo() &&
    check_branch() &&
    check_password()
  ) {
    alert('You are good to go !!');
  } else {
    console.log('Fill all fields with "*" symbol');
  }
});
