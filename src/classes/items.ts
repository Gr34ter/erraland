import { Rune } from "../interfaces/interfaces.js";
import { Spiritmaster, Knight, Ranger, Assasin, Necromacy, Illusionist, FractionType } from "./fractions.js";
type Fractions = (Spiritmaster | Knight | Ranger | Assasin | Necromacy | Illusionist) ;

export class RuneOfLife implements Rune {
    id :string;
    heading: string;
    basicValue : number;
    specialValue :number;
    specialUsage : string;
    runeToken:string;
    selected = false;
    constructor( id:string, h:string, b: number, s: number, su: string, t: string,){
        this.id = id;
        this.heading = h;
        this.basicValue = b;
        this.specialValue = s;
        this.specialUsage = su;
        this.runeToken = t;
    }
    

    addStats(champion: Fractions) {
        let hpDiv = document.querySelector('.hp') as HTMLDivElement;
        let life = champion.healthPoints * (100 + this.basicValue) / 100;


        let divine = champion.divine + this.specialValue;

    }
    showBasicValue(){
      return `Health +${this.basicValue}%`  
    }
    showSpecialValue(){
        return `Divine +${this.specialValue} (Knight only)`
    }
    showText(){
        return `${this.runeToken}: your health is increased by ${this.basicValue}%. 
        SPECIAL: Knight get ${this.specialValue} points of Divine`;
    }
    showTokenDetails(){
        return `${this.runeToken}`;
    }
    bonusForMenu(champion:FractionType){
        let bonusDetailsDiv = document.querySelector('.bonus-details') as HTMLDivElement;
        let HP = champion.healthPoints * (100 + this.basicValue) / 100;
        bonusDetailsDiv.innerHTML = `
        <h5>Health: ${HP} <span class="trait-positive">(+${this.basicValue}%)</span></h5>`
        if (champion.fractionID === this.specialUsage) {
            let divine = champion.divine + this.specialValue ;
            bonusDetailsDiv.innerHTML = `
            <h5 class="bonus-attr">Health: ${HP} <span class="trait-positive">(+${this.basicValue}%)</span></h5>
            <h5 class="bonus-attr">Divine: ${divine} <span class="trait-positive">(+${this.specialValue})</span></h5>`;
        }
    }
}

export class RuneofElements extends RuneOfLife implements Rune {
    
    addStats(champion:Fractions) {
        champion.abilityPower = champion.abilityPower * (100 + this.basicValue) / 100;
        if (champion.fractionID === this.specialUsage) {
            champion.air += this.specialValue;
            champion.earth += this.specialValue;
            champion.fire += this.specialValue;
            champion.water += this.specialValue;
        }
        console.log(champion);
        
    }
    showBasicValue(){
        return `Ability Power +${this.basicValue}%`  
      }
    showSpecialValue(){
        return `All Elements +${this.specialValue} (Spiritmaster only)`
      }
    showText(){
        return `${this.runeToken}: your Ability power is increased by ${this.basicValue}%.
        SPECIAL: Spiritmaster get ${this.specialValue} points of all elements (fire, water, earth, air)`
    }
    bonusForMenu(champion:FractionType){
        let bonusDetailsDiv = document.querySelector('.bonus-details') as HTMLDivElement;
        let AP = champion.abilityPower * (100 + this.basicValue) / 100;
        bonusDetailsDiv.innerHTML = `
        <h5 class="bonus-attr">Ability Power: ${AP} <span class="trait-positive">+(${this.basicValue}%)</span></h5>`
        if (champion.fractionID === this.specialUsage) {
            let fire = champion.fire + 5 ;
            let water = champion.water + 5;
            let earth = champion.earth + 5;
            let air = champion.air + 5;
    
            bonusDetailsDiv.innerHTML = `
            <h5 class="bonus-attr">Ability Power: ${AP} <span class="trait-positive">(+${this.basicValue}%)</span></h5>
            <h5 class="bonus-attr">Fire: ${fire} <span class="trait-positive">(+${this.specialValue})</span></h5> 
            <h5 class="bonus-attr">Water: ${fire} <span class="trait-positive">(+${this.specialValue})</span></h5> 
            <h5 class="bonus-attr">Earth: ${fire} <span class="trait-positive">(+${this.specialValue})</span></h5> 
            <h5 class="bonus-attr">Air: ${fire} <span class="trait-positive">(+${this.specialValue})</span></h5>`;
        }
    }
}

