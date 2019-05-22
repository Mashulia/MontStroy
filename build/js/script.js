var nav = document.querySelector('.nav');
var toggle = document.querySelector('.header__toggle');

toggle.addEventListener('click', function() {
  if (nav.classList.contains('nav--show')) {
    nav.classList.remove('nav--show');
    nav.classList.add('nav--hidden');
  } else {
    nav.classList.remove('nav--hidden');
    nav.classList.add('nav--show');
  }
});
