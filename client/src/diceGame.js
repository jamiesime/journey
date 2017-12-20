var SubMenuRender = require("./views/submenuRender");

var DiceGame = function(){
  this.sides = 6;
}

var changeMoneyOnce = false;

DiceGame.prototype.rollDice = function(){
  var arr = [1, 2, 3, 4, 5, 6];
  counter=1;
  var resultsArray = [];
  for (var i = 0; i < 5; i++) {
    var isChecked = document.getElementById("hold"+counter).checked
    if(isChecked == false){
      var result = arr[Math.floor(Math.random() * arr.length)];
      resultsArray.push(result);
      resultsArray.sort();
      counter++;
    }

    var index = 1;

    var six = document.getElementById("hold5").checked;
    var five = document.getElementById("hold4").checked;
    var four = document.getElementById("hold3").checked;
    var sixLock = document.getElementById("lock-reel5");
    var fiveLock = document.getElementById("lock-reel4");
    var fourLock = document.getElementById("lock-reel3");

    for (var number of resultsArray) {
      var sortedResult = document.getElementById("reel"+index).innerText = number;
      if (resultsArray[4] === 6 || (six) ) {
        document.getElementById("hold5").checked = true;
        sixLock.style.display = "block";
        if (resultsArray[3] === 5 || (five)) {
          document.getElementById("hold4").checked = true;
          fiveLock.style.display = "block";
          if (resultsArray[2] === 4) {
            document.getElementById("hold3").checked = true;
            fourLock.style.display = "block";
            var btn = document.getElementById('reelroll');
            btn.disabled = true;
            var victory = document.getElementById('victory');
            victory.innerText = "You win! Money increased by 10!"
            playerVictory();
          }
        }
      }
      index++;
    }
  }
}

var playerVictory = function(){;
  if (changeMoneyOnce == false){
    money += 10;
    var refresh = new SubMenuRender();
    changeMoneyOnce = true;
  }
}

var computerVictory = function(){
  if (changeMoneyOnce == false){
    money -= 10;
    var refresh = new SubMenuRender();
    changeMoneyOnce = true;
  }
}

DiceGame.prototype.computerRollDice = function(){
  var arr = [1, 2, 3, 4, 5, 6];
  counter=1;
  var resultsArray = [];
  for (var i = 0; i < 5; i++) {
    var isChecked = document.getElementById("cpu-hold"+counter).checked
    if(isChecked == false){
      var result = arr[Math.floor(Math.random() * arr.length)];
      resultsArray.push(result);
      resultsArray.sort();
      counter++;
    }
    var index = 1;

    var six = document.getElementById("cpu-hold5").checked;
    var five = document.getElementById("cpu-hold4").checked;
    var four = document.getElementById("cpu-hold3").checked;
    var sixLock = document.getElementById("lock-cpu-reel5");
    var fiveLock = document.getElementById("lock-cpu-reel4");
    var fourLock = document.getElementById("lock-cpu-reel3");

    for (var number of resultsArray) {
      var sortedResult = document.getElementById("cpu-reel"+index).innerText = number;
      if (resultsArray[4] === 6 || (six) ) {
        document.getElementById("cpu-hold5").checked = true;
        sixLock.style.display = "block";
        if (resultsArray[3] === 5 || (five)) {
          document.getElementById("cpu-hold4").checked = true;
          fiveLock.style.display = "block";
          if (resultsArray[2] === 4) {
            document.getElementById("cpu-hold3").checked = true;
            fourLock.style.display = "block";
            var btn = document.getElementById('reelroll');
            btn.disabled = true;
            var victory = document.getElementById('victory');
            victory.innerText = "Salty Jack wins! Money decreased by 10"
            computerVictory();
          }
        }
      }
      index++;
    }
  }
}

module.exports = DiceGame;
