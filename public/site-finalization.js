import { Assasin, Illusionist, Knight, Necromacy, Ranger, Spiritmaster } from "./classes/fractions.js";
import { lifeRuneItem, darknessRuneItem, mindRuneItem, shadowsRuneItem, elementsRuneItem, natureRuneItem } from "./classes/items.js";
import { professionArr } from "./classes/professions.js";
import { traitsArr } from "./classes/traits-class.js";
import { orbArr } from "./classes/items.js";
var original = localStorage.getItem('Champion');
var champion = JSON.parse(original);
var runesArr = [lifeRuneItem, darknessRuneItem, mindRuneItem, shadowsRuneItem, elementsRuneItem, natureRuneItem];
export var fraction = champion.fractionID;
//header
var championNameOutput = document.querySelector('.champion-name');
var championFractionOutput = document.querySelector('.champion-fraction');
var toggleArrows = document.querySelector('#toggle-menu');
var menuDiv = document.querySelector('#champion-menu');
// button-div, menu-buttons
var btnRunesShowUp = document.querySelector('.runes-content-btn');
var btnProfessionsShowUp = document.querySelector('.professions-content-btn');
var btnOrbShowUp = document.querySelector('.orb-content-btn');
var btnTraitShowUp = document.querySelector('.trait-content-btn');
var btnTraitInfo = document.querySelector('.trait-info-btn');
var btnRuneInfo = document.querySelector('.rune-info-btn');
var btnOrbInfo = document.querySelector('.orb-info-btn');
var showStatsBtn = document.querySelector('.show-stats-media-btn');
var hideStatsBtn = document.querySelector('.stats-back-btn');
//sliders and slider content
var runeSlider = document.querySelector('.rune-slider');
var professionSlider = document.querySelector('.profession-slider');
var orbSlider = document.querySelector('.orb-slider');
var traitSlider = document.querySelector('.trait-slider');
// x-buttons
var runexToggler = document.querySelector('.rune-x-toggler');
var professionxToggler = document.querySelector('.profession-x-toggler');
var orbxToggler = document.querySelector('.orb-x-toggler');
var traitxToggler = document.querySelector('.trait-x-toggler');
console.log(fraction);
// ON LOADS
var createChampion = function (fraction) {
    switch (fraction) {
        case 'spiritmaster':
            var spiritmaster = new Spiritmaster(champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence, champion.awarness, champion.charisma);
            champion = spiritmaster;
            break;
        case 'knight':
            var knight = new Knight(champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence, champion.awarness, champion.charisma);
            champion = knight;
            break;
        case 'ranger':
            var ranger = new Ranger(champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence, champion.awarness, champion.charisma);
            champion = ranger;
            break;
        case 'assasin':
            var assasin = new Assasin(champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence, champion.awarness, champion.charisma);
            champion = assasin;
            break;
        case 'necromancy':
            var necromancy = new Necromacy(champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence, champion.awarness, champion.charisma);
            champion = necromancy;
            break;
        case 'illusionist':
            var illusionist = new Illusionist(champion.championName, champion.strength, champion.agility, champion.vitality, champion.intelligence, champion.awarness, champion.charisma);
            champion = illusionist;
            break;
        default:
            break;
    }
    ;
};
createChampion(fraction);
export var newChampion = champion;
var setChampionDetails = function () {
    var attributesSpecialDiv = document.querySelector('.attributes-special');
    var attributesBasicDiv = document.querySelector('.attributes-basic');
    var hpDiv = document.querySelector('.hp');
    var manaDiv = document.querySelector('.mana');
    hpDiv.innerText = "HP: " + champion.healthPoints;
    manaDiv.innerText = "MANA: " + champion.mana;
    // basic attributes of fraction
    var attrBassicArr = ['strength', 'vitality', 'agility', 'intelligence', 'awarness', 'charisma'];
    attrBassicArr.forEach(function (attribute) {
        var basicDiv = document.createElement('div');
        var basicAttrName = document.createElement('h5');
        var basicAttrValue = document.createElement('h4');
        basicDiv.classList.add('basic-attribute');
        basicAttrName.classList.add(attribute + "-attribute", 'basic-attribute-name');
        basicAttrValue.classList.add(attribute + "-value", 'basic-attribute-value');
        attributesBasicDiv.appendChild(basicDiv);
        basicDiv.appendChild(basicAttrName);
        basicDiv.appendChild(basicAttrValue);
        for (var _i = 0, _a = Object.entries(champion); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key === "" + attribute) {
                basicAttrName.innerText = "" + key;
                basicAttrValue.innerText = value;
            }
        }
    });
    // //special attributes of fraction
    var arr = champion.keyValArr();
    for (var _i = 0, _a = Object.entries(arr); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        // !!! to get rid of spaces
        var newKey = key.replace(/\s+/g, '');
        var specialDiv = document.createElement('div');
        var specAttrKey = document.createElement('h5');
        var specAttrValue = document.createElement('h4');
        specialDiv.classList.add('spec-attribute');
        specAttrKey.classList.add(newKey + "-attribute", 'spec-attribute-name');
        specAttrKey.classList.add(value + "-value", 'spec-attribute-value');
        specAttrKey.innerText = "" + key;
        specAttrValue.innerText = "" + Math.round(value);
        attributesSpecialDiv.appendChild(specialDiv);
        specialDiv.appendChild(specAttrKey);
        specialDiv.appendChild(specAttrValue);
    }
};
var runeTexts = function () {
    runesArr.forEach(function (rune) {
        var runeTextPar = document.querySelector("." + rune.id + "-text");
        runeTextPar.innerText = rune.showText();
    });
};
var traitTexts = function () {
    traitsArr.forEach(function (trait) {
        var traitText = document.querySelector("." + trait.id + "-text");
        traitText.innerText = trait.text();
    });
};
var professionTexts = function () {
    professionArr.forEach(function (profession) {
        var profTextPar = document.querySelector("." + profession.id + "-text");
        profTextPar.innerText = profession.jobDescription();
    });
};
var loadDetails = function () {
    championNameOutput.innerText = newChampion.championName;
    championFractionOutput.innerText = newChampion.fractionID;
    setChampionDetails();
    runeTexts();
    traitTexts();
    professionTexts();
};
loadDetails();
// End of ON LOADS^^^
// Showing menu with arrows
var showMenu = function () {
    var arrows = document.querySelector('.menu-arrows');
    var menuDiv = document.querySelector('#champion-menu');
    if (toggleArrows.classList.contains('champion-portrait-news')) {
        toggleArrows.classList.remove('champion-portrait-news');
    }
    arrows.classList.toggle('arrows-icon-active');
    arrows.classList.toggle('arrows-icon-inactive');
    menuDiv.classList.toggle('champion-details-active');
};
toggleArrows.addEventListener('click', showMenu);
export var newsInMenu = function () {
    var portraitDiv = document.querySelector('.champion-portrait');
    portraitDiv.classList.add('champion-portrait-news');
};
// SHOWING SLIDERS
var showRunes = function () {
    runeSlider.classList.add('show-slider');
    if (runeSlider.classList.contains('hide-slider')) {
        runeSlider.classList.replace('hide-slider', 'show-slider');
    }
    runexToggler.classList.add('show-toggler');
    if (runexToggler.classList.contains('hide-toggler')) {
        runexToggler.classList.replace('hide-toggler', 'show-toggler');
    }
    if (menuDiv.classList.contains('champion-details-active')) {
        menuDiv.classList.remove('champion-details-active');
    }
};
btnRunesShowUp.addEventListener('click', showRunes);
btnRuneInfo.addEventListener('click', showRunes);
var showProfessions = function () {
    professionSlider.classList.add('show-slider');
    if (professionSlider.classList.contains('hide-slider')) {
        professionSlider.classList.replace('hide-slider', 'show-slider');
    }
    professionxToggler.classList.add('show-toggler');
    if (professionxToggler.classList.contains('hide-toggler')) {
        professionxToggler.classList.replace('hide-toggler', 'show-toggler');
    }
};
btnProfessionsShowUp.addEventListener('click', showProfessions);
var showOrbs = function () {
    var orbTextParagraphs = document.querySelectorAll('.orb-text');
    orbTextParagraphs.forEach(function (par) {
        console.log(par.classList);
        orbArr.forEach(function (orb) {
            if (par.classList[0] === orb.id + "-text") {
                par.innerHTML = orb.text();
            }
        });
    });
    orbSlider.classList.add('show-slider');
    setTimeout(function () {
        var orbImages = document.querySelectorAll('.orb-img');
        orbImages.forEach(function (image) {
            image.classList.add('img-animation');
        });
    }, 200);
    if (orbSlider.classList.contains('hide-slider')) {
        orbSlider.classList.replace('hide-slider', 'show-slider');
    }
    orbxToggler.classList.add('show-toggler');
    if (orbxToggler.classList.contains('hide-toggler')) {
        orbxToggler.classList.replace('hide-toggler', 'show-toggler');
    }
    if (menuDiv.classList.contains('champion-details-active')) {
        menuDiv.classList.remove('champion-details-active');
    }
};
btnOrbShowUp.addEventListener('click', showOrbs);
btnOrbInfo.addEventListener('click', showOrbs);
var showTraits = function () {
    traitsArr.forEach(function (trait) {
        var traitStatsDiv = document.querySelector("." + trait.id + "-trait-stats");
        traitStatsDiv.innerHTML = trait.renderStats();
    });
    traitSlider.classList.add('show-slider');
    if (traitSlider.classList.contains('hide-slider')) {
        traitSlider.classList.replace('hide-slider', 'show-slider');
    }
    traitxToggler.classList.add('show-toggler');
    if (traitxToggler.classList.contains('hide-toggler')) {
        traitxToggler.classList.replace('hide-toggler', 'show-toggler');
    }
    if (menuDiv.classList.contains('champion-details-active')) {
        menuDiv.classList.remove('champion-details-active');
    }
};
btnTraitShowUp.addEventListener('click', showTraits);
btnTraitInfo.addEventListener('click', showTraits);
// HIDING SLIDERS
export var hideRuneSlider = function () {
    runeSlider.classList.replace('show-slider', 'hide-slider');
    runexToggler.classList.replace('show-toggler', 'hide-toggler');
};
runexToggler.addEventListener('click', hideRuneSlider);
export var hideProfessionSlider = function () {
    professionSlider.classList.replace('show-slider', 'hide-slider');
    professionxToggler.classList.replace('show-toggler', 'hide-toggler');
};
professionxToggler.addEventListener('click', hideProfessionSlider);
export var hideOrbSlider = function () {
    orbSlider.classList.replace('show-slider', 'hide-slider');
    orbxToggler.classList.replace('show-toggler', 'hide-toggler');
};
orbxToggler.addEventListener('click', hideOrbSlider);
export var hideTraitSlider = function () {
    traitSlider.classList.replace('show-slider', 'hide-slider');
    traitxToggler.classList.replace('show-toggler', 'hide-toggler');
};
traitxToggler.addEventListener('click', hideTraitSlider);
// end of sliders ^^^
// media stats btn
var showStatsMedia = function () {
    var attributesContainer = document.querySelector('.attributes-container');
    attributesContainer.classList.add('attributes-container-media-active');
};
showStatsBtn.addEventListener('click', showStatsMedia);
var hideStatsMedia = function () {
    var attributesContainer = document.querySelector('.attributes-container');
    attributesContainer.classList.remove('attributes-container-media-active');
};
hideStatsBtn.addEventListener('click', hideStatsMedia);
