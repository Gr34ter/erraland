import { Fraction } from "../interfaces/interfaces.js";
export type FractionType = (Spiritmaster | Knight | Ranger | Assasin | Necromacy | Illusionist );


export class BasicFraction implements Fraction {
    championName: string;
    fractionID = '';
    strength: number;
    agility: number;
    vitality: number;
    intelligence: number;
    awarness: number;
    charisma: number;
    physicalDamage = 0;
    piercingDamage = 0;
    abilityPower = 0;
    darkPower= 0;
    fire = 0;
    water= 0;
    earth= 0;
    air= 0;
    glory = 0;
    divine= 0;
    criticalChance= 0;
    criticalDamage= 0;
    forestMagic= 0;
    stalking= 0;
    bleedingDamage= 0;
    vampirism= 0;
    diabolism= 0;
    hypnoPower= 0;
    mesmerizing= 0;
    clones = 0;
    healthPoints: number;
    mana: number;
    speechSkills = 6;
    barterSkills = 5;
    respect = 3;
    wisdom = 3;
    profession = ``;
    trait = ``
    items = {
        rune: ``,
        orb: ``
    }

    constructor(championName:string, strength:number, agility:number, vitality: number, intelligence:number, awarness:number, charisma:number) {
        this.championName = championName;
        this.strength = strength;
        this.agility = agility;
        this.vitality = vitality;
        this.intelligence = intelligence;
        this.awarness = awarness;
        this.charisma = charisma;
        this.physicalDamage = strength * 1.9;
        this.piercingDamage = this.agility * 1.2 + this.awarness * 1.6;
        this.abilityPower = intelligence * 4.1;
        this.healthPoints = vitality * 25;
        this.mana = intelligence * 15; 
    }
    keyValArr() {
        let arr: {[key:string]:number} = {
        }
        return arr
    }
    traits(){
        let arr: {[key:string]:number} = {
        }
        return arr
    }
    renderText(){
        return ``
    }
    fractionText(fraction:string){
        switch (fraction) {
            case 'spiritmaster':
                return `The Spiritmaster is the main casting class. In that most of the skills in a Spiritmaster's repertoire consist of debuffs in the form of damage over time skills. To offset this lack of direct damage, Spiritmasters also have the ability to summon and command many different elemental entities that can fill a variety of roles to match any situation.`;
            case 'knight':
                return `Knights are well-trained martial masters who use a combination of muscle and strategy to win battles. They are capable tacticians, and dislike running into battle without a plan. They usually fight for honor and justice, rather than hire themselves out for rewards. Most liked weapons for knights are swords and hammers`;
            case 'ranger':
                return `Rangers rely on a keen eye, a steady hand, and the power of nature itself. Unparalleled survivalists with traps and a stable of loyal pets at their command, rangers can adapt to any situation. Rangers are flexible and durable—proficient with the long and short bows.`;
            case `assasin`:
                return `Assassin is a surprise attack class that requires a certain degree of skill and awareness to effectively manage positioning, stun timing, aetherhold timing, and the use and choice of rune skills. Assasins mostly use daggers and short feablades`;
            case 'necromancy':
                return `Necromacy is a casting class. Most of the time casts direct spells that makes your opponents vulnerable or even taking their lives directly to you. Sometimes as your allies stands dead creatures fighting by your side. In this class you gain knowlege forbiden to anyone else. this is the main debuffing class`;
            case 'illusionist':
                return `Illusionists are magical duelists who wield deception as a weapon. Using powerful illusions, clones, and phantasmal magic to ensure that their enemies can't believe their own eyes while you or your clone stabs opponent, illusionist tip the balance of every fight in his favor. You are master of deception.`;
            default:
                break;
            }
        };

    attributeText(attribute: string){
            let outputText = ''
            if (attribute === `strength`) {
                outputText = `Your physical attacks with swords, hammers, and axes deal more damage.
                ${attribute.toUpperCase()} also allows you carry more equipment and this gives you opportunity to gain more armor and magic resistance.`
            }
            if (attribute === `agility`) {
                outputText = `${attribute.toUpperCase()} let you strike and move quick keeping balance during a fight. It's very powerfull with small weapons such as daggers, shurikens and feablades. AGILITY increase a critical strikes and shooting from distance.`
            }
            if (attribute === `vitality`) {
                outputText = `${attribute.toUpperCase()} increase your health points and helps you with regeneration after battles. Vitality works good with nature.`
            }
            if (attribute === `intelligence`) {
                outputText = `${attribute.toUpperCase()} gives your character abillities to cast powerfull spells. Intelligence also increase your mana level.`
            }
            if (attribute === `awarness`) {
                outputText = `${attribute.toUpperCase()} has two dimensions: 
                Let you locate the target quick, increase speed of your reactions what gives you more criticals, but as well, Awarness of mind, is a key to spirituality of your character what gives you also good advantage.`
                
            }
            if (attribute === `charisma`) {
                outputText = `${attribute.toUpperCase()} let you make quick decisions on the battlefield. This is most effective with casters that relies on their senses and power of magic.`
            }
            return outputText
            
        };
}

