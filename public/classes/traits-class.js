var wisdomValue = document.querySelector('.wisdom-value');
var respectValue = document.querySelector('.respect-value');
var barterValue = document.querySelector('.barter-value');
var speechValue = document.querySelector('.speech-value');
var WordsOfPower = /** @class */ (function () {
    function WordsOfPower() {
        this.id = 'wop';
        this.heading = 'Words of Power';
        this.sentence = '"Stop and listen! ... or die."';
    }
    WordsOfPower.prototype.text = function () {
        return "You rather go into fights when people dont agree with you.\n      This earns respect but when comes to being polite you should remain silence.";
    };
    WordsOfPower.prototype.renderStats = function () {
        return "<h5 class=\"actual-trait\">Speech Skills <span class=\"trait-negative\">-5</span></h5>\n        <h5 class=\"actual-trait\">Respect <span class=\"trait-positive\">+7</span></h5>";
    };
    WordsOfPower.prototype.addTrait = function (champion) {
        var speech = champion.speechSkills - 5;
        var wisdom = champion.wisdom;
        var respect = champion.respect + 7;
        var barter = champion.barterSkills;
        speechValue.innerHTML = ": " + speech + " <span class=\"trait-negative\">(-5)</span>";
        wisdomValue.innerText = ": " + wisdom;
        respectValue.innerHTML = ": " + respect + " <span class=\"trait-positive\">(+7)</span>";
        barterValue.innerText = ": " + barter;
        champion.trait = this.heading;
        console.log(champion);
    };
    return WordsOfPower;
}());
export { WordsOfPower };
var ManOfRenaissance = /** @class */ (function () {
    function ManOfRenaissance() {
        this.id = 'mor';
        this.heading = 'Man of Renaissance';
        this.sentence = "\"It's always a good time for a change\"";
    }
    ManOfRenaissance.prototype.text = function () {
        return "People around know you as a person with idea. They belive you can change times for better.\n        This helps you to convince everyone to your opinion.";
    };
    ManOfRenaissance.prototype.addTrait = function (champion) {
        var speech = champion.speechSkills + 2;
        var wisdom = champion.wisdom + 2;
        var respect = champion.respect + 1;
        var barter = champion.barterSkills - 2;
        speechValue.innerHTML = ": " + speech + " <span class=\"trait-positive\">(+2)</span>";
        wisdomValue.innerHTML = ": " + wisdom + " <span class=\"trait-positive\">(+2)</span> ";
        respectValue.innerHTML = ": " + respect + " <span class=\"trait-positive\">(+1)</span>";
        barterValue.innerHTML = ": " + barter + " <span class=\"trait-negative\">(-2)</span>";
        champion.trait = this.heading;
        console.log(champion);
    };
    ManOfRenaissance.prototype.renderStats = function () {
        return "<h5 class=\"actual-trait\">Speech Skills <span class=\"trait-positive\">+2</span></h5>\n         <h5 class=\"actual-trait\">Wisdom <span class=\"trait-positive\">+2</span></h5>\n         <h5 class=\"actual-trait\">Respect <span class=\"trait-positive\">+1</span></h5>\n         <h5 class=\"actual-trait\">Barter Skills <span class=\"trait-negative\">-2</span></h5>";
    };
    return ManOfRenaissance;
}());
export { ManOfRenaissance };
var FriendOfVendors = /** @class */ (function () {
    function FriendOfVendors() {
        this.id = 'fov';
        this.heading = 'Friend of Vendors';
        this.sentence = "\"Expensive is never Expensive... it's cheap\"";
    }
    FriendOfVendors.prototype.text = function () {
        return "You know everyone. This helps you to offer and take always a good price for anything.";
    };
    FriendOfVendors.prototype.addTrait = function (champion) {
        var speech = champion.speechSkills + 2;
        var wisdom = champion.wisdom - 2;
        var respect = champion.respect - 2;
        var barter = champion.barterSkills + 5;
        speechValue.innerHTML = ": " + speech + " <span class=\"trait-positive\">(+2)</span>";
        wisdomValue.innerHTML = ": " + wisdom + " <span class=\"trait-negative\">(-2)</span> ";
        respectValue.innerHTML = ": " + respect + " <span class=\"trait-negative\">(-2)</span>";
        barterValue.innerHTML = ": " + barter + " <span class=\"trait-positive\">(+5)</span>";
        champion.trait = this.heading;
        console.log(champion);
    };
    FriendOfVendors.prototype.renderStats = function () {
        return "<h5 class=\"actual-trait\">Speech Skills <span class=\"trait-positive\">+2</span></h5>\n        <h5 class=\"actual-trait\">Wisdom <span class=\"trait-negative\">-2</span></h5>\n        <h5 class=\"actual-trait\">Respect <span class=\"trait-negative\">-2</span></h5>\n        <h5 class=\"actual-trait\">Barter Skills <span class=\"trait-positive\">+5</span></h5>";
    };
    return FriendOfVendors;
}());
export { FriendOfVendors };
var AGlobetrotter = /** @class */ (function () {
    function AGlobetrotter() {
        this.id = 'agt';
        this.heading = 'A Globetrotter';
        this.sentence = "\"Been there, done that...\"";
    }
    AGlobetrotter.prototype.text = function () {
        return " A lot of people come to you for an adwise as you have travelled a world.\n        You not only convince them but also often get useful informations.";
    };
    AGlobetrotter.prototype.addTrait = function (champion) {
        var speech = champion.speechSkills;
        var wisdom = champion.wisdom + 6;
        var respect = champion.respect;
        var barter = champion.barterSkills - 3;
        speechValue.innerHTML = ": " + speech + " ";
        wisdomValue.innerHTML = ": " + wisdom + " <span class=\"trait-positive\">(+6)</span>";
        respectValue.innerHTML = ": " + respect + " ";
        barterValue.innerHTML = ": " + barter + " <span class=\"trait-negative\">(-3)</span>";
        champion.trait = this.heading;
        console.log(champion);
    };
    AGlobetrotter.prototype.renderStats = function () {
        return "<h5 class=\"actual-trait\">Wisdom <span class=\"trait-positive\">+6</span></h5>\n        <h5 class=\"actual-trait\">Barter Skills <span class=\"trait-negative\">-3</span></h5>";
    };
    return AGlobetrotter;
}());
export { AGlobetrotter };
export var wop = new WordsOfPower;
export var mor = new ManOfRenaissance;
export var fov = new FriendOfVendors;
export var agt = new AGlobetrotter;
export var traitsArr = [wop, fov, mor, agt];
