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

window.addEventListener('load', () => {
  collage.innerHTML = ` <option selected value="none">Choose Your College</option>
  <option value="Dcrust Main Campus">1. Dcrust Main Campus</option>
  <option value="Bhagwan Parshuram College of Engineering"
    >2. Bhagwan Parshuram College of Engineering</option
  >
  <option value="Bharat Institute of Technology">3. Bharat Institute of Technology</option>
  <option value="Delhi Institute of Tech. & Management"
    >4. Delhi Institute of Tech. & Management</option
  >
  <option value="G.V.M. Institute of Tech. & Management"
    >5. G.V.M. Institute of Tech. & Management</option
  >
  <option value="Gateway College of Architecture & Design"
    >6. Gateway College of Architecture & Design</option
  >
  <option value="Gateway Institute of Engg. & Technology"
    >7. Gateway Institute of Engg. & Technology</option
  >
  <option value="Hindu College of Engineering">8. Hindu College of Engineering</option>
  <option value="Hindu Institute of Management">9. Hindu Institute of Management</option>
  <option value="Hindu School of Architecture">10. Hindu School of Architecture</option>
  <option value="International Institute of Technology &
  Management,Murthal, Sonepat."
    >11. International Institute of Technology &
    Management,Murthal, Sonepat.</option
  >
  <option value="International Institute of Tech. and Business,VPO
  Jhundpur, Sonepat."
    >12. International Institute of Tech. and Business,VPO
    Jhundpur, Sonepat.</option
  >
  <option value="P.M. College of Engineering">13. P.M. College of Engineering</option>
  <option value="P.M. College of Architecture">14. P.M. College of Architecture</option>
  <option value="Bahra Institute of Management & Technology"
    >15. Bahra Institute of Management & Technology</option
  >
  <option value="Shri Balwant Institute of Technology"
    >16. Shri Balwant Institute of Technology</option
  >
  <option value="South Point Institute of Technology & Management"
    >17. South Point Institute of Technology & Management</option
  >
  <option value="South Point School of Architecture"
    >18. South Point School of Architecture</option
  >
  <option value="World School of Planning & Architecture"
    >19. World School of Planning & Architecture</option
  >`;

  course.innerHTML = ` 
  <option selected value="none">Choose Your Course</option>
  <option value="Bachelor of Technology"
   >1. Bachelor of Technology</option
 >
 <option value="Master of Technology"
   >2. Master of Technology</option
 >
 <option value="Bachelor of Science"
   >3. Bachelor of Science</option
 >
 <option value="Master of Science">4. Master of Science</option>
 <option value="B.sc Integrated">5. B.sc Integrated</option>
 <option value="Bachelor of Business Administration"
   >6. Bachelor of Business Administration</option
 >
 <option value="Master of Business Administration"
   >7. Master of Business Administration</option
 >
 <option value="BBA Integrated">8. BBA Integrated</option>
 <option value="Bachelor of Architecture"
   >9. Bachelor of Architecture
 </option>
 <option value="Master of Architecture"
   >10. Master of Architecture</option
 >
 <option value="Bachelor in Computer Application"
   >11. Bachelor in Computer Application</option
 >
 <option value="Master of Computer Applications"
   >12. Master of Computer Applications</option
 >
 <option value="BCA Integrated">13. BCA Integrated</option>`;
});

const addYears = max => {
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
    year.appendChild(option);
  }
};

course.addEventListener('change', () => {
  const courseValue = course.value;

  if (courseValue == 'none') {
    year.innerHTML = ` <option selected value="none">Choose Your Year</option>`;
    branch.innerHTML = ` <option selected value="none">Choose Your Branch</option>`;
  } else if (courseValue == 'Bachelor of Technology') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="Biomedical Engineering">1. Biomedical Engineering</option>
                <option  value ="Biotechnology">2. Biotechnology</option>
                <option  value ="Civil  Engineering">3. Civil  Engineering</option>
                <option  value ="Computer Science Engineering">4. Computer Science Engineering</option>
                <option  value ="Chemical Engineering">5. Chemical Engineering</option>
                <option  value ="Electrical Engineering">6. Electrical Engineering</option>
                <option  value ="Electronics & Communication Engineering">7. Electronics & Communication Engineering</option>
                <option  value ="Mechanical Engineering">8. Mechanical Engineering</option>
    `;
    addYears(4);
  } else if (courseValue == 'Master of Technology') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="Biomedical Engineering">1. Biomedical Engineering</option>
                <option  value ="Biotechnology">2. Biotechnology</option>
                <option  value ="Civil  Engineering">3. Civil  Engineering</option>
                <option  value ="Computer Science Engineering">4. Computer Science Engineering</option>
                <option  value ="Chemical Engineering">5. Chemical Engineering</option>
                <option  value ="Electrical Engineering">6. Electrical Engineering</option>
                <option  value ="Electronics & Communication Engineering">7. Electronics & Communication Engineering</option>
                <option  value ="Mechanical Engineering">8. Mechanical Engineering</option>
    `;
    addYears(2);
  } else if (courseValue == 'Bachelor of Science') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="Physics">1. Physics</option>
                <option  value ="Chemistry">2. Chemistry</option>
                <option  value ="Maths">3. Maths</option>
  
    `;
    addYears(3);
  } else if (courseValue == 'Master of Science') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="Physics">1. Physics</option>
                <option  value ="Chemistry">2. Chemistry</option>
                <option  value ="Maths">3. Maths</option>
  
    `;
    addYears(2);
  } else if (courseValue == 'B.sc Integrated') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="Physics">1. Physics</option>
                <option  value ="Chemistry">2. Chemistry</option>
                <option  value ="Maths">3. Maths</option>
  
    `;
    addYears(4);
  } else if (courseValue == 'Bachelor of Business Administration') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="Bachelor of Business Administration">1. Bachelor of Business Administration</option>  
    `;
    addYears(3);
  } else if (courseValue == 'Master of Business Administration') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="Master of Business Administration">1. Master of Business Administration</option>  
    `;
    addYears(2);
  } else if (courseValue == 'BBA Integrated') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="BBA Integrated">1. BBA Integrated</option>  
    `;
    addYears(4);
  } else if (courseValue == 'Bachelor of Architecture') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="Bachelor of Architecture">1. Bachelor of Architecture</option>  
    `;
    addYears(5);
  } else if (courseValue == 'Master of Architecture') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="Master of Architecture">1. Master of Architecture</option>  
    `;
    addYears(2);
  } else if (courseValue == 'Bachelor in Computer Application') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="Bachelor in Computer Application">1. Bachelor in Computer Application</option>  
    `;
    addYears(3);
  } else if (courseValue == 'Master of Computer Applications') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="Master of Computer Applications">1. Master of Computer Applications</option>  
    `;
    addYears(2);
  } else if (courseValue == 'BCA Integrated') {
    branch.innerHTML = `
                <option selected value ="none">Choose Your Branch</option>
                <option  value ="BCA Integrated">1. BCA Integrated</option>  
    `;
    addYears(4);
  } else {
    addYears(4);
  }
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
