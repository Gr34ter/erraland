import {traitsArr} from "./classes/traits-class.js";
import { addProgress } from "./progress.js";
import { hideTraitSlider, newChampion, newsInMenu } from "./site-finalization.js";

const traitBoxHeader = document.querySelector('.trait-box-header') as HTMLHeadingElement;
const traitButtons = document.querySelectorAll('.trait-btn');
const traitDots = document.querySelectorAll('.trait-dots');
const backBtn = document.querySelector('.back-btn-trait-media');
const traitDetailsDiv = document.querySelector('.trait-details') as HTMLDivElement;
const traitInfoDiv = document.querySelector('.trait-info') as HTMLDivElement;
const contentBtn = document.querySelector('.trait-content-btn') as HTMLDivElement;
const traitHeaderSentence = document.querySelector('#trait-sentence') as HTMLHeadingElement;
const traitSentenceMenu = document.querySelector('.trait-sentence-menu') as HTMLDivElement;
const traitNameMenu = document.querySelector('.trait-name-menu') as HTMLHeadingElement;


traitButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        traitsArr.forEach(trait => {

            if (button.id === `${trait.id}-apply-btn`) {

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
        })
    })
})

traitDots.forEach( dots => {
    dots.addEventListener('click', () => {
        traitsArr.forEach( trait => {
            let container = document.querySelector('.trait-details-media') as HTMLDivElement;
            let text = document.querySelector('.trait-text-media') as HTMLParagraphElement;
            let mediaApplyBtn = document.querySelector('#apply-trait-btn-media') as HTMLButtonElement;

            console.log(dots.id);
            if (dots.id === `${trait.id}-dots`) {
                console.log('yay');
                
                text.innerText =  trait.text();
                container.classList.add('show-trait-details-media');

                mediaApplyBtn.addEventListener('click', () => {


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
    
                })
            }

            
        })
    })
})
const hideDetails = () => {
    console.log('close');
    
    let container = document.querySelector('.trait-details-media')?.classList.remove('show-trait-details-media');
}
backBtn?.addEventListener('click', hideDetails);