import { professionArr } from "./classes/professions.js";
import { addProgress } from "./progress.js";
import { hideProfessionSlider } from "./site-finalization.js";

const profHeaders = document.querySelectorAll('.profession-header');
const backBtnArrow = document.querySelector('.back-btn-media') as HTMLDivElement;
const profButtons = document.querySelectorAll('.prof-btn');
const profBoxHeader = document.querySelector('.profession-box-header') as HTMLHeadingElement;
const profDetailHeader = document.querySelector('.prof-header-detail') as HTMLHeadingElement;
const profDots = document.querySelectorAll('.prof-dots');
const profArrows = document.querySelectorAll('.prof-arrows');

profButtons.forEach(button => {
    button.addEventListener('click', () => {
        professionArr.forEach(profession => {
            if (button.id === `${profession.id}-btn`) {
                let contentBtn = document.querySelector('.professions-content-btn') as HTMLDivElement;
                let miniatureProfText = document.querySelector('.miniature-prof-text') as HTMLHeadingElement;
                let miniatureDiv = document.querySelector('.profession-miniature') as HTMLDivElement;


                profBoxHeader.innerText = `Profession:`;
                profDetailHeader.innerText = profession.id.toUpperCase();
                contentBtn.classList.add('content-btn-choosed');

                miniatureDiv.classList.remove('profession-miniature-hidden');
                miniatureDiv.addEventListener('mouseover', () => {
                    miniatureProfText.classList.add('miniature-prof-text-active')
                    miniatureDiv.addEventListener('mouseleave', () => {
                        miniatureProfText.classList.remove('miniature-prof-text-active');
                    });
                })

                miniatureProfText.innerText = `Your Profession: 
                ${profession.id.toUpperCase()}`;


                addProgress(contentBtn);
                hideProfessionSlider();
            }            
        })
    })
})
profArrows.forEach(arrows => {
    arrows.addEventListener('click', () => {
        professionArr.forEach(profession => {            
            let textPar = document.querySelector(`.${profession.id}-text`) as HTMLParagraphElement;
            let btn = document.querySelector(`#${profession.id}-btn`) as HTMLButtonElement
            
            //grab actually arrows as an ICON not a div 
            let icon = arrows.firstElementChild as HTMLElement;

            if (arrows.id === `${profession.id}-arrows`) {
                icon.classList.toggle('arrows-icon-active');
                btn.classList.toggle('prof-btn-active');

                textPar.classList.toggle('profession-text-active');
                textPar.innerText = profession.jobDescription();

            }
        });
    })
})
profDots.forEach(dots => {
    dots.addEventListener('click', () => {
        let profDivDetails = document.querySelector('.prof-details-media') as HTMLDivElement;
        let mediaTextPar = document.querySelector('.prof-media-text') as HTMLParagraphElement;

        professionArr.forEach(profession => {
            let profMediaBtn = document.querySelector('#media-profession-btn') as HTMLButtonElement;
            let contentBtn = document.querySelector('.professions-content-btn') as HTMLDivElement;
            let miniatureProfText = document.querySelector('.miniature-prof-text') as HTMLHeadingElement;
            let miniatureDiv = document.querySelector('.profession-miniature') as HTMLDivElement;

            if (dots.id === `${profession.id}-dots`) {
                mediaTextPar.innerText = profession.jobDescription();
                profDivDetails.classList.add('media-1000-active');

                profMediaBtn.addEventListener('click', () => {
                    miniatureDiv.classList.remove('profession-miniature-hidden');
                    miniatureDiv.addEventListener('mouseover', () => {
                        miniatureProfText.classList.add('miniature-prof-text-active')
                        miniatureDiv.addEventListener('mouseleave', () => {
                            miniatureProfText.classList.remove('miniature-prof-text-active');
                        });
                    })

                    profBoxHeader.innerText = `Profession:`;
                    profDetailHeader.innerText = profession.id.toUpperCase();
                    contentBtn.classList.add('content-btn-choosed');
                    miniatureProfText.innerText = `Your Profession: ${profession.id.toUpperCase()}`;


                    addProgress(contentBtn);
                    hideProfessionSlider();
                    hideDetails();
                })
            }
        })
    })
});
const hideDetails = () => {
    let profDivDetails = document.querySelector('.prof-details-media') as HTMLDivElement;
    profDivDetails.classList.remove('media-1000-active');
}
backBtnArrow.addEventListener('click', hideDetails);