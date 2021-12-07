
import { Trait } from "../interfaces/interfaces.js";
import { FractionType } from "./fractions.js";

const wisdomValue = document.querySelector('.wisdom-value') as HTMLDivElement;
const respectValue = document.querySelector('.respect-value') as HTMLDivElement;
const barterValue = document.querySelector('.barter-value') as HTMLDivElement;
const speechValue = document.querySelector('.speech-value') as HTMLDivElement;

export class WordsOfPower implements Trait {
    id = 'wop';
    heading = 'Words of Power';
    sentence = '"Stop and listen! ... or die."'
    text(){
      return `You rather go into fights when people dont agree with you.
      This earns respect but when comes to being polite you should remain silence.`  
    }
    renderStats (){
        return `<h5 class="actual-trait">Speech Skills <span class="trait-negative">-5</span></h5>
        <h5 class="actual-trait">Respect <span class="trait-positive">+7</span></h5>`
    }
    addTrait(champion: FractionType){
        let speech = champion.speechSkills - 5;
        let wisdom = champion.wisdom
        let respect = champion.respect + 7;
        let barter = champion.barterSkills;

        speechValue.innerHTML = `: ${speech} <span class="trait-negative">(-5)</span>`;
        wisdomValue.innerText = `: ${wisdom}`;
        respectValue.innerHTML = `: ${respect} <span class="trait-positive">(+7)</span>`;
        barterValue.innerText = `: ${barter}`;

        champion.trait = this.heading;

        console.log(champion);
    }
}
export class ManOfRenaissance implements Trait {
    id = 'mor';
    heading = 'Man of Renaissance';
    sentence = `"It's always a good time for a change"`
    text(){
        return `People around know you as a person with idea. They belive you can change times for better.
        This helps you to convince everyone to your opinion.`
    }
    addTrait(champion: FractionType){
        let speech = champion.speechSkills + 2;
        let wisdom = champion.wisdom + 2;
        let respect = champion.respect + 1;
        let barter = champion.barterSkills - 2;

        speechValue.innerHTML = `: ${speech} <span class="trait-positive">(+2)</span>`;
        wisdomValue.innerHTML = `: ${wisdom} <span class="trait-positive">(+2)</span> `;
        respectValue.innerHTML = `: ${respect} <span class="trait-positive">(+1)</span>`;
        barterValue.innerHTML = `: ${barter} <span class="trait-negative">(-2)</span>`;

        champion.trait = this.heading;

        console.log(champion);
    }
    renderStats (){
         return `<h5 class="actual-trait">Speech Skills <span class="trait-positive">+2</span></h5>
         <h5 class="actual-trait">Wisdom <span class="trait-positive">+2</span></h5>
         <h5 class="actual-trait">Respect <span class="trait-positive">+1</span></h5>
         <h5 class="actual-trait">Barter Skills <span class="trait-negative">-2</span></h5>`
    }
}
export class FriendOfVendors implements Trait {
    id = 'fov';
    heading = 'Friend of Vendors';
    sentence = `"Expensive is never Expensive... it's cheap"`
    text(){
        return `You know everyone. This helps you to offer and take always a good price for anything.`
    }
    addTrait(champion: FractionType){
        let speech = champion.speechSkills + 2 ;
        let wisdom = champion.wisdom - 2;
        let respect = champion.respect - 2;
        let barter = champion.barterSkills + 5;


        speechValue.innerHTML = `: ${speech} <span class="trait-positive">(+2)</span>`;
        wisdomValue.innerHTML = `: ${wisdom} <span class="trait-negative">(-2)</span> `;
        respectValue.innerHTML = `: ${respect} <span class="trait-negative">(-2)</span>`;
        barterValue.innerHTML = `: ${barter} <span class="trait-positive">(+5)</span>`;

        champion.trait = this.heading;

        console.log(champion);
    }
    renderStats (){
        return `<h5 class="actual-trait">Speech Skills <span class="trait-positive">+2</span></h5>
        <h5 class="actual-trait">Wisdom <span class="trait-negative">-2</span></h5>
        <h5 class="actual-trait">Respect <span class="trait-negative">-2</span></h5>
        <h5 class="actual-trait">Barter Skills <span class="trait-positive">+5</span></h5>`
    }
}
export class AGlobetrotter implements Trait {
    id = 'agt';
    heading = 'A Globetrotter';
    sentence = `"Been there, done that..."`
    text(){
        return ` A lot of people come to you for an adwise as you have travelled a world.
        You not only convince them but also often get useful informations.`
    }
    addTrait(champion: FractionType){
        let speech = champion.speechSkills;
        let wisdom = champion.wisdom + 6;
        let respect = champion.respect;
        let barter = champion.barterSkills - 3;

        speechValue.innerHTML = `: ${speech} `;
        wisdomValue.innerHTML = `: ${wisdom} <span class="trait-positive">(+6)</span>`;
        respectValue.innerHTML = `: ${respect} `;
        barterValue.innerHTML = `: ${barter} <span class="trait-negative">(-3)</span>`;
        champion.trait = this.heading;
        console.log(champion);
    }
    renderStats (){
        return `<h5 class="actual-trait">Wisdom <span class="trait-positive">+6</span></h5>
        <h5 class="actual-trait">Barter Skills <span class="trait-negative">-3</span></h5>`
    }
}
export const wop = new WordsOfPower;
export const mor = new ManOfRenaissance;
export const fov = new FriendOfVendors;
export const agt = new AGlobetrotter;
export const traitsArr = [wop, fov, mor, agt];