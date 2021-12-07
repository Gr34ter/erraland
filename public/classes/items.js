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
var RuneOfLife = /** @class */ (function () {
    function RuneOfLife(id, h, b, s, su, t) {
        this.selected = false;
        this.id = id;
        this.heading = h;
        this.basicValue = b;
        this.specialValue = s;
        this.specialUsage = su;
        this.runeToken = t;
    }
    RuneOfLife.prototype.addStats = function (champion) {
        var hpDiv = document.querySelector('.hp');
        var life = champion.healthPoints * (100 + this.basicValue) / 100;
        var divine = champion.divine + this.specialValue;
    };
    RuneOfLife.prototype.showBasicValue = function () {
        return "Health +" + this.basicValue + "%";
    };
    RuneOfLife.prototype.showSpecialValue = function () {
        return "Divine +" + this.specialValue + " (Knight only)";
    };
    RuneOfLife.prototype.showText = function () {
        return this.runeToken + ": your health is increased by " + this.basicValue + "%. \n        SPECIAL: Knight get " + this.specialValue + " points of Divine";
    };
    RuneOfLife.prototype.showTokenDetails = function () {
        return "" + this.runeToken;
    };
    RuneOfLife.prototype.bonusForMenu = function (champion) {
        var bonusDetailsDiv = document.querySelector('.bonus-details');
        var HP = champion.healthPoints * (100 + this.basicValue) / 100;
        bonusDetailsDiv.innerHTML = "\n        <h5>Health: " + HP + " <span class=\"trait-positive\">(+" + this.basicValue + "%)</span></h5>";
        if (champion.fractionID === this.specialUsage) {
            var divine = champion.divine + this.specialValue;
            bonusDetailsDiv.innerHTML = "\n            <h5 class=\"bonus-attr\">Health: " + HP + " <span class=\"trait-positive\">(+" + this.basicValue + "%)</span></h5>\n            <h5 class=\"bonus-attr\">Divine: " + divine + " <span class=\"trait-positive\">(+" + this.specialValue + ")</span></h5>";
        }
    };
    return RuneOfLife;
}());
export { RuneOfLife };
var RuneofElements = /** @class */ (function (_super) {
    __extends(RuneofElements, _super);
    function RuneofElements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RuneofElements.prototype.addStats = function (champion) {
        champion.abilityPower = champion.abilityPower * (100 + this.basicValue) / 100;
        if (champion.fractionID === this.specialUsage) {
            champion.air += this.specialValue;
            champion.earth += this.specialValue;
            champion.fire += this.specialValue;
            champion.water += this.specialValue;
        }
        console.log(champion);
    };
    RuneofElements.prototype.showBasicValue = function () {
        return "Ability Power +" + this.basicValue + "%";
    };
    RuneofElements.prototype.showSpecialValue = function () {
        return "All Elements +" + this.specialValue + " (Spiritmaster only)";
    };
    RuneofElements.prototype.showText = function () {
        return this.runeToken + ": your Ability power is increased by " + this.basicValue + "%.\n        SPECIAL: Spiritmaster get " + this.specialValue + " points of all elements (fire, water, earth, air)";
    };
    RuneofElements.prototype.bonusForMenu = function (champion) {
        var bonusDetailsDiv = document.querySelector('.bonus-details');
        var AP = champion.abilityPower * (100 + this.basicValue) / 100;
        bonusDetailsDiv.innerHTML = "\n        <h5 class=\"bonus-attr\">Ability Power: " + AP + " <span class=\"trait-positive\">+(" + this.basicValue + "%)</span></h5>";
        if (champion.fractionID === this.specialUsage) {
            var fire = champion.fire + 5;
            var water = champion.water + 5;
            var earth = champion.earth + 5;
            var air = champion.air + 5;
            bonusDetailsDiv.innerHTML = "\n            <h5 class=\"bonus-attr\">Ability Power: " + AP + " <span class=\"trait-positive\">(+" + this.basicValue + "%)</span></h5>\n            <h5 class=\"bonus-attr\">Fire: " + fire + " <span class=\"trait-positive\">(+" + this.specialValue + ")</span></h5> \n            <h5 class=\"bonus-attr\">Water: " + fire + " <span class=\"trait-positive\">(+" + this.specialValue + ")</span></h5> \n            <h5 class=\"bonus-attr\">Earth: " + fire + " <span class=\"trait-positive\">(+" + this.specialValue + ")</span></h5> \n            <h5 class=\"bonus-attr\">Air: " + fire + " <span class=\"trait-positive\">(+" + this.specialValue + ")</span></h5>";
        }
    };
    return RuneofElements;
}(RuneOfLife));
export { RuneofElements };
var RuneOfNature = /** @class */ (function (_super) {
    __extends(RuneOfNature, _super);
    function RuneOfNature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RuneOfNature.prototype.addStats = function (champion) {
        champion.forestMagic = champion.forestMagic * (100 + this.basicValue) / 100;
        if (champion.fractionID === this.specialUsage) {
            champion.criticalDamage = champion.criticalDamage * (100 + this.specialValue) / 100;
        }
    };
    RuneOfNature.prototype.showBasicValue = function () {
        return "Forest Magic +" + this.basicValue + "%";
    };
    RuneOfNature.prototype.showSpecialValue = function () {
        return "Critical Damage +" + this.specialValue + "% (Ranger only)";
    };
    RuneOfNature.prototype.showText = function () {
        return this.runeToken + ": your Forest Magic is increased by " + this.basicValue + "%.\n        SPECIAL: If you are RANGER, Critical Damage is increased by " + this.specialValue + "%";
    };
    RuneOfNature.prototype.bonusForMenu = function (champion) {
        var bonusDetailsDiv = document.querySelector('.bonus-details');
        var forestMagic = champion.forestMagic * (100 + this.basicValue) / 100;
        bonusDetailsDiv.innerHTML = "\n        <h5 class=\"bonus-attr\">Forest Magic: " + forestMagic + " <span class=\"trait-positive\">+(" + this.basicValue + "%)</span></h5>";
        if (champion.fractionID === this.specialUsage) {
            var critdmg = champion.criticalDamage * (100 + this.basicValue) / 100;
            bonusDetailsDiv.innerHTML = "\n            <h5 class=\"bonus-attr\">Forest Magic: " + forestMagic + " <span class=\"trait-positive\">+(" + this.basicValue + "%)</span></h5>\n            <h5 class=\"bonus-attr\">Critical Damage: " + critdmg + " <span class=\"trait-positive\">(+" + this.specialValue + "%)</span></h5>";
        }
    };
    return RuneOfNature;
}(RuneOfLife));
export { RuneOfNature };
var RuneOfShadows = /** @class */ (function (_super) {
    __extends(RuneOfShadows, _super);
    function RuneOfShadows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RuneOfShadows.prototype.addStats = function (champion) {
        champion.criticalChance = champion.criticalChance * (100 + this.basicValue) / 100;
        if (champion.fractionID === this.specialUsage) {
            champion.stalking += this.specialValue;
        }
    };
    RuneOfShadows.prototype.showBasicValue = function () {
        return "Critical Chance +" + this.basicValue + "%";
    };
    RuneOfShadows.prototype.showSpecialValue = function () {
        return "Stalking +" + this.specialValue + " (Assasin only)";
    };
    RuneOfShadows.prototype.showText = function () {
        return this.runeToken + ": your Critical Chance is increased by " + this.basicValue + "%.\n        SPECIAL: Assasins stalking ability is increased by " + this.specialValue + ".";
    };
    RuneOfShadows.prototype.bonusForMenu = function (champion) {
        var bonusDetailsDiv = document.querySelector('.bonus-details');
        var critChance = Math.round(champion.criticalChance * (100 + this.basicValue) / 100);
        bonusDetailsDiv.innerHTML = "\n        <h5 class=\"bonus-attr\">Critical Chance: " + critChance + " <span class=\"trait-positive\">+" + this.basicValue + "</span></h5>";
        if (champion.fractionID === this.specialUsage) {
            var stalking = Math.round(champion.stalking + this.specialValue);
            bonusDetailsDiv.innerHTML = "\n            <h5 class=\"bonus-attr\">Critical Chance: " + critChance + " <span class=\"trait-positive\">+(" + this.basicValue + "%)</span></h5>\n            <h5 class=\"bonus-attr\">Stalking: " + stalking + " <span class=\"trait-positive\">(+" + this.specialValue + ")</span></h5>";
        }
    };
    return RuneOfShadows;
}(RuneOfLife));
export { RuneOfShadows };
var RuneOfDarkness = /** @class */ (function (_super) {
    __extends(RuneOfDarkness, _super);
    function RuneOfDarkness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RuneOfDarkness.prototype.addStats = function (champion) {
        champion.darkPower = champion.darkPower * (100 + this.basicValue) / 100;
        if (champion.fractionID === this.specialUsage) {
            champion.vampirism += this.specialValue;
        }
    };
    RuneOfDarkness.prototype.showBasicValue = function () {
        return "Dark Power +" + this.basicValue + "%";
    };
    RuneOfDarkness.prototype.showSpecialValue = function () {
        return "Vampirism +" + this.specialValue + " (Necromancy only)";
    };
    RuneOfDarkness.prototype.showText = function () {
        return this.runeToken + ": your Dark Power is increased by " + this.basicValue + "%.\n        SPECIAL: Necromancy get " + this.specialValue + " points of vampirism";
    };
    RuneOfDarkness.prototype.bonusForMenu = function (champion) {
        var bonusDetailsDiv = document.querySelector('.bonus-details');
        var DP = Math.round(champion.darkPower * (100 + this.basicValue) / 100);
        bonusDetailsDiv.innerHTML = "\n        <h5 class=\"bonus-attr\">Dark Power: " + DP + " <span class=\"trait-positive\">+(" + this.basicValue + "%)</span></h5>";
        if (champion.fractionID === this.specialUsage) {
            var vampirism = champion.vampirism + this.specialValue;
            bonusDetailsDiv.innerHTML = "\n            <h5 class=\"bonus-attr\">Dark Power: " + DP + " <span class=\"trait-positive\">+(" + this.basicValue + "%)</span></h5>\n            <h5 class=\"bonus-attr\">Vampirism: " + vampirism + " <span class=\"trait-positive\">(+" + this.specialValue + ")</span></h5>";
        }
    };
    return RuneOfDarkness;
}(RuneOfLife));
export { RuneOfDarkness };
var RuneOfMentality = /** @class */ (function (_super) {
    __extends(RuneOfMentality, _super);
    function RuneOfMentality() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RuneOfMentality.prototype.addStats = function (champion) {
        champion.hypnoPower = champion.hypnoPower * (100 + this.basicValue) / 100;
        if (champion.fractionID === this.specialUsage) {
            champion.clones += this.specialValue;
        }
    };
    RuneOfMentality.prototype.showBasicValue = function () {
        return "Hypno Power +" + this.basicValue + "%";
    };
    RuneOfMentality.prototype.showSpecialValue = function () {
        return "Clones +" + this.specialValue + " (Illusionist only)";
    };
    RuneOfMentality.prototype.showText = function () {
        return this.runeToken + ": your Hypno Power is increased by " + this.basicValue + "%.\n        SPECIAL: As Illusionist you can create +" + this.specialValue + " clones.";
    };
    RuneOfMentality.prototype.bonusForMenu = function (champion) {
        var bonusDetailsDiv = document.querySelector('.bonus-details');
        var HypnoP = Math.round(champion.hypnoPower * (100 + this.basicValue) / 100);
        bonusDetailsDiv.innerHTML = "\n        <h5 class=\"bonus-attr\">Hypno Power: " + HypnoP + " <span class=\"trait-positive\">+(" + this.basicValue + "%)</span></h5>";
        if (champion.fractionID === this.specialUsage) {
            var clones = champion.clones + this.specialValue;
            bonusDetailsDiv.innerHTML = "\n            <h5 class=\"bonus-attr\">Hypno Power: " + HypnoP + " <span class=\"trait-positive\">+(" + this.basicValue + "%)</span></h5>\n            <h5 class=\"bonus-attr\">Clones: " + clones + " <span class=\"trait-positive\">(+" + this.specialValue + ")</span></h5>";
        }
    };
    return RuneOfMentality;
}(RuneOfLife));
export { RuneOfMentality };
var OrbOfLuck = /** @class */ (function () {
    function OrbOfLuck() {
        this.id = 'luck-orb';
        this.heading = 'Orb of Luck';
        this.bonusText = "Gold income + 2%";
    }
    OrbOfLuck.prototype.text = function () {
        return "Pick this orb so you will increase every gold income by 2% in any situation.";
    };
    return OrbOfLuck;
}());
export { OrbOfLuck };
var OrbOfKnowledge = /** @class */ (function () {
    function OrbOfKnowledge() {
        this.id = 'knowledge-orb';
        this.heading = 'Orb of knowledge';
        this.bonusText = 'XP gain + 2%';
    }
    OrbOfKnowledge.prototype.text = function () {
        return "This orb provides 2% more experience. Everywhere you get XP as reward you will gain a bonus for this orb";
    };
    return OrbOfKnowledge;
}());
export { OrbOfKnowledge };
var knowledgeOrb = new OrbOfKnowledge;
var luckOrb = new OrbOfLuck;
export var orbArr = [knowledgeOrb, luckOrb];
export var lifeRuneItem = new RuneOfLife('life-rune', 'Rune of Life', 10, 2, 'knight', 'Force of Life');
export var darknessRuneItem = new RuneOfDarkness('darkness-rune', 'Rune of Darkness', 15, 7, 'necromancy', 'Force of Darkness');
export var elementsRuneItem = new RuneofElements('elements-rune', 'Rune of Elements', 15, 5, 'spiritmaster', 'Force of Elements');
export var natureRuneItem = new RuneOfNature('nature-rune', 'Rune of Nature', 12, 10, 'ranger', 'Force of Forest');
export var shadowsRuneItem = new RuneOfShadows('shadows-rune', 'Rune of Shadows', 10, 3, 'assasin', 'Force of Shadows');
export var mindRuneItem = new RuneOfMentality('mentality-rune', 'Rune of Mentality', 15, 2, 'illusionist', 'Force of Mind');
