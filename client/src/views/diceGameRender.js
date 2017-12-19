var DiceGame = require("../diceGame");

var DiceGameRender = function(){
  this.render();
}

DiceGameRender.prototype = {

  render: function(){
    console.log("trying dice game");
    var container = document.getElementById("sidebar-info-content");
    var rollBtn = document.createElement("button");
    rollBtn.id = "reelroll";
    rollBtn.innerText = "Roll";
    var reelDisplay = document.createElement("div");
    reelDisplay.id = "reel-display";
    var cpuReelDisplay = document.createElement("div");
    cpuReelDisplay.id = "cpu-reel-display";
    for (var i = 0 ; i < 5 ; i++){
      var reel = document.createElement("p");
      reel.id = "reel" + i;
      var checkbox = document.createElement("input");
      checkbox.id = "hold" + i;
      checkbox.type = "checkbox";
      reelDisplay.appendChild(reel);
      reelDisplay.appendChild(checkbox);
    }
    for (var i = 0 ; i < 5 ; i++){
      var cpuReel = document.createElement("p");
      reel.id = "cpu-reel" + i;
      var cpuCheckbox = document.createElement("input");
      checkbox.id = "cpu-hold" + i;
      checkbox.type = "checkbox";
      cpuReelDisplay.appendChild(reel);
      cpuReelDisplay.appendChild(checkbox);
    }
    var victoryDiv = document.createElement("div");
    victoryDiv.id = "victory-declared";
    var victoryP = document.createElement("p");
    victoryP.id = "victory";
    victoryDiv.appendChild(victoryP);
    container.appendChild(rollBtn);
    container.appendChild(reelDisplay);
    container.appendChild(cpuReelDisplay);
    container.appendChild(victoryDiv);
    debugger;
    var game = new DiceGame();
  }

}

module.exports = DiceGameRender;
