let prevScrollPos = window.pageYOffset;
const nav = document.getElementById('nav');
let submit = document.getElementById('submit');

submit.addEventListener('click', result);


function result() {
  alert('Email sent! Thank you for reaching out :)');
  location.reload();
}