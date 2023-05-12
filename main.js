let prevScrollPos = window.pageYOffset;
const nav = document.getElementById('nav');
let submit = document.getElementById('submit');

submit.addEventListener('click', result);
window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    nav.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
  }
  
  prevScrollPos = currentScrollPos;
});

function result() {
  alert('Email sent! Thank you for reaching out :)');
  location.reload();
}