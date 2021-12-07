import { Assasin, Illusionist, Knight, Necromacy, Ranger, Spiritmaster } from "./classes/fractions.js";
import { lifeRuneItem, darknessRuneItem, mindRuneItem, shadowsRuneItem, elementsRuneItem, natureRuneItem, RuneOfLife, RuneofElements, RuneOfNature, RuneOfShadows, RuneOfDarkness, RuneOfMentality } from "./classes/items.js";
import { professionArr} from "./classes/professions.js";
import { FractionType } from "./classes/fractions.js";
import { traitsArr } from "./classes/traits-class.js";
import { orbArr } from "./classes/items.js"

let original = localStorage.getItem('Champion')!;
let champion: FractionType = JSON.parse(original);

type Runes = (RuneOfLife | RuneofElements | RuneOfNature | RuneOfShadows | RuneOfDarkness | RuneOfMentality);
const runesArr: Runes[] = [lifeRuneItem, darknessRuneItem, mindRuneItem, shadowsRuneItem, elementsRuneItem, natureRuneItem];

export const fraction = champion.fractionID;
//header
const championNameOutput = document.querySelector('.champion-name') as HTMLHeadingElement;
const championFractionOutput = document.querySelector('.champion-fraction') as HTMLHeadingElement;
const toggleArrows = document.querySelector('#toggle-menu') as HTMLDivElement;
const menuDiv = document.querySelector('#champion-menu') as HTMLDivElement;

// button-div, menu-buttons
const btnRunesShowUp = document.querySelector('.runes-content-btn') as HTMLDivElement;
const btnProfessionsShowUp = document.querySelector('.professions-content-btn') as HTMLDivElement;
const btnOrbShowUp = document.querySelector('.orb-content-btn') as HTMLDivElement;
const btnTraitShowUp = document.querySelector('.trait-content-btn') as HTMLDivElement;
const btnTraitInfo = document.querySelector('.trait-info-btn') as HTMLButtonElement;
const btnRuneInfo = document.querySelector('.rune-info-btn') as HTMLButtonElement;
const btnOrbInfo = document.querySelector('.orb-info-btn') as HTMLButtonElement;
const showStatsBtn = document.querySelector('.show-stats-media-btn') as HTMLButtonElement;
const hideStatsBtn = document.querySelector('.stats-back-btn') as HTMLButtonElement;
//sliders and slider content
const runeSlider = document.querySelector('.rune-slider') as HTMLDivElement;
const professionSlider = document.querySelector('.profession-slider') as HTMLDivElement;
const orbSlider = document.querySelector('.orb-slider') as HTMLDivElement;
const traitSlider = document.querySelector('.trait-slider') as HTMLDivElement;
// x-buttons
const runexToggler = document.querySelector('.rune-x-toggler') as HTMLDivElement;
const professionxToggler = document.querySelector('.profession-x-toggler') as HTMLDivElement;
const orbxToggler = document.querySelector('.orb-x-toggler') as HTMLDivElement;
const traitxToggler = document.querySelector('.trait-x-toggler') as HTMLDivElement;
console.log(fraction);

// ON LOADS
const createChampion = (fraction:string) =>  {
    switch (fraction) {
        case 'spiritmaster':
            let spiritmaster = new Spiritmaster(champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence, champion.awarness, champion.charisma);
            champion = spiritmaster;
            break;
        case 'knight':
            let knight = new Knight(champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence, champion.awarness, champion.charisma);
            champion = knight;
            break;
        case 'ranger': 
            let ranger = new Ranger (champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence, champion.awarness, champion.charisma);
            champion = ranger;
            break;
        case 'assasin':
            let assasin = new Assasin(champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence,champion.awarness, champion.charisma); 
            champion = assasin;
            break;
        case 'necromancy':
            let necromancy = new Necromacy(champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence, champion.awarness, champion.charisma); 
            champion = necromancy;
            break;
        case 'illusionist':
            let illusionist = new Illusionist(champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence, champion.awarness, champion.charisma); 
            champion = illusionist;
            break;
        default:
            break;     
    };
}
createChampion(fraction);
export let newChampion = champion!;

