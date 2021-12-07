import { traitsArr } from "./classes/traits-class.js";
import { addProgress } from "./progress.js";
import { hideTraitSlider, newChampion, newsInMenu } from "./site-finalization.js";
var traitBoxHeader = document.querySelector('.trait-box-header');
var traitButtons = document.querySelectorAll('.trait-btn');
var traitDots = document.querySelectorAll('.trait-dots');
var backBtn = document.querySelector('.back-btn-trait-media');
var traitDetailsDiv = document.querySelector('.trait-details');
var traitInfoDiv = document.querySelector('.trait-info');
var contentBtn = document.querySelector('.trait-content-btn');
var traitHeaderSentence = document.querySelector('#trait-sentence');
var traitSentenceMenu = document.querySelector('.trait-sentence-menu');
var traitNameMenu = document.querySelector('.trait-name-menu');
traitButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        traitsArr.forEach(function (trait) {
            if (button.id === trait.id + "-apply-btn") {
                traitSentenceMenu.innerText = trait.sentence;
                traitHeaderSentence.innerText = trait.sentence;
                traitNameMenu.innerText = trait.heading;
                traitBoxHeader.innerText = trait.heading;
                trait.addTrait(newChampion);
                traitDetailsDiv.classList.remove('trait-details-hidden');
                traitInfoDiv.classList.add('trait-info-hidden');
                contentBtn.classList.add('content-btn-choosed');
                newsInMenu();
                addProgress(contentBtn);
                hideTraitSlider();
            }
        });
    });
});
traitDots.forEach(function (dots) {
    dots.addEventListener('click', function () {
        traitsArr.forEach(function (trait) {
            var container = document.querySelector('.trait-details-media');
            var text = document.querySelector('.trait-text-media');
            var mediaApplyBtn = document.querySelector('#apply-trait-btn-media');
            console.log(dots.id);
            if (dots.id === trait.id + "-dots") {
                console.log('yay');
                text.innerText = trait.text();
                container.classList.add('show-trait-details-media');
                mediaApplyBtn.addEventListener('click', function () {
                    traitSentenceMenu.innerText = trait.sentence;
                    traitHeaderSentence.innerText = trait.sentence;
                    traitNameMenu.innerText = trait.heading;
                    traitBoxHeader.innerText = trait.heading;
                    trait.addTrait(newChampion);
                    traitDetailsDiv.classList.remove('trait-details-hidden');
                    traitInfoDiv.classList.add('trait-info-hidden');
                    contentBtn.classList.add('content-btn-choosed');
                    newsInMenu();
                    addProgress(contentBtn);
                    hideDetails();
                    hideTraitSlider();
                });
            }
        });
    });
});
var hideDetails = function () {
    var _a;
    console.log('close');
    var container = (_a = document.querySelector('.trait-details-media')) === null || _a === void 0 ? void 0 : _a.classList.remove('show-trait-details-media');
};
backBtn === null || backBtn === void 0 ? void 0 : backBtn.addEventListener('click', hideDetails);
