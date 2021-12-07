import { Assasin, Illusionist, Knight, Necromacy, Ranger, Spiritmaster } from "./classes/fractions.js";
var spiritmasterDefault = new Spiritmaster('', 5, 3, 3, 10, 4, 3);
var knightDefault = new Knight('', 10, 2, 8, 3, 3, 3);
var rangerDefault = new Ranger('', 5, 5, 4, 4, 8, 7);
var assasinDefault = new Assasin('', 8, 8, 4, 3, 4, 4);
var necromancyDefault = new Necromacy('', 5, 3, 3, 10, 4, 3);
var illusionistDefault = new Illusionist('', 7, 4, 4, 5, 3, 5);
var fractionArr = [];
fractionArr.push(spiritmasterDefault, knightDefault, rangerDefault, assasinDefault, necromancyDefault, illusionistDefault);
// const fractionArr: Array<Spiritmaster | Knight | Ranger| Assasin |Necromacy| Illusionist>= [
//     new Spiritmaster('', 5, 3, 3, 10, 4, 3), 
//     new Knight('', 10, 2, 8, 3, 3, 3),
//     new Ranger('', 5, 5, 4, 4, 8, 7),
//     new Assasin('', 8, 8, 4, 3, 4, 4),
//     new Necromacy('', 5, 3, 3, 10, 4, 3),
//     new Illusionist('', 7, 4, 4, 5, 3, 5)
// ]
var fractions = document.querySelectorAll('.fraction');
var championAttributes = document.querySelector('.champion-attributes');
var championFrame = document.querySelector('.champion');
var pointsLeftPar = document.querySelector('.points-left-value');
//Sliders and inputs
var strengthSlider = document.getElementById('strength');
var agilitySlider = document.getElementById('agility');
var vitalitySlider = document.getElementById('vitality');
var intelligenceSlider = document.getElementById('intelligence');
var awarnessSlider = document.getElementById('awarness');
var charismaSlider = document.getElementById('charisma');
var nameInput = document.querySelector('#name');
var slidersArr = [];
slidersArr.push(strengthSlider, agilitySlider, vitalitySlider, intelligenceSlider, awarnessSlider);
//attributes and fractions description 
var attrDescriptionContainer = document.querySelector('.attribute-description-container');
var attrDescriptionMark = document.querySelectorAll('.attribute-description-mark');
var attrDescription = document.querySelector('.attribute-text');
var fractionText = document.querySelector('.fraction-description');
// outputs
var outputValues = document.querySelectorAll('.attribute-value');
var maxValues = document.querySelectorAll('.max-value');
// buttons
var buttonsAttrUP = document.querySelectorAll('.button-attrup');
var buttonsAttrDown = document.querySelectorAll('.button-attrdown');
var submitBtn = document.querySelector('#submit');
var xButtonForm = document.querySelector('.x-toggler');
var xButtonAttr = document.querySelector('.attribute-x-toggler');
var fractionPoints = 0;
var maxFractionPoints = 75;
fractions.forEach(function (fraction) {
    fraction.addEventListener('click', function (e) {
        fractionPoints = 10;
        submitBtn.setAttribute('disabled', 'true');
        var actualFraction = fraction.id;
        buttonsAttrDown.forEach(function (buttonDown) {
            buttonDown.setAttribute('disabled', 'true');
        });
        buttonsAttrUP.forEach(function (buttonUp) {
            buttonUp.removeAttribute('disabled');
        });
        fractionSetup(actualFraction);
    });
});
var fractionSetup = function (fraction) {
    var fractionHeaderImage = document.getElementById('fraction-header-image');
    var fractionNameHeader = document.querySelector('.header-fraction-name');
    championFrame.classList.add('show-form');
    fractionArr.forEach(function (currentFraction) {
        if (currentFraction.fractionID.toLowerCase() === "" + fraction) {
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
    fractionNameHeader.innerText = "" + fraction;
    fractionText.innerHTML = spiritmasterDefault.fractionText("" + fraction);
    fractionHeaderImage.src = "fractions_img/prof/" + fraction + "-focused.png";
    fractionHeaderImage.classList.add('fraction-header-image');
    pointsLeftPar.innerText = fractionPoints.toString();
    outputValues.forEach(function (output) {
        var sliderSplited = output.id.split('-');
        var slider = sliderSplited[0];
        var input = document.querySelector("#" + slider);
        output.innerHTML = "" + input.value;
        // could not use output.style so i had to create new variable as HTML Paragraph Element :( it worked tho...
        var otp = output;
        otp.style.color = 'white';
    });
    maxValues.forEach(function (value) {
        value.innerHTML = "max : " + maxFractionPoints.toString();
    });
    slidersArr.forEach(function (slider) {
        slider.max = maxFractionPoints.toString();
    });
};
// X-Buttons
xButtonForm.addEventListener('click', function () {
    championFrame.classList.remove('show-form');
    if (attrDescriptionContainer.classList.contains('show-attr-container')) {
        attrDescriptionContainer.classList.remove('show-attr-container');
    }
});
xButtonAttr.addEventListener('click', function () { return attrDescriptionContainer.classList.remove('show-attr-container'); });
//BUTTONS UP AND DOWN CLICKS
buttonsAttrUP.forEach(function (buttonUp) {
    buttonUp.addEventListener('click', function (e) {
        e.preventDefault();
        fractionPoints = fractionPoints - 1;
        pointsLeftPar.innerText = "" + fractionPoints;
        // setting a new value for input (setting connection with button > input)
        var actualInput = buttonUp.previousElementSibling;
        var actualID = actualInput.id;
        var input = document.getElementById("" + actualID);
        var actualValue = parseInt(input.value);
        actualValue = actualValue + 1;
        input.value = actualValue.toString();
        // removing disable from opposite button on click on ADD points button
        var oppositeButtons = document.querySelectorAll("[data-buttonname='" + actualID + "-down']");
        var oppositeButton = oppositeButtons.item(0);
        oppositeButton.removeAttribute('disabled');
        if (fractionPoints <= 0) {
            buttonsAttrUP.forEach(function (buttonUp) {
                buttonUp.setAttribute('disabled', 'true');
            });
            pointsLeftPar.style.color = 'red';
            submitBtn.removeAttribute('disabled');
        }
        var outputValue = document.querySelector("." + actualID + "-value");
        outputValue.innerText = "" + input.value;
        if (actualInput.value !== actualInput.min) {
            outputValue.style.color = "var(--main-font-color-possitive)";
        }
    });
});
buttonsAttrDown.forEach(function (buttonDown) {
    buttonDown.addEventListener('click', function (e) {
        e.preventDefault();
        fractionPoints = fractionPoints + 1;
        pointsLeftPar.innerText = "" + fractionPoints;
        var actualInput = buttonDown.nextElementSibling;
        var actualID = actualInput.id;
        var input = document.getElementById("" + actualID);
        var actualValue = parseInt(input.value);
        actualValue = actualValue - 1;
        input.value = actualValue.toString();
        if (actualInput.value === actualInput.min) {
            buttonDown.setAttribute('disabled', 'true');
        }
        if (fractionPoints > 0) {
            buttonsAttrUP.forEach(function (buttonUp) {
                buttonUp.removeAttribute('disabled');
            });
            pointsLeftPar.style.color = "var(--main-font-color-possitive)";
            submitBtn.setAttribute('disabled', 'true');
        }
        var outputValue = document.querySelector("." + actualID + "-value");
        outputValue.innerText = "" + input.value;
        if (actualInput.value === actualInput.min) {
            outputValue.style.color = "white";
        }
    });
});
attrDescriptionMark.forEach(function (mark) {
    mark.addEventListener('click', function () {
        var element = mark.previousElementSibling;
        var attrName = element.innerText.toLowerCase();
        attrDescriptionContainer.classList.add('show-attr-container');
        attrDescription.innerText = spiritmasterDefault.attributeText(attrName);
    });
});
var submit = function (e) {
    // e.preventDefault();
    var champion;
    nameInput.required = true;
    var fractionName = document.querySelector('.header-fraction-name');
    var strength = strengthSlider.valueAsNumber;
    var agility = agilitySlider.valueAsNumber;
    var vitality = vitalitySlider.valueAsNumber;
    var intelligence = intelligenceSlider.valueAsNumber;
    var awarness = awarnessSlider.valueAsNumber;
    var charisma = charismaSlider.valueAsNumber;
    var name = nameInput.value;
    var fraction = fractionName.innerText.toLowerCase();
    switch (fraction) {
        case 'spiritmaster':
            var spiritmaster = new Spiritmaster(name, strength, agility, vitality, intelligence, awarness, charisma);
            champion = spiritmaster;
            console.log(champion);
            break;
        case 'knight':
            var knight = new Knight(name, strength, agility, vitality, intelligence, awarness, charisma);
            champion = knight;
            console.log(champion);
            break;
        case 'ranger':
            var ranger = new Ranger(name, strength, agility, vitality, intelligence, awarness, charisma);
            champion = ranger;
            console.log(champion);
            break;
        case 'assasin':
            var assasin = new Assasin(name, strength, agility, vitality, intelligence, awarness, charisma);
            champion = assasin;
            console.log(champion);
            break;
        case 'necromancy':
            var necromancy = new Necromacy(name, strength, agility, vitality, intelligence, awarness, charisma);
            champion = necromancy;
            console.log(champion);
            break;
        case 'illusionist':
            var illusionist = new Illusionist(name, strength, agility, vitality, intelligence, awarness, charisma);
            champion = illusionist;
            console.log(champion);
            break;
        default:
            break;
    }
    ;
    localStorage.setItem('Champion', JSON.stringify(champion));
};
submitBtn.addEventListener('click', submit);
