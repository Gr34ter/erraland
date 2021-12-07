var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicFraction = /** @class */ (function () {
    function BasicFraction(championName, strength, agility, vitality, intelligence, awarness, charisma) {
        this.fractionID = '';
        this.physicalDamage = 0;
        this.piercingDamage = 0;
        this.abilityPower = 0;
        this.darkPower = 0;
        this.fire = 0;
        this.water = 0;
        this.earth = 0;
        this.air = 0;
        this.glory = 0;
        this.divine = 0;
        this.criticalChance = 0;
        this.criticalDamage = 0;
        this.forestMagic = 0;
        this.stalking = 0;
        this.bleedingDamage = 0;
        this.vampirism = 0;
        this.diabolism = 0;
        this.hypnoPower = 0;
        this.mesmerizing = 0;
        this.clones = 0;
        this.speechSkills = 6;
        this.barterSkills = 5;
        this.respect = 3;
        this.wisdom = 3;
        this.profession = "";
        this.trait = "";
        this.items = {
            rune: "",
            orb: ""
        };
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
    BasicFraction.prototype.keyValArr = function () {
        var arr = {};
        return arr;
    };
    BasicFraction.prototype.traits = function () {
        var arr = {};
        return arr;
    };
    BasicFraction.prototype.renderText = function () {
        return "";
    };
    BasicFraction.prototype.fractionText = function (fraction) {
        switch (fraction) {
            case 'spiritmaster':
                return "The Spiritmaster is the main casting class. In that most of the skills in a Spiritmaster's repertoire consist of debuffs in the form of damage over time skills. To offset this lack of direct damage, Spiritmasters also have the ability to summon and command many different elemental entities that can fill a variety of roles to match any situation.";
            case 'knight':
                return "Knights are well-trained martial masters who use a combination of muscle and strategy to win battles. They are capable tacticians, and dislike running into battle without a plan. They usually fight for honor and justice, rather than hire themselves out for rewards. Most liked weapons for knights are swords and hammers";
            case 'ranger':
                return "Rangers rely on a keen eye, a steady hand, and the power of nature itself. Unparalleled survivalists with traps and a stable of loyal pets at their command, rangers can adapt to any situation. Rangers are flexible and durable\u2014proficient with the long and short bows.";
            case "assasin":
                return "Assassin is a surprise attack class that requires a certain degree of skill and awareness to effectively manage positioning, stun timing, aetherhold timing, and the use and choice of rune skills. Assasins mostly use daggers and short feablades";
            case 'necromancy':
                return "Necromacy is a casting class. Most of the time casts direct spells that makes your opponents vulnerable or even taking their lives directly to you. Sometimes as your allies stands dead creatures fighting by your side. In this class you gain knowlege forbiden to anyone else. this is the main debuffing class";
            case 'illusionist':
                return "Illusionists are magical duelists who wield deception as a weapon. Using powerful illusions, clones, and phantasmal magic to ensure that their enemies can't believe their own eyes while you or your clone stabs opponent, illusionist tip the balance of every fight in his favor. You are master of deception.";
            default:
                break;
        }
    };
    ;
    BasicFraction.prototype.attributeText = function (attribute) {
        var outputText = '';
        if (attribute === "strength") {
            outputText = "Your physical attacks with swords, hammers, and axes deal more damage.\n                " + attribute.toUpperCase() + " also allows you carry more equipment and this gives you opportunity to gain more armor and magic resistance.";
        }
        if (attribute === "agility") {
            outputText = attribute.toUpperCase() + " let you strike and move quick keeping balance during a fight. It's very powerfull with small weapons such as daggers, shurikens and feablades. AGILITY increase a critical strikes and shooting from distance.";
        }
        if (attribute === "vitality") {
            outputText = attribute.toUpperCase() + " increase your health points and helps you with regeneration after battles. Vitality works good with nature.";
        }
        if (attribute === "intelligence") {
            outputText = attribute.toUpperCase() + " gives your character abillities to cast powerfull spells. Intelligence also increase your mana level.";
        }
        if (attribute === "awarness") {
            outputText = attribute.toUpperCase() + " has two dimensions: \n                Let you locate the target quick, increase speed of your reactions what gives you more criticals, but as well, Awarness of mind, is a key to spirituality of your character what gives you also good advantage.";
        }
        if (attribute === "charisma") {
            outputText = attribute.toUpperCase() + " let you make quick decisions on the battlefield. This is most effective with casters that relies on their senses and power of magic.";
        }
        return outputText;
    };
    ;
    return BasicFraction;
}());
export { BasicFraction };
var Spiritmaster = /** @class */ (function (_super) {
    __extends(Spiritmaster, _super);
    function Spiritmaster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fractionID = 'spiritmaster';
        _this.fire = (_this.abilityPower / 4) + (_this.charisma * 0.75);
        _this.water = (_this.abilityPower / 4) + (_this.charisma * 0.75);
        _this.air = (_this.abilityPower / 4) + (_this.charisma * 0.75);
        _this.earth = (_this.abilityPower / 4) + (_this.charisma * 0.75);
        _this.abilityPower = _this.intelligence * 6;
        _this.mana = _this.intelligence * 30;
        return _this;
    }
    Spiritmaster.prototype.keyValArr = function () {
        var arr = {
            'atack damage': this.physicalDamage,
            'piercing damage': this.piercingDamage,
            'ability power': this.abilityPower,
            fire: this.fire,
            water: this.water,
            air: this.air,
            earth: this.earth
        };
        return arr;
    };
    Spiritmaster.prototype.traits = function () {
        var arr = {
            'speech Skills': this.speechSkills,
            'wisdom': this.wisdom,
            'barter skills': this.barterSkills,
            'respect': this.respect,
        };
        return arr;
    };
    Spiritmaster.prototype.renderText = function () {
        return "";
    };
    Spiritmaster.prototype.updateStats = function (champion, value) {
    };
    return Spiritmaster;
}(BasicFraction));
export { Spiritmaster };
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fractionID = 'knight';
        _this.physicalDamage = _this.strength * 2.9;
        _this.divine = ((_this.vitality / 4) + (_this.awarness / 3)) * 1.8;
        _this.glory = _this.strength * 0.75;
        _this.healthPoints = _this.vitality * 40;
        return _this;
    }
    Knight.prototype.keyValArr = function () {
        var arr = {
            'atack damage': this.physicalDamage,
            'piercing damage': this.piercingDamage,
            glory: this.glory,
            divine: this.divine,
        };
        return arr;
    };
    Knight.prototype.traits = function () {
        var arr = {
            'speech Skills': this.speechSkills,
            'wisdom': this.wisdom,
            'barter skills': this.barterSkills,
            'respect': this.respect,
        };
        return arr;
    };
    Knight.prototype.renderText = function () {
        return "something special";
    };
    return Knight;
}(BasicFraction));
export { Knight };
var Ranger = /** @class */ (function (_super) {
    __extends(Ranger, _super);
    function Ranger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fractionID = 'ranger';
        _this.physicalDamage = _this.strength * 2.1;
        _this.piercingDamage = _this.agility * 1.2 + _this.awarness * 2.4;
        _this.criticalChance = (_this.awarness + _this.agility) / 4;
        _this.criticalDamage = _this.strength * 1.1 + (_this.agility * 1.2);
        _this.forestMagic = (_this.awarness * 2 + _this.vitality * 1.1);
        return _this;
    }
    Ranger.prototype.keyValArr = function () {
        var arr = {
            'atack damage': this.physicalDamage,
            'piercing damage': this.piercingDamage,
            'critical chance ': this.criticalChance,
            'critical damage': this.criticalDamage,
            'forest magic': this.forestMagic,
        };
        return arr;
    };
    Ranger.prototype.traits = function () {
        var arr = {
            'speech Skills': this.speechSkills,
            'wisdom': this.wisdom,
            'barter skills': this.barterSkills,
            'respect': this.respect,
        };
        return arr;
    };
    Ranger.prototype.renderText = function () {
        return "";
    };
    return Ranger;
}(BasicFraction));
export { Ranger };
var Assasin = /** @class */ (function (_super) {
    __extends(Assasin, _super);
    function Assasin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fractionID = 'assasin';
        _this.physicalDamage = _this.strength * 2.2;
        _this.criticalChance = (_this.awarness + _this.agility) / 5;
        _this.stalking = (_this.awarness + _this.agility) * 1.1;
        _this.criticalDamage = (_this.strength * 1.1 + (_this.agility * 1.2)) + (_this.stalking / 10);
        _this.bleedingDamage = _this.physicalDamage * 0.055;
        return _this;
    }
    Assasin.prototype.keyValArr = function () {
        var arr = {
            'atack damage': this.physicalDamage,
            'piercing damage': this.piercingDamage,
            'critical chance': this.criticalChance,
            'critical damage': this.criticalDamage,
            'bleeding damage': this.bleedingDamage,
            'stalking': this.stalking
        };
        return arr;
    };
    Assasin.prototype.traits = function () {
        var arr = {
            'speech Skills': this.speechSkills,
            'wisdom': this.wisdom,
            'barter skills': this.barterSkills,
            'respect': this.respect,
        };
        return arr;
    };
    Assasin.prototype.renderText = function () {
        return " something special";
    };
    return Assasin;
}(BasicFraction));
export { Assasin };
var Necromacy = /** @class */ (function (_super) {
    __extends(Necromacy, _super);
    function Necromacy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fractionID = 'necromancy';
        _this.abilityPower = 0;
        _this.darkPower = _this.intelligence * 6;
        _this.vampirism = _this.darkPower / 4;
        _this.diabolism = (_this.darkPower / 10) + _this.charisma * 1.2;
        _this.mana = _this.intelligence * 30;
        return _this;
    }
    Necromacy.prototype.keyValArr = function () {
        var arr = {
            'atack damage': this.physicalDamage,
            'piercing damage': this.piercingDamage,
            'dark power': this.darkPower,
            'vampirism': this.vampirism,
            'diabolism': this.diabolism,
        };
        return arr;
    };
    Necromacy.prototype.traits = function () {
        var arr = {
            'speech Skills': this.speechSkills,
            'wisdom': this.wisdom,
            'barter skills': this.barterSkills,
            'respect': this.respect,
        };
        return arr;
    };
    Necromacy.prototype.renderText = function () {
        return " something special";
    };
    return Necromacy;
}(BasicFraction));
export { Necromacy };
var Illusionist = /** @class */ (function (_super) {
    __extends(Illusionist, _super);
    function Illusionist() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fractionID = 'illusionist';
        _this.hypnoPower = (_this.intelligence * 1.2) + (_this.charisma * 1.5) + _this.strength;
        _this.mesmerizing = _this.charisma * 1.2;
        _this.clones = 1;
        _this.mana = _this.intelligence * 30;
        return _this;
    }
    Illusionist.prototype.keyValArr = function () {
        var arr = {
            'atack damage': this.physicalDamage,
            'piercing damage': this.piercingDamage,
            'hypno Power': this.hypnoPower,
            'mesmerizing': this.mesmerizing,
            'clones': this.clones,
        };
        return arr;
    };
    Illusionist.prototype.traits = function () {
        var arr = {
            'speech Skills': this.speechSkills,
            'wisdom': this.wisdom,
            'barter skills': this.barterSkills,
            'respect': this.respect,
        };
        return arr;
    };
    Illusionist.prototype.renderText = function () {
        return " something special";
    };
    return Illusionist;
}(BasicFraction));
export { Illusionist };
