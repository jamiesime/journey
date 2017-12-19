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
    });
  }

}

var renderReelandHolds = function(container, reelId, holdId){
  for (var i = 0 ; i < 6 ; i++){
    var reel = document.createElement("p");
    reel.id = reelId + i;
    var checkbox = document.createElement("input");
    checkbox.id = holdId + i;
    checkbox.type = "checkbox";
    container.appendChild(reel);
    container.appendChild(checkbox);
  }
}


module.exports = DiceGameRender;
