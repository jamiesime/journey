var assert = require("assert");
var Die = require("../Die.js");
var Dice = require("../Dice.js");

describe( "Dice Roll", function(){
  var dice;

  beforeEach(function(){
    dice = new Dice();
  });

  it("return 5 random numbers", function(){
    assert.deepStrictEqual(dice.rollDice().length, 5);
  });

  it("should, before rolling, have shipExist set to false", function(){
    assert.strictEqual(dice.shipExist, false);
  });

  it("should, before rolling, have captExist set to false", function(){
    assert.strictEqual(dice.captExist, false);
  });

  it("should, before rolling, have crewExist set to false", function(){
    assert.strictEqual(dice.crewExist, false);
  });

  it("should, before rolling, have cargo set to zero", function(){
    assert.strictEqual(dice.cargo, 0);
  });

});
