import { professionArr } from "./classes/professions.js";
import { addProgress } from "./progress.js";
import { hideProfessionSlider } from "./site-finalization.js";
var profHeaders = document.querySelectorAll('.profession-header');
var backBtnArrow = document.querySelector('.back-btn-media');
var profButtons = document.querySelectorAll('.prof-btn');
var profBoxHeader = document.querySelector('.profession-box-header');
var profDetailHeader = document.querySelector('.prof-header-detail');
var profDots = document.querySelectorAll('.prof-dots');
var profArrows = document.querySelectorAll('.prof-arrows');
profButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        professionArr.forEach(function (profession) {
            if (button.id === profession.id + "-btn") {
                var contentBtn = document.querySelector('.professions-content-btn');
                var miniatureProfText_1 = document.querySelector('.miniature-prof-text');
                var miniatureDiv_1 = document.querySelector('.profession-miniature');
                profBoxHeader.innerText = "Profession:";
                profDetailHeader.innerText = profession.id.toUpperCase();
                contentBtn.classList.add('content-btn-choosed');
                miniatureDiv_1.classList.remove('profession-miniature-hidden');
                miniatureDiv_1.addEventListener('mouseover', function () {
                    miniatureProfText_1.classList.add('miniature-prof-text-active');
                    miniatureDiv_1.addEventListener('mouseleave', function () {
                        miniatureProfText_1.classList.remove('miniature-prof-text-active');
                    });
                });
                miniatureProfText_1.innerText = "Your Profession: \n                " + profession.id.toUpperCase();
                addProgress(contentBtn);
                hideProfessionSlider();
            }
        });
    });
});
profArrows.forEach(function (arrows) {
    arrows.addEventListener('click', function () {
        professionArr.forEach(function (profession) {
            var textPar = document.querySelector("." + profession.id + "-text");
            var btn = document.querySelector("#" + profession.id + "-btn");
            //grab actually arrows as an ICON not a div 
            var icon = arrows.firstElementChild;
            if (arrows.id === profession.id + "-arrows") {
                icon.classList.toggle('arrows-icon-active');
                btn.classList.toggle('prof-btn-active');
                textPar.classList.toggle('profession-text-active');
                textPar.innerText = profession.jobDescription();
            }
        });
    });
});
profDots.forEach(function (dots) {
    dots.addEventListener('click', function () {
        var profDivDetails = document.querySelector('.prof-details-media');
        var mediaTextPar = document.querySelector('.prof-media-text');
        professionArr.forEach(function (profession) {
            var profMediaBtn = document.querySelector('#media-profession-btn');
            var contentBtn = document.querySelector('.professions-content-btn');
            var miniatureProfText = document.querySelector('.miniature-prof-text');
            var miniatureDiv = document.querySelector('.profession-miniature');
            if (dots.id === profession.id + "-dots") {
                mediaTextPar.innerText = profession.jobDescription();
                profDivDetails.classList.add('media-1000-active');
                profMediaBtn.addEventListener('click', function () {
                    miniatureDiv.classList.remove('profession-miniature-hidden');
                    miniatureDiv.addEventListener('mouseover', function () {
                        miniatureProfText.classList.add('miniature-prof-text-active');
                        miniatureDiv.addEventListener('mouseleave', function () {
                            miniatureProfText.classList.remove('miniature-prof-text-active');
                        });
                    });
                    profBoxHeader.innerText = "Profession:";
                    profDetailHeader.innerText = profession.id.toUpperCase();
                    contentBtn.classList.add('content-btn-choosed');
                    miniatureProfText.innerText = "Your Profession: " + profession.id.toUpperCase();
                    addProgress(contentBtn);
                    hideProfessionSlider();
                    hideDetails();
                });
            }
        });
    });
});
var hideDetails = function () {
    var profDivDetails = document.querySelector('.prof-details-media');
    profDivDetails.classList.remove('media-1000-active');
};
backBtnArrow.addEventListener('click', hideDetails);
