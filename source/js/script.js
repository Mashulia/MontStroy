var nav = document.querySelector(".nav");
var toggle = document.querySelector(".header__toggle");

toggle.addEventListener("click", function () {
    nav.classList.toggle("nav--show");
});
