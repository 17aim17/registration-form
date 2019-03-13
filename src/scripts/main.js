import {
  check_username,
  check_email,
  check_phone,
  check_dob,
  check_rollNo,
  check_collage,
  check_course,
  check_branch,
  check_year
} from './util';
import { modalFunction } from './model';
const form = document.getElementById('submitform');

let state = 0;
// for personal details

const username = document.getElementById('username');

const email = document.getElementById('email');

const phone = document.getElementById('phone');

// const photo = document.getElementById('photo');

const dob = document.getElementById('dob');

username.addEventListener('focusout', () => {
  check_username();
});

email.addEventListener('focusout', () => {
  check_email();
});

phone.addEventListener('focusout', () => {
  check_phone();
});

// photo.addEventListener('change', () => {
//   check_photo();
// });

dob.addEventListener('focusout', () => {
  check_dob();
});

// for collage details
const rollNo = document.getElementById('rollNo');

const collage = document.getElementById('collage');

const course = document.getElementById('course');

const branch = document.getElementById('branch');

const year = document.getElementById('year');

rollNo.addEventListener('focusout', () => {
  check_rollNo();
});

collage.addEventListener('focusout', () => {
  check_collage();
});

course.addEventListener('focusout', () => {
  check_course();
});

branch.addEventListener('focusout', () => {
  check_branch();
});

year.addEventListener('focusout', () => {
  check_year();
});

// buttons

const submitBtn = document.querySelector('.btn--submit');
const nextBtn = document.querySelector('.btn--next');
const backBtn = document.querySelector('.btn--back');
const cancelBtn = document.querySelector('.btn--cancel');

// sections
const section1 = document.querySelector('.grid__form__one');
const section2 = document.querySelector('.grid__form__two');

// Lists

const one = document.querySelector('.one');
const two = document.querySelector('.two');

one.addEventListener('click', e => {
  two.classList.remove('selected');
  section2.style.display = 'none';
  backBtn.style.display = 'none';
  cancelBtn.style.display = 'block';
  one.classList.add('selected');
  section1.style.display = 'block';
});

if (state === 1) {
  two.addEventListener('click', e => {
    one.classList.remove('selected');
    section1.style.display = 'none';
    cancelBtn.style.display = 'none';
    backBtn.style.display = 'block';
    two.classList.add('selected');
    section2.style.display = 'block';
  });
}

backBtn.addEventListener('click', e => {
  two.classList.remove('selected');
  section2.style.display = 'none';
  backBtn.style.display = 'none';
  cancelBtn.style.display = 'block';
  one.classList.add('selected');
  section1.style.display = 'block';
});

nextBtn.addEventListener('click', e => {
  e.preventDefault();
  check_username();
  check_email();
  check_phone();
  // check_photo();
  check_dob();
  if (
    check_username() &&
    check_email() &&
    check_phone() &&
    // check_photo() &&
    check_dob()
  ) {
    state = 1;
    section1.style.display = 'none';
    section2.style.display = 'block';
    backBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
    two.classList.add('selected');
    one.classList.remove('selected');
  } else {
    modalFunction(`<p>Please Fill This page . Only Then You Can Proceed</p>`);
  }
});

submitBtn.addEventListener('click', e => {
  check_username();
  check_email();
  check_phone();
  check_dob();
  check_rollNo();
  check_collage();
  check_course();
  check_branch();
  check_year();

  if (
    check_username() &&
    check_email() &&
    check_phone() &&
    check_dob() &&
    check_rollNo() &&
    check_collage() &&
    check_course() &&
    check_branch() &&
    check_year()
  ) {
    form.addEventListener('submit', e => {
      console.log('You Form has been submitted');
    });
  } else {
    e.preventDefault();
    modalFunction(`<p>Please Fill all required fields</p>`);
  }
});
