var Die = function(){
  this.sides = 6
  this.banked = false;
};

Die.prototype.roll = function(){
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}

module.exports = Die;