export class RuneOfNature extends RuneOfLife implements Rune {

    addStats(champion: Fractions) {
        champion.forestMagic = champion.forestMagic * (100 + this.basicValue) / 100;
        if (champion.fractionID === this.specialUsage) {
            champion.criticalDamage = champion.criticalDamage * (100 + this.specialValue) / 100;
        }
    }
    showBasicValue(){
        return `Forest Magic +${this.basicValue}%`  
      }
    showSpecialValue(){
        return `Critical Damage +${this.specialValue}% (Ranger only)`
      }
    showText(){
        return `${this.runeToken}: your Forest Magic is increased by ${this.basicValue}%.
        SPECIAL: If you are RANGER, Critical Damage is increased by ${this.specialValue}%`
    }
    bonusForMenu(champion:FractionType){
        let bonusDetailsDiv = document.querySelector('.bonus-details') as HTMLDivElement;
        let forestMagic = champion.forestMagic * (100 + this.basicValue) / 100;
        bonusDetailsDiv.innerHTML = `
        <h5 class="bonus-attr">Forest Magic: ${forestMagic} <span class="trait-positive">+(${this.basicValue}%)</span></h5>`

        if (champion.fractionID === this.specialUsage) {
            let critdmg = champion.criticalDamage * (100 + this.basicValue) / 100;
    
            bonusDetailsDiv.innerHTML = `
            <h5 class="bonus-attr">Forest Magic: ${forestMagic} <span class="trait-positive">+(${this.basicValue}%)</span></h5>
            <h5 class="bonus-attr">Critical Damage: ${critdmg} <span class="trait-positive">(+${this.specialValue}%)</span></h5>`;
        }
    }
}

export class RuneOfShadows extends RuneOfLife implements Rune {
    addStats(champion: Fractions) {
        champion.criticalChance = champion.criticalChance * (100 + this.basicValue) / 100;
        if (champion.fractionID === this.specialUsage) {
            champion.stalking += this.specialValue;
        }
        
    }
    showBasicValue(){
        return `Critical Chance +${this.basicValue}%`  
      }
    showSpecialValue(){
        return `Stalking +${this.specialValue} (Assasin only)`
      }
    showText(){
        return `${this.runeToken}: your Critical Chance is increased by ${this.basicValue}%.
        SPECIAL: Assasins stalking ability is increased by ${this.specialValue}.`
    }
    bonusForMenu(champion:FractionType){
        let bonusDetailsDiv = document.querySelector('.bonus-details') as HTMLDivElement;

        let critChance = Math.round(champion.criticalChance * (100 + this.basicValue) / 100);
        bonusDetailsDiv.innerHTML = `
        <h5 class="bonus-attr">Critical Chance: ${critChance} <span class="trait-positive">+${this.basicValue}</span></h5>`

        if (champion.fractionID === this.specialUsage) {
            let stalking = Math.round(champion.stalking + this.specialValue);
            bonusDetailsDiv.innerHTML = `
            <h5 class="bonus-attr">Critical Chance: ${critChance} <span class="trait-positive">+(${this.basicValue}%)</span></h5>
            <h5 class="bonus-attr">Stalking: ${stalking} <span class="trait-positive">(+${this.specialValue})</span></h5>`;
        }
    }
}


