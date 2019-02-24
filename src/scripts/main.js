import {
  check_address,
  check_email,
  check_fName,
  check_lName,
  check_password,
  check_phone,
  check_photo,
  check_collage,
  check_rollNo,
  check_branch,
  check_year
} from './util';
import { modalFunction } from './model';
const form = document.getElementById('submitform');

const email = document.getElementById('email');

const fName = document.getElementById('fName');

const lName = document.getElementById('lName');

const phone = document.getElementById('phone');

const photo = document.getElementById('photo');

const collage = document.getElementById('collage');

const rollNo = document.getElementById('rollNo');

const branch = document.getElementById('branch');

const year = document.getElementById('year');

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

// address.addEventListener('focusout', () => {
//   check_address();
// });

photo.addEventListener('change', () => {
  check_photo();
});

// collage.addEventListener('focusout', () => {
//   check_collage();
// });

rollNo.addEventListener('focusout', () => {
  check_rollNo();
});

branch.addEventListener('focusout', () => {
  check_branch();
});

// year.addEventListener('focusout', () => {
//   check_year();
// });

password.addEventListener('focusout', () => {
  check_password();
});

form.addEventListener('submit', e => {
  e.preventDefault();

  check_fName();
  check_lName();
  check_email();
  check_phone();
  check_photo();
  check_collage();
  check_rollNo();
  check_branch();
  check_year();
  check_password();

  if (
    check_fName() &&
    check_email() &&
    check_phone() &&
    check_photo() &&
    check_collage() &&
    check_rollNo() &&
    check_branch() &&
    check_year() &&
    check_password()
  ) {
    modalFunction(`<p>Congratulations!! ,You filled the form successfully</p>`);
  } else {
    modalFunction(`<p>Please Fill all required fields</p>`);
  }
});
