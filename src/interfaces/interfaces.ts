import { FractionType } from "../classes/fractions";

export interface Fraction {
    championName: string,
    fractionID :string,
    strength: number,
    agility: number,
    vitality: number,
    intelligence: number,
    awarness: number,
    charisma: number,
    healthPoints: number,
    mana: number

    keyValArr():{[key:string]:number}
}

export interface Rune {
    id:string,
    heading:string,
    basicValue: number,
    specialValue: number,
    specialUsage: string,

    addStats(champion:Fraction) : void,
    showText():string,
    showBasicValue():string,
    showSpecialValue():string,
    bonusForMenu(champion:FractionType):void
}

export interface Trait {
    id:string,
    heading: string,
    sentence: string,

    text():string
}