export class RuneOfDarkness extends RuneOfLife implements Rune {
    addStats(champion: Fractions) {
        champion.darkPower = champion.darkPower * (100 + this.basicValue) / 100;
        if (champion.fractionID === this.specialUsage) {
            champion.vampirism += this.specialValue;
        }
        
    }
    showBasicValue(){
        return `Dark Power +${this.basicValue}%`  
      }
    showSpecialValue(){
        return `Vampirism +${this.specialValue} (Necromancy only)`
      }
    showText(){
        return `${this.runeToken}: your Dark Power is increased by ${this.basicValue}%.
        SPECIAL: Necromancy get ${this.specialValue} points of vampirism`
    }
    bonusForMenu(champion:FractionType){
        let bonusDetailsDiv = document.querySelector('.bonus-details') as HTMLDivElement;
        
        let DP = Math.round(champion.darkPower * (100 + this.basicValue) / 100);
        bonusDetailsDiv.innerHTML = `
        <h5 class="bonus-attr">Dark Power: ${DP} <span class="trait-positive">+(${this.basicValue}%)</span></h5>`

        if (champion.fractionID === this.specialUsage) {
            let vampirism = champion.vampirism + this.specialValue;
            bonusDetailsDiv.innerHTML = `
            <h5 class="bonus-attr">Dark Power: ${DP} <span class="trait-positive">+(${this.basicValue}%)</span></h5>
            <h5 class="bonus-attr">Vampirism: ${vampirism} <span class="trait-positive">(+${this.specialValue})</span></h5>`;
        }
    }
    
}

export class RuneOfMentality extends RuneOfLife implements Rune {
    addStats(champion: Fractions) {
        champion.hypnoPower = champion.hypnoPower * (100 + this.basicValue) / 100;
        if (champion.fractionID === this.specialUsage) {
            champion.clones += this.specialValue;
        }
    }
    showBasicValue(){
        return `Hypno Power +${this.basicValue}%`  
      }
    showSpecialValue(){
        return `Clones +${this.specialValue} (Illusionist only)`
      }
    showText(){
        return `${this.runeToken}: your Hypno Power is increased by ${this.basicValue}%.
        SPECIAL: As Illusionist you can create +${this.specialValue} clones.`
    }
    bonusForMenu(champion:FractionType){
        let bonusDetailsDiv = document.querySelector('.bonus-details') as HTMLDivElement;
        
        let HypnoP = Math.round(champion.hypnoPower * (100 + this.basicValue) / 100);
        bonusDetailsDiv.innerHTML = `
        <h5 class="bonus-attr">Hypno Power: ${HypnoP} <span class="trait-positive">+(${this.basicValue}%)</span></h5>`

        if (champion.fractionID === this.specialUsage) {
            let clones = champion.clones + this.specialValue;
            bonusDetailsDiv.innerHTML = `
            <h5 class="bonus-attr">Hypno Power: ${HypnoP} <span class="trait-positive">+(${this.basicValue}%)</span></h5>
            <h5 class="bonus-attr">Clones: ${clones} <span class="trait-positive">(+${this.specialValue})</span></h5>`;
        }
    }
}
export class OrbOfLuck {
    id = 'luck-orb';
    heading = 'Orb of Luck';
    bonusText = `Gold income + 2%`;

    text(){
        return `Pick this orb so you will increase every gold income by 2% in any situation.`
    }
}
export class OrbOfKnowledge {
    id = 'knowledge-orb';
    heading = 'Orb of knowledge';
    bonusText = 'XP gain + 2%';

    text(){
        return `This orb provides 2% more experience. Everywhere you get XP as reward you will gain a bonus for this orb`
    }
}

const knowledgeOrb = new OrbOfKnowledge;
const luckOrb = new OrbOfLuck;
export const orbArr = [knowledgeOrb, luckOrb];


export const lifeRuneItem = new RuneOfLife('life-rune', 'Rune of Life', 10, 2, 'knight', 'Force of Life');
export const darknessRuneItem = new RuneOfDarkness('darkness-rune', 'Rune of Darkness', 15, 7, 'necromancy', 'Force of Darkness');
export const elementsRuneItem = new RuneofElements('elements-rune', 'Rune of Elements', 15, 5, 'spiritmaster', 'Force of Elements');
export const natureRuneItem = new RuneOfNature('nature-rune', 'Rune of Nature', 12, 10, 'ranger', 'Force of Forest');
export const shadowsRuneItem = new RuneOfShadows('shadows-rune', 'Rune of Shadows', 10, 3, 'assasin', 'Force of Shadows');
export const mindRuneItem = new RuneOfMentality('mentality-rune', 'Rune of Mentality', 15, 2, 'illusionist', 'Force of Mind');