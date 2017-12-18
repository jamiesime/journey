var Die = require("./Die.js");

var Dice = function(){
    var die = new Die();
    this.dice = [die, die, die, die, die];
    this.shipExist = false;
    this.captExist = false;
    this.crewExist = false;
    this.cargo = 0;
    this.numOfRolls = 0;
};

Dice.prototype.rollDice = function() {
    var diceResults = [];
    for(die of this.dice) {
        var result = die.roll();
        diceResults.push(result);
    };
    return diceResults;
};

module.exports = Dice;
