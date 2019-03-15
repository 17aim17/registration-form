import {
  check_fullname,
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

// for personal details

const fullname = document.getElementById('fullname');

// const username = document.getElementById('username');

// const email = document.getElementById('email');

const phone = document.getElementById('phone');

// const photo = document.getElementById('photo');

const dob = document.getElementById('dob');

fullname.addEventListener('focusout', () => {
  check_fullname();
});

// username.addEventListener('focusout', () => {
//   check_username();
// });

// email.addEventListener('focusout', () => {
//   check_email();
// });

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

const addOptions = max => {
  year.innerHTML = ` <option selected value="none">Choose Your Year</option>`;
  for (let i = 1; i <= max; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', i);
    if (i == 1) {
      option.textContent = '1st';
    } else if (i == 2) {
      option.textContent = '2nd';
    } else if (i == 3) {
      option.textContent = '3rd';
    } else {
      option.textContent = i + 'th';
    }
    year.append(option);
  }
};

course.addEventListener('change', () => {
  const courseValue = course.value;
  let max = 0;
  if (courseValue == 'none') {
    year.innerHTML = ` <option selected value="none">Choose Your Year</option>`;
  } else if (courseValue == 1) {
    max = 4;
  } else if (courseValue == 2 || courseValue == 5 || courseValue == 4) {
    max = 2;
  } else if (courseValue == 3) {
    max = 3;
  }

  addOptions(max);
});

branch.addEventListener('focusout', () => {
  check_branch();
});

year.addEventListener('focusout', () => {
  check_year();
});

// buttons

const submitBtn = document.querySelector('.btn--submit');

submitBtn.addEventListener('click', e => {
  check_fullname();
  check_phone();
  check_dob();
  check_rollNo();
  check_collage();
  check_course();
  check_branch();
  check_year();

  if (
    check_fullname() &&
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
