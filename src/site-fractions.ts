import { Assasin, Illusionist, Knight, Necromacy, Ranger, Spiritmaster } from "./classes/fractions.js";

const spiritmasterDefault = new Spiritmaster('', 5, 3, 3, 10, 4, 3);
const knightDefault = new Knight('', 10, 2, 8, 3, 3, 3);
const rangerDefault = new Ranger('', 5, 5, 4, 4, 8, 7);
const assasinDefault = new Assasin('', 8, 8, 4, 3, 4, 4);
const necromancyDefault = new Necromacy('', 5, 3, 3, 10, 4, 3);
const illusionistDefault = new Illusionist('', 7, 4, 4, 5, 3, 5);
const fractionArr: any[] = [];
fractionArr.push(spiritmasterDefault, knightDefault, rangerDefault, assasinDefault, necromancyDefault, illusionistDefault);

// const fractionArr: Array<Spiritmaster | Knight | Ranger| Assasin |Necromacy| Illusionist>= [
//     new Spiritmaster('', 5, 3, 3, 10, 4, 3), 
//     new Knight('', 10, 2, 8, 3, 3, 3),
//     new Ranger('', 5, 5, 4, 4, 8, 7),
//     new Assasin('', 8, 8, 4, 3, 4, 4),
//     new Necromacy('', 5, 3, 3, 10, 4, 3),
//     new Illusionist('', 7, 4, 4, 5, 3, 5)
// ]

const fractions = document.querySelectorAll('.fraction');
const championAttributes = document.querySelector('.champion-attributes') as HTMLDivElement;
const championFrame = document.querySelector('.champion') as HTMLDivElement;
const pointsLeftPar = document.querySelector('.points-left-value') as HTMLParagraphElement;

//Sliders and inputs
const strengthSlider = document.getElementById('strength') as HTMLInputElement;
const agilitySlider = document.getElementById('agility') as HTMLInputElement;
const vitalitySlider = document.getElementById('vitality') as HTMLInputElement;
const intelligenceSlider = document.getElementById('intelligence') as HTMLInputElement;
const awarnessSlider = document.getElementById('awarness') as HTMLInputElement;
const charismaSlider = document.getElementById('charisma') as HTMLInputElement;
const nameInput = document.querySelector('#name') as HTMLInputElement;
const slidersArr: HTMLInputElement[] = [];
slidersArr.push(strengthSlider, agilitySlider, vitalitySlider, intelligenceSlider, awarnessSlider);

//attributes and fractions description 
const attrDescriptionContainer = document.querySelector('.attribute-description-container') as HTMLDivElement;
const attrDescriptionMark = document.querySelectorAll('.attribute-description-mark');
const attrDescription = document.querySelector('.attribute-text') as HTMLParagraphElement;
const fractionText = document.querySelector('.fraction-description') as HTMLParagraphElement;

// outputs
const outputValues = document.querySelectorAll('.attribute-value');
const maxValues = document.querySelectorAll('.max-value');

// buttons
const buttonsAttrUP = document.querySelectorAll('.button-attrup') ;
const buttonsAttrDown = document.querySelectorAll('.button-attrdown') ;
const submitBtn = document.querySelector('#submit') as HTMLButtonElement;
const xButtonForm = document.querySelector('.x-toggler') as HTMLDivElement;
const xButtonAttr = document.querySelector('.attribute-x-toggler') as HTMLDivElement;

let fractionPoints = 0;
const maxFractionPoints = 75;

fractions.forEach(fraction => {
    fraction.addEventListener('click', (e:Event) =>{
        fractionPoints = 10;
        submitBtn.setAttribute('disabled', 'true');
        let actualFraction = fraction.id;

        buttonsAttrDown.forEach(buttonDown => {
            buttonDown.setAttribute('disabled', 'true');
        });
        buttonsAttrUP.forEach(buttonUp => {
            buttonUp.removeAttribute('disabled');
        })

        
        fractionSetup(actualFraction);
    })
});

const fractionSetup = (fraction: string) => {
    let fractionHeaderImage = document.getElementById('fraction-header-image') as HTMLImageElement; 
    let fractionNameHeader = document.querySelector('.header-fraction-name') as HTMLDivElement;
    championFrame.classList.add('show-form');
    
    fractionArr.forEach(currentFraction => {
        if (currentFraction.fractionID.toLowerCase() === `${fraction}`) {
            strengthSlider.min = currentFraction.strength.toString();
            strengthSlider.value = currentFraction.strength.toString();
            vitalitySlider.min = currentFraction.vitality.toString();
            vitalitySlider.value = currentFraction.vitality.toString();
            agilitySlider.min = currentFraction.agility.toString();
            agilitySlider.value = currentFraction.agility.toString();
            intelligenceSlider.min = currentFraction.intelligence.toString();
            intelligenceSlider.value = currentFraction.intelligence.toString();
            awarnessSlider.min = currentFraction.awarness.toString();
            awarnessSlider.value = currentFraction.awarness.toString();
            charismaSlider.min = currentFraction.charisma.toString();
            charismaSlider.value = currentFraction.charisma.toString();                      
        } 
    });
    
    fractionNameHeader.innerText = `${fraction}`;
    fractionText.innerHTML= spiritmasterDefault.fractionText(`${fraction}`)!;
    fractionHeaderImage.src = `fractions_img/prof/${fraction}-focused.png`;
    fractionHeaderImage.classList.add('fraction-header-image'); 
    pointsLeftPar.innerText = fractionPoints.toString();

    outputValues.forEach(output => {
        let sliderSplited = output.id.split('-');
        let slider = sliderSplited[0];
        let input = document.querySelector(`#${slider}`) as HTMLInputElement
        
        output.innerHTML = `${input.value}`

        // could not use output.style so i had to create new variable as HTML Paragraph Element :( it worked tho...
        let otp = output as HTMLParagraphElement;
        otp.style.color = 'white';
    });
    maxValues.forEach(value => {
        value.innerHTML = `max : ${maxFractionPoints.toString()}`;
    });
    slidersArr.forEach(slider => {
        slider.max = maxFractionPoints.toString();
    });
}