export class Spiritmaster extends BasicFraction implements Fraction{
    fractionID = 'spiritmaster';
    fire  = (this.abilityPower / 4) + (this.charisma * 0.75);
    water  = (this.abilityPower / 4) + (this.charisma * 0.75);
    air  = (this.abilityPower / 4) + (this.charisma * 0.75);
    earth = (this.abilityPower / 4) + (this.charisma * 0.75);
    abilityPower = this.intelligence * 6;
    mana = this.intelligence * 30;
    keyValArr() {
        let arr: {[key:string]:number} = {
            'atack damage' : this.physicalDamage,
            'piercing damage' : this.piercingDamage,
            'ability power' : this.abilityPower,
            fire : this.fire,
            water : this.water,
            air : this.air,
            earth : this.earth
        }
        return arr
    }
    traits(){
        let arr: {[key:string]:number} = {
            'speech Skills' : this.speechSkills,
            'wisdom' : this.wisdom,
            'barter skills' : this.barterSkills,
            'respect' : this.respect,
        }
        return arr
    }
    renderText(){
        return ``
    }
    updateStats(champion: FractionType, value:number){


    }
}
export class Knight extends BasicFraction implements Fraction {
    fractionID = 'knight';
    physicalDamage = this.strength * 2.9;
    divine = ((this.vitality / 4) + (this.awarness / 3)) * 1.8;
    glory = this.strength * 0.75;
    healthPoints = this.vitality * 40;
    keyValArr() {
        let arr: {[key:string]:number} = {
            'atack damage' : this.physicalDamage,
            'piercing damage' : this.piercingDamage,
            glory : this.glory,
            divine : this.divine,
        }
        return arr
    }
    traits(){
        let arr: {[key:string]:number} = {
            'speech Skills' : this.speechSkills,
            'wisdom' : this.wisdom,
            'barter skills' : this.barterSkills,
            'respect' : this.respect,
        }
        return arr
    }
    renderText(){
        return `something special`
    }
}

export class Ranger extends BasicFraction implements Fraction{
    fractionID = 'ranger';
    physicalDamage = this.strength * 2.1;
    piercingDamage = this.agility * 1.2 + this.awarness * 2.4;
    criticalChance = (this.awarness + this.agility) / 4;
    criticalDamage = this.strength * 1.1 + (this.agility * 1.2);
    forestMagic = (this.awarness * 2  + this.vitality * 1.1);

    keyValArr() {
        let arr: {[key:string]:number} = {
            'atack damage' : this.physicalDamage,
            'piercing damage' : this.piercingDamage,
            'critical chance ' : this.criticalChance,
            'critical damage' : this.criticalDamage,
            'forest magic' : this.forestMagic,
        }
        return arr
    }
    traits(){
        let arr: {[key:string]:number} = {
            'speech Skills' : this.speechSkills,
            'wisdom' : this.wisdom,
            'barter skills' : this.barterSkills,
            'respect' : this.respect,
        }
        return arr
    }
    renderText(){
        return ``
    }
}

export class Assasin extends BasicFraction implements Fraction{
    fractionID = 'assasin';
    physicalDamage = this.strength * 2.2
    criticalChance = (this.awarness + this.agility) / 5 ;
    stalking = (this.awarness + this.agility) * 1.1;
    criticalDamage = (this.strength * 1.1 + (this.agility * 1.2)) + (this.stalking / 10);
    bleedingDamage = this.physicalDamage  * 0.055; 
    keyValArr() {
        let arr: {[key:string]:number} = {
            'atack damage' : this.physicalDamage,
            'piercing damage' : this.piercingDamage,
            'critical chance' : this.criticalChance,
            'critical damage' : this.criticalDamage,
            'bleeding damage' : this.bleedingDamage,
            'stalking' : this.stalking
        }
        return arr
    }
    traits(){
        let arr: {[key:string]:number} = {
            'speech Skills' : this.speechSkills,
            'wisdom' : this.wisdom,
            'barter skills' : this.barterSkills,
            'respect' : this.respect,
        }
        return arr
    }
    renderText(){
        return ` something special`
    }
}

export class Necromacy extends BasicFraction implements Fraction{
    fractionID = 'necromancy';
    abilityPower = 0
    darkPower = this.intelligence * 6;
    vampirism = this.darkPower / 4;
    diabolism = (this.darkPower /10) + this.charisma * 1.2;
    mana = this.intelligence * 30;
    keyValArr() {
        let arr: {[key:string]:number} = {
            'atack damage' : this.physicalDamage,
            'piercing damage' : this.piercingDamage,
            'dark power' : this.darkPower,
            'vampirism' : this.vampirism,
            'diabolism' : this.diabolism,
        }
        return arr
    }
    traits(){
        let arr: {[key:string]:number} = {
            'speech Skills' : this.speechSkills,
            'wisdom' : this.wisdom,
            'barter skills' : this.barterSkills,
            'respect' : this.respect,
        }
        return arr
    }
    renderText(){
        return ` something special`
    }
}
export class Illusionist extends BasicFraction implements Fraction{
    fractionID = 'illusionist';
    hypnoPower = (this.intelligence * 1.2) + (this.charisma * 1.5) + this.strength;
    mesmerizing = this.charisma * 1.2;
    clones = 1;
    mana = this.intelligence * 30;
    keyValArr() {
        let arr: {[key:string]:number} = {
            'atack damage' : this.physicalDamage,
            'piercing damage' : this.piercingDamage,
            'hypno Power' : this.hypnoPower,
            'mesmerizing' : this.mesmerizing,
            'clones' : this.clones,
        }
        return arr
    }
    traits(){
        let arr: {[key:string]:number} = {
            'speech Skills' : this.speechSkills,
            'wisdom' : this.wisdom,
            'barter skills' : this.barterSkills,
            'respect' : this.respect,
        }
        return arr
    }
    renderText(){
        return ` something special`
    }
}
