var DiceGame = require("../diceGame");

var DiceGameRender = function(){
  this.render();
}

DiceGameRender.prototype = {

  render: function(){
    console.log("trying dice game");
    var container = document.getElementById("sidebar-info-content");
    container.innerHTML = "";
    var rollBtn = document.createElement("button");
    rollBtn.id = "reelroll";
    rollBtn.innerText = "Roll";
    var reelDisplay = document.createElement("div");
    reelDisplay.id = "reel-display";
    var cpuReelDisplay = document.createElement("div");
    cpuReelDisplay.id = "cpu-reel-display";

    renderReelandHolds(reelDisplay, "reel", "hold");
    renderReelandHolds(cpuReelDisplay, "cpu-reel", "cpu-hold");

    var victoryDiv = document.createElement("div");
    victoryDiv.id = "victory-declared";
    var victoryP = document.createElement("p");
    victoryP.id = "victory";

    victoryDiv.appendChild(victoryP);
    container.appendChild(rollBtn);
    container.appendChild(reelDisplay);
    container.appendChild(cpuReelDisplay);
    container.appendChild(victoryDiv);
    var game = new DiceGame();
    rollBtn.addEventListener('click', function(){
      game.rollDice();
      game.computerRollDice();
      var reel1 = document.getElementById('reel1')
      var reel2 = document.getElementById('reel2')
      var reel3 = document.getElementById('reel3')
      var reel4 = document.getElementById('reel4')
      var reel5 = document.getElementById('reel5')

      console.log(reel1.innerText);
    });
    // dice.src = "./images/" + reel.value + ".png";
  }

}

var renderReelandHolds = function(container, reelId, holdId){
  for (var i = 0 ; i < 5 ; i++){
    var reel = document.createElement("p");
    reel.id = reelId + (i+1);
    var checkbox = document.createElement("input");
    checkbox.id = holdId + (i+1);
    checkbox.type = "checkbox";
    var dice = document.createElement("img");
    dice.classList += "dice-face"
    dice.id = "dice" + (i+1);
    console.log(reel);

    container.appendChild(reel);
    container.appendChild(checkbox);
    // container.appendChild(dice);
  }
}


module.exports = DiceGameRender;
