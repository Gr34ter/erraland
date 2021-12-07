"use strict";
var burgerBtn = document.querySelector('.burger-container');
var burgerMenu = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click', function () {
    console.log('hi');
    burgerMenu.classList.toggle('burger-menu-active');
    burgerBtn.classList.toggle('burger-hide');
});
