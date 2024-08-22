// Get references to form elements
const form = document.getElementById('myForm');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const DOB = document.getElementById('dob');
const Phone = document.getElementById('phone');
const Address = document.getElementById('address');
const Email = document.getElementById('email');
const Linkedin = document.getElementById('website1');
const GitHub = document.getElementById('website2');
const Leetcode = document.getElementById('website3');
const About = document.getElementById('about');


// Load saved form data from localStorage when the page loads
window.onload = function () {
    const savedfirstName = localStorage.getItem('fname');
    const savedlastName = localStorage.getItem('lname');
    const savedDOB = localStorage.getItem('dob');
    const savedPhone = localStorage.getItem('phone');
    const savedAddress = localStorage.getItem('address');
    const savedEmail = localStorage.getItem('email');
    const savedLinkedin = localStorage.getItem('website1');
    const savedGitHub = localStorage.getItem('website2');
    const savedLeetcode = localStorage.getItem('website3');
    const savedAbout = localStorage.getItem('about');


    if (savedfirstName) {
        firstName.value = savedfirstName;
    }
    if (savedlastName) {
        lastName.value = savedlastName;
    }
    if (savedDOB) {
        DOB.value = savedDOB;
    }
    if (savedPhone) {
        Phone.value = savedPhone;
    }
    if (savedAddress) {
        Address.value = savedAddress;
    }
    if (savedEmail) {
        Email.value = savedEmail;
    }
    if (savedLinkedin) {
        Linkedin.value = savedLinkedin;
    }
    if (savedGitHub) {
        GitHub.value = savedGitHub;
    }
    if (savedLeetcode) {
        Leetcode.value = savedLeetcode;
    }
    if (savedAbout) {
        About.value = savedAbout;
    }

};

// Save form data to localStorage when input changes
form.addEventListener('input', function (event) {
    localStorage.setItem('fname', firstName.value);
    localStorage.setItem('lname', lastName.value);
    localStorage.setItem('dob', DOB.value);
    localStorage.setItem('phone', Phone.value);
    localStorage.setItem('address', Address.value);
    localStorage.setItem('email', Email.value);
    localStorage.setItem('website1', Linkedin.value);
    localStorage.setItem('website2', GitHub.value);
    localStorage.setItem('website3', Leetcode.value);
    localStorage.setItem('about', About.value);

});

// Optionally, you can clear the form data from localStorage on submit
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    alert('Form submitted and localStorage cleared!');
    // Optionally, you can also clear the form fields
    form.reset();
});