const setChampionDetails = () => {
    let attributesSpecialDiv = document.querySelector('.attributes-special') as HTMLDivElement;
    let attributesBasicDiv = document.querySelector('.attributes-basic') as HTMLDivElement;

    let hpDiv = document.querySelector('.hp') as HTMLDivElement;
    let manaDiv = document.querySelector('.mana') as HTMLDivElement;
    hpDiv.innerText = `HP: ${champion.healthPoints}`;
    manaDiv.innerText = `MANA: ${champion.mana}`;

    // basic attributes of fraction
    let attrBassicArr = ['strength', 'vitality', 'agility', 'intelligence', 'awarness', 'charisma'];
    attrBassicArr.forEach(attribute => {
        let basicDiv = document.createElement('div') as HTMLDivElement;
        let basicAttrName = document.createElement('h5') as HTMLHeadingElement;
        let basicAttrValue = document.createElement('h4') as HTMLHeadingElement;

        basicDiv.classList.add('basic-attribute');
        basicAttrName.classList.add(`${attribute}-attribute`, 'basic-attribute-name');
        basicAttrValue.classList.add(`${attribute}-value`, 'basic-attribute-value');
        attributesBasicDiv.appendChild(basicDiv);
        basicDiv.appendChild(basicAttrName);
        basicDiv.appendChild(basicAttrValue);

        for (let [key, value] of Object.entries(champion)) {
            if (key === `${attribute}`) {
                basicAttrName.innerText = `${key}`;
                basicAttrValue.innerText = value;
            }
        }
            
    })
    // //special attributes of fraction
    let arr = champion.keyValArr();
    for (let [key, value] of Object.entries(arr)) {

        // !!! to get rid of spaces
        let newKey = key.replace(/\s+/g, '');
        let specialDiv = document.createElement('div') as HTMLDivElement;
        let specAttrKey = document.createElement('h5') as HTMLHeadingElement;
        let specAttrValue = document.createElement('h4') as HTMLHeadingElement;

        specialDiv.classList.add('spec-attribute');
        specAttrKey.classList.add(`${newKey}-attribute`, 'spec-attribute-name');
        specAttrKey.classList.add(`${value}-value`, 'spec-attribute-value');
        specAttrKey.innerText = `${key}`;
        specAttrValue.innerText = `${Math.round(value)}`;
        attributesSpecialDiv.appendChild(specialDiv);
        specialDiv.appendChild(specAttrKey);
        specialDiv.appendChild(specAttrValue);
    }
}
const runeTexts = () => {
    runesArr.forEach(rune => {
        let runeTextPar = document.querySelector(`.${rune.id}-text`) as HTMLParagraphElement;
        runeTextPar.innerText = rune.showText();
    })
}
const traitTexts = () => {
    traitsArr.forEach(trait => {
        let traitText = document.querySelector(`.${trait.id}-text`) as HTMLParagraphElement;
        traitText. innerText = trait.text();
    });

}
const professionTexts = () => {
    professionArr.forEach(profession => {
        let profTextPar = document.querySelector(`.${profession.id}-text`) as HTMLParagraphElement;
        profTextPar.innerText = profession.jobDescription();
    })
}
const loadDetails = () => {    
    championNameOutput.innerText = newChampion.championName;
    championFractionOutput.innerText = newChampion.fractionID;    
    setChampionDetails();
    runeTexts();
    traitTexts();
    professionTexts();
}
loadDetails();
// End of ON LOADS^^^

// Showing menu with arrows
const showMenu = () => {
    let arrows = document.querySelector('.menu-arrows') as HTMLDivElement;
    let menuDiv = document.querySelector('#champion-menu') as HTMLDivElement;
    
    if (toggleArrows.classList.contains('champion-portrait-news')) {        
        toggleArrows.classList.remove('champion-portrait-news');
    }
    arrows.classList.toggle('arrows-icon-active');
    arrows.classList.toggle('arrows-icon-inactive');
    menuDiv.classList.toggle('champion-details-active');
}
toggleArrows.addEventListener('click', showMenu);
export const newsInMenu = () => {
    let portraitDiv = document.querySelector('.champion-portrait') as HTMLDivElement;
    portraitDiv.classList.add('champion-portrait-news');
}
// SHOWING SLIDERS
const showRunes = () => {
    runeSlider.classList.add('show-slider')
    if (runeSlider.classList.contains('hide-slider')) {
        runeSlider.classList.replace('hide-slider','show-slider');
    }
    runexToggler.classList.add('show-toggler');
    if (runexToggler.classList.contains('hide-toggler')) {
        runexToggler.classList.replace('hide-toggler','show-toggler')
    }
    if (menuDiv.classList.contains('champion-details-active')) {
        menuDiv.classList.remove('champion-details-active');
    }
}
btnRunesShowUp.addEventListener('click', showRunes);
btnRuneInfo.addEventListener('click', showRunes);

