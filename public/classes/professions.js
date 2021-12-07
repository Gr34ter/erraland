var Blacksmithing = /** @class */ (function () {
    function Blacksmithing() {
        this.id = "blacksmithing";
    }
    Blacksmithing.prototype.jobDescription = function () {
        return " Blacksmith creates metal weapons such as swords, daggers, axes, etc. The Blacksmith level determines what item you can craft.";
    };
    return Blacksmithing;
}());
export { Blacksmithing };
var Armorsmith = /** @class */ (function () {
    function Armorsmith() {
        this.id = "armorsmith";
    }
    Armorsmith.prototype.jobDescription = function () {
        return "Armorsmith is a crafting discipline that makes heavy armor, which is useful to soldiers (Guardians, Warriors and Revenants).";
    };
    return Armorsmith;
}());
export { Armorsmith };
var Huntsman = /** @class */ (function () {
    function Huntsman() {
        this.id = "huntsman";
    }
    Huntsman.prototype.jobDescription = function () {
        return "Huntsman is a crafting discipline that focuses on ranged weapons such as short bows, longbows as well as warhorns and special kind of traps useful for hunting.";
    };
    return Huntsman;
}());
export { Huntsman };
var Leatherworking = /** @class */ (function () {
    function Leatherworking() {
        this.id = "leatherworking";
    }
    Leatherworking.prototype.jobDescription = function () {
        return " Leatherworker is a crafting discipline that makes medium armor, which is useful to adventurers (rangers, and thieves or assasins). Leatherworkers also craft packs that can be used by any fraction";
    };
    return Leatherworking;
}());
export { Leatherworking };
var Jewellery = /** @class */ (function () {
    function Jewellery() {
        this.id = "jewellery";
    }
    Jewellery.prototype.jobDescription = function () {
        return "Jeweler is a crafting discipline that focuses on trinkets such as amulets, rings, and earrings. These are useful to all fractions.";
    };
    return Jewellery;
}());
export { Jewellery };
var Alchemy = /** @class */ (function () {
    function Alchemy() {
        this.id = "alchemy";
    }
    Alchemy.prototype.jobDescription = function () {
        return "Alchemy discipline allows to create potions(mana and health potions, but also a lot of other power up's) and food that can be used in all fractions.";
    };
    return Alchemy;
}());
export { Alchemy };
var blacksmithing = new Blacksmithing;
var armorsmith = new Armorsmith;
var leatherworking = new Leatherworking;
var jewellery = new Jewellery;
var alchemy = new Alchemy;
var huntsman = new Huntsman;
export var professionArr = [blacksmithing, armorsmith, leatherworking, jewellery, alchemy, huntsman];
