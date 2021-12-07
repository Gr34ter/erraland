import { hideRuneSlider, fraction, newChampion, newsInMenu } from "./site-finalization.js";
import { Rune } from "./interfaces/interfaces.js";
import { darknessRuneItem, elementsRuneItem, lifeRuneItem, natureRuneItem, mindRuneItem, shadowsRuneItem } from "./classes/items.js";
import { addProgress } from "./progress.js";

const buttons = document.querySelectorAll('.rune-btn');
const runeBoxHeader = document.querySelector('.rune-box-header') as HTMLHeadingElement;
const runeSlides = document.querySelectorAll('.rune-slide');
const next = document.querySelector('#next-rune') as HTMLButtonElement;
const prev = document.querySelector('#prev-rune') as HTMLButtonElement;

const runes: Rune[] = [darknessRuneItem, lifeRuneItem, elementsRuneItem, natureRuneItem, mindRuneItem, shadowsRuneItem];

// Runes next and prev slide
const nextSlide = () => {
    const current = document.querySelector('.current-rune') as HTMLDivElement;
    console.log(current);
    
    current.classList.remove('current-rune');
    
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current-rune');
    }
    if (current.classList.contains('last')) {
        runeSlides[0].classList.add('current-rune');
    }
}
next.addEventListener('click', nextSlide);

const prevSlide = () => {
    const current = document.querySelector('.current-rune') as HTMLDivElement;
    current.classList.remove('current-rune');
    if (current.previousElementSibling?.classList.contains('rune-x-toggler')) {
        runeSlides[runeSlides.length - 1].classList.add('current-rune');
        
    } else {
        current.previousElementSibling?.classList.add('current-rune');
    }
}
prev.addEventListener('click', prevSlide);


buttons.forEach(button => {
    button.addEventListener('click', (e:Event) => { 
        let data = button.getAttribute('data-rune');
              
        runes.forEach(rune => {
            if (rune.id === data){
                let contentBtn = document.querySelector('.runes-content-btn') as HTMLDivElement
                let runeMenuHeader = document.querySelector('.rune-name-menu') as HTMLHeadingElement;
                let runeMenuDetailsDiv = document.querySelector('.rune-bonus-details') as HTMLDivElement;
                let runeMenuInfoDiv = document.querySelector('.rune-info') as HTMLDivElement; 

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
        })        
    })
})