const showProfessions = ()=> {
    professionSlider.classList.add('show-slider')
    if (professionSlider.classList.contains('hide-slider')) {
        professionSlider.classList.replace('hide-slider','show-slider');
    }
    professionxToggler.classList.add('show-toggler');
    if (professionxToggler.classList.contains('hide-toggler')) {
        professionxToggler.classList.replace('hide-toggler','show-toggler')
    }
}
btnProfessionsShowUp.addEventListener('click', showProfessions);

const showOrbs = ()=> {
    let orbTextParagraphs = document.querySelectorAll('.orb-text');

    orbTextParagraphs.forEach(par => {
        console.log(par.classList);
        orbArr.forEach(orb => {
            if (par.classList[0] === `${orb.id}-text`) {
                par.innerHTML = orb.text();
                
            }
        })
        
    })

    orbSlider.classList.add('show-slider')
    setTimeout(() => {
        let orbImages = document.querySelectorAll('.orb-img');
        orbImages.forEach(image => {
            image.classList.add('img-animation');
        })
    }, 200);
    if (orbSlider.classList.contains('hide-slider')) {
        orbSlider.classList.replace('hide-slider','show-slider')
        
        

    }
    orbxToggler.classList.add('show-toggler');
    if (orbxToggler.classList.contains('hide-toggler')) {
        orbxToggler.classList.replace('hide-toggler','show-toggler')
    }
    if (menuDiv.classList.contains('champion-details-active')) {
        menuDiv.classList.remove('champion-details-active');
    }
}
btnOrbShowUp.addEventListener('click', showOrbs);
btnOrbInfo.addEventListener('click', showOrbs);

const showTraits = ()=> {
    
    traitsArr.forEach( trait => {
        let traitStatsDiv = document.querySelector(`.${trait.id}-trait-stats`) as HTMLDivElement
        traitStatsDiv.innerHTML = trait.renderStats();
    })
    traitSlider.classList.add('show-slider')
    if (traitSlider.classList.contains('hide-slider')) {
        traitSlider.classList.replace('hide-slider','show-slider');
    }
    traitxToggler.classList.add('show-toggler');
    if (traitxToggler.classList.contains('hide-toggler')) {
        traitxToggler.classList.replace('hide-toggler','show-toggler')
    }
    if (menuDiv.classList.contains('champion-details-active')) {
        menuDiv.classList.remove('champion-details-active');
    }
}
btnTraitShowUp.addEventListener('click', showTraits);
btnTraitInfo.addEventListener('click', showTraits);


// HIDING SLIDERS
export const hideRuneSlider = () => {
    runeSlider.classList.replace('show-slider', 'hide-slider'); 
    runexToggler.classList.replace('show-toggler', 'hide-toggler'); 
}
runexToggler.addEventListener('click', hideRuneSlider);

export const hideProfessionSlider = () => {
    professionSlider.classList.replace('show-slider', 'hide-slider'); 
    professionxToggler.classList.replace('show-toggler', 'hide-toggler');
    
}
professionxToggler.addEventListener('click', hideProfessionSlider);

export const hideOrbSlider = () => {
    orbSlider.classList.replace('show-slider', 'hide-slider'); 
    orbxToggler.classList.replace('show-toggler', 'hide-toggler'); 
}
orbxToggler.addEventListener('click', hideOrbSlider);

export const hideTraitSlider = () => {
    traitSlider.classList.replace('show-slider', 'hide-slider'); 
    traitxToggler.classList.replace('show-toggler', 'hide-toggler'); 
}
traitxToggler.addEventListener('click', hideTraitSlider);
// end of sliders ^^^

// media stats btn
const showStatsMedia = () => {
    let attributesContainer = document.querySelector('.attributes-container') as HTMLDivElement;
    attributesContainer.classList.add('attributes-container-media-active');
}
showStatsBtn.addEventListener('click', showStatsMedia);
const hideStatsMedia = () => {
    let attributesContainer = document.querySelector('.attributes-container') as HTMLDivElement;
    attributesContainer.classList.remove('attributes-container-media-active');
}
hideStatsBtn.addEventListener('click', hideStatsMedia);