// X-Buttons
xButtonForm.addEventListener('click' , () => {
    championFrame.classList.remove('show-form');
    if (attrDescriptionContainer.classList.contains('show-attr-container')) {
        attrDescriptionContainer.classList.remove('show-attr-container');
    }
});
xButtonAttr.addEventListener('click', () => attrDescriptionContainer.classList.remove('show-attr-container'))

//BUTTONS UP AND DOWN CLICKS
buttonsAttrUP.forEach(buttonUp => {
    buttonUp.addEventListener('click', (e:Event) => {  
        e.preventDefault() 
        fractionPoints = fractionPoints -1;
        pointsLeftPar.innerText = `${fractionPoints}`

        // setting a new value for input (setting connection with button > input)
        let actualInput = buttonUp.previousElementSibling as HTMLInputElement;
        let actualID = actualInput.id;
        let input = document.getElementById(`${actualID}`) as HTMLInputElement;
        
        let actualValue = parseInt(input.value);
        actualValue = actualValue + 1;
        input.value = actualValue.toString();
        
        // removing disable from opposite button on click on ADD points button
        let oppositeButtons = document.querySelectorAll(`[data-buttonname='${actualID}-down']`);
        let oppositeButton = oppositeButtons.item(0);
        oppositeButton.removeAttribute('disabled');
        if (fractionPoints <= 0) {
            buttonsAttrUP.forEach(buttonUp => {
                buttonUp.setAttribute('disabled', 'true');
            });
            pointsLeftPar.style.color = 'red';
            submitBtn.removeAttribute('disabled');
        }
        
        let outputValue = document.querySelector(`.${actualID}-value`) as HTMLParagraphElement;
        outputValue.innerText = `${input.value}`
        if (actualInput.value !== actualInput.min) {
            outputValue.style.color = `var(--main-font-color-possitive)`;
        } 
    })
    
});

buttonsAttrDown.forEach(buttonDown => {
    buttonDown.addEventListener('click', (e: Event) => {
        e.preventDefault();
        fractionPoints = fractionPoints + 1;
        pointsLeftPar.innerText = `${fractionPoints}`;
        
        let actualInput = buttonDown.nextElementSibling as HTMLInputElement;
        let actualID = actualInput.id; 
        
        let input = document.getElementById(`${actualID}`) as HTMLInputElement;
        let actualValue = parseInt(input.value);
        actualValue = actualValue - 1;
        input.value = actualValue.toString();
   
        
        if (actualInput.value === actualInput.min) {
            buttonDown.setAttribute('disabled', 'true');
        }
        if (fractionPoints > 0) {
            buttonsAttrUP.forEach(buttonUp => {
                buttonUp.removeAttribute('disabled');
            });
            pointsLeftPar.style.color = `var(--main-font-color-possitive)`
            submitBtn.setAttribute('disabled', 'true');    
        }

        let outputValue = document.querySelector(`.${actualID}-value`) as HTMLParagraphElement;
        outputValue.innerText = `${input.value}`
        if (actualInput.value === actualInput.min) {
            outputValue.style.color = `white`;
        } 
    })
})

attrDescriptionMark.forEach(mark => {
    mark.addEventListener('click', () => {
        let element = mark.previousElementSibling as HTMLHeadingElement;
        let attrName = element.innerText.toLowerCase();

        attrDescriptionContainer .classList.add('show-attr-container');
        attrDescription.innerText = spiritmasterDefault.attributeText(attrName);
    })
});

const submit = (e:Event) => {
    // e.preventDefault();
    let champion;
    nameInput.required = true;
    let fractionName = document.querySelector('.header-fraction-name') as HTMLHeadingElement;
    
    let strength = strengthSlider.valueAsNumber;
    let agility = agilitySlider.valueAsNumber;
    let vitality = vitalitySlider.valueAsNumber;
    let intelligence = intelligenceSlider.valueAsNumber;
    let awarness = awarnessSlider.valueAsNumber;
    let charisma = charismaSlider.valueAsNumber;
    let name = nameInput.value;
    let fraction = fractionName.innerText.toLowerCase();
    switch (fraction) {
        case 'spiritmaster':
            let spiritmaster = new Spiritmaster(name, strength, agility, vitality, intelligence, awarness, charisma);
            champion = spiritmaster;
            console.log(champion);
            break;
        case 'knight':
            let knight = new Knight(name, strength, agility, vitality, intelligence, awarness, charisma);
            champion = knight;

            console.log(champion);
            break;
        case 'ranger': 
            let ranger = new Ranger (name, strength, agility, vitality, intelligence, awarness, charisma);
            champion = ranger;

            console.log(champion);
            break;
        case 'assasin':
            let assasin = new Assasin(name, strength, agility, vitality, intelligence, awarness, charisma); 
            champion = assasin;

            console.log(champion);
            break;
        case 'necromancy':
            let necromancy = new Necromacy(name, strength, agility, vitality, intelligence, awarness, charisma); 
            champion = necromancy;

            console.log(champion);
            break;
        case 'illusionist':
            let illusionist = new Illusionist(name, strength, agility, vitality, intelligence, awarness, charisma); 
            champion = illusionist;

            console.log(champion);
            break;
        default:
            break;        
    };
    
    localStorage.setItem('Champion',  JSON.stringify(champion));
}
submitBtn.addEventListener('click', submit);