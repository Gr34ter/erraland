import { orbArr } from "./classes/items.js";
import { addProgress } from "./progress.js";
import { hideOrbSlider, newChampion, newsInMenu } from "./site-finalization.js";
var orbBoxHeader = document.querySelector('.orb-box-header');
var orbButtons = document.querySelectorAll('.orb-btn');
orbButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        orbArr.forEach(function (orb) {
            if (button.id === orb.id + "-btn") {
                var contentBtn = document.querySelector('.orb-content-btn');
                var orbBonusMenuHeader = document.querySelector(".orb-bonus-text-menu");
                var orbNameHeaderMenu = document.querySelector('.orb-name-menu');
                var orbInfoMenuDiv = document.querySelector('.orb-info');
                var orbDetailsMenuDiv = document.querySelector('.orb-bonus-details');
                orbBoxHeader.innerText = orb.heading;
                orbBonusMenuHeader.innerText = orb.bonusText;
                orbNameHeaderMenu.innerText = orb.heading;
                orbInfoMenuDiv.classList.add('orb-info-hidden');
                orbDetailsMenuDiv.classList.remove('orb-bonus-details-hidden');
                contentBtn.classList.add('content-btn-choosed');
                newChampion.items.orb = orb.heading;
                addProgress(contentBtn);
                newsInMenu();
                hideOrbSlider();
            }
        });
    });
});
// const orbButtons = document.querySelectorAll('.orb-btn');
// const orbSlides = document.querySelectorAll('.orb-slide');
// const orbNext = document.querySelector('#next-orb') as HTMLButtonElement;
// const orbPrev = document.querySelector('#prev-orb') as HTMLButtonElement;
// // ORBS next and prev slide
// const orbNextSlide = () => {
//     const current = document.querySelector('.current-orb') as HTMLDivElement;
//     console.log(current);
//     current.classList.remove('current-orb');
//     if (current.nextElementSibling) {
//         current.nextElementSibling.classList.add('current-orb');
//     }
//     if (current.classList.contains('last')) {
//         orbSlides[0].classList.add('current-orb');
//     }
// }
// orbNext.addEventListener('click', orbNextSlide);
// const orbPrevSlide = () => {
//     const current = document.querySelector('.current-orb') as HTMLDivElement;
//     current.classList.remove('current-orb');
//     if (current.previousElementSibling?.classList.contains('orb-x-toggler')) {
//         orbSlides[orbSlides.length - 1].classList.add('current-orb');
//     } else {
//         current.previousElementSibling?.classList.add('current-orb');
//     }
// }
// orbPrev.addEventListener('click', orbPrevSlide);
