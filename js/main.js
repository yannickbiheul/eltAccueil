AOS.init();

/* MENU BURGER */

let boutonBurger = document.querySelector('.boutonBurger');
let menuBurger = document.querySelector('.menuBurger');
let elts = document.querySelectorAll('.elt');

boutonBurger.addEventListener('click', function() {
    menuBurger.classList.toggle("menuBurgerOpen");
})

for (let i = 0; i < elts.length; i++) {
    elts[i].addEventListener('click', function() {
        menuBurger.classList.toggle("menuBurgerOpen");
    })
}