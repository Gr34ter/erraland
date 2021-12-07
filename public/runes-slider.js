import { hideRuneSlider, newChampion, newsInMenu } from "./site-finalization.js";
import { darknessRuneItem, elementsRuneItem, lifeRuneItem, natureRuneItem, mindRuneItem, shadowsRuneItem } from "./classes/items.js";
import { addProgress } from "./progress.js";
var buttons = document.querySelectorAll('.rune-btn');
var runeBoxHeader = document.querySelector('.rune-box-header');
var runeSlides = document.querySelectorAll('.rune-slide');
var next = document.querySelector('#next-rune');
var prev = document.querySelector('#prev-rune');
var runes = [darknessRuneItem, lifeRuneItem, elementsRuneItem, natureRuneItem, mindRuneItem, shadowsRuneItem];
// Runes next and prev slide
var nextSlide = function () {
    var current = document.querySelector('.current-rune');
    console.log(current);
    current.classList.remove('current-rune');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current-rune');
    }
    if (current.classList.contains('last')) {
        runeSlides[0].classList.add('current-rune');
    }
};
next.addEventListener('click', nextSlide);
var prevSlide = function () {
    var _a, _b;
    var current = document.querySelector('.current-rune');
    current.classList.remove('current-rune');
    if ((_a = current.previousElementSibling) === null || _a === void 0 ? void 0 : _a.classList.contains('rune-x-toggler')) {
        runeSlides[runeSlides.length - 1].classList.add('current-rune');
    }
    else {
        (_b = current.previousElementSibling) === null || _b === void 0 ? void 0 : _b.classList.add('current-rune');
    }
};
prev.addEventListener('click', prevSlide);
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var data = button.getAttribute('data-rune');
        runes.forEach(function (rune) {
            if (rune.id === data) {
                var contentBtn = document.querySelector('.runes-content-btn');
                var runeMenuHeader = document.querySelector('.rune-name-menu');
                var runeMenuDetailsDiv = document.querySelector('.rune-bonus-details');
                var runeMenuInfoDiv = document.querySelector('.rune-info');
                runeBoxHeader.innerText = rune.heading;
                runeMenuHeader.innerText = rune.heading;
                runeMenuDetailsDiv.classList.remove('rune-bonus-details-hidden');
                runeMenuInfoDiv.classList.add('rune-info-hidden');
                contentBtn.classList.add('content-btn-choosed');
                newsInMenu();
                rune.bonusForMenu(newChampion);
                hideRuneSlider();
                addProgress(contentBtn);
            }
        });
    });
});
