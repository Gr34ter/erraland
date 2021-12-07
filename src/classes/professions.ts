export class Blacksmithing {
    id = "blacksmithing"
    jobDescription(){
        return ` Blacksmith creates metal weapons such as swords, daggers, axes, etc. The Blacksmith level determines what item you can craft.`
    }
}
export class Armorsmith {
    id = "armorsmith"
    jobDescription(){
        return `Armorsmith is a crafting discipline that makes heavy armor, which is useful to soldiers (Guardians, Warriors and Revenants).`
    }
}
export class Huntsman {
    id = "huntsman"
    jobDescription (){
        return`Huntsman is a crafting discipline that focuses on ranged weapons such as short bows, longbows as well as warhorns and special kind of traps useful for hunting.`
    }
}
export class Leatherworking {
    id = "leatherworking"
    jobDescription(){
        return ` Leatherworker is a crafting discipline that makes medium armor, which is useful to adventurers (rangers, and thieves or assasins). Leatherworkers also craft packs that can be used by any fraction`
    }
}
export class Jewellery {
    id = "jewellery"
    jobDescription(){
        return `Jeweler is a crafting discipline that focuses on trinkets such as amulets, rings, and earrings. These are useful to all fractions.`
    }
}
export class Alchemy {
    id = "alchemy"
    jobDescription(){
        return `Alchemy discipline allows to create potions(mana and health potions, but also a lot of other power up's) and food that can be used in all fractions.`
    }
}
const blacksmithing = new Blacksmithing;
const armorsmith = new Armorsmith;
const leatherworking = new Leatherworking;
const jewellery = new Jewellery;
const alchemy = new Alchemy;
const huntsman = new Huntsman;


export const professionArr = [ blacksmithing, armorsmith, leatherworking, jewellery, alchemy, huntsman];