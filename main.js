let prevScrollPos = window.pageYOffset;
const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    nav.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
  }
  
  prevScrollPos = currentScrollPos;
});