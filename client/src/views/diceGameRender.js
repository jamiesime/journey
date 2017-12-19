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

    renderReelandHolds(reelDisplay, "reel", "hold", "dice");
    renderReelandHolds(cpuReelDisplay, "cpu-reel", "cpu-hold", "cpuDice");

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

      var reel1 = document.getElementById('reel1');
      var reel2 = document.getElementById('reel2');
      var reel3 = document.getElementById('reel3');
      var reel4 = document.getElementById('reel4');
      var reel5 = document.getElementById('reel5');

      var cpureel1 = document.getElementById('cpu-reel1');
      var cpureel2 = document.getElementById('cpu-reel2');
      var cpureel3 = document.getElementById('cpu-reel3');
      var cpureel4 = document.getElementById('cpu-reel4');
      var cpureel5 = document.getElementById('cpu-reel5');

      var dice1 = document.getElementById('dice1')
      dice1.src = "./images/" + reel1.innerText + ".png";
      var dice2 = document.getElementById('dice2')
      dice2.src = "./images/" + reel2.innerText + ".png";
      var dice3 = document.getElementById('dice3')
      dice3.src = "./images/" + reel3.innerText + ".png";
      var dice4 = document.getElementById('dice4')
      dice4.src = "./images/" + reel4.innerText + ".png";
      var dice5 = document.getElementById('dice5')
      dice5.src = "./images/" + reel5.innerText + ".png";

      var cpudice1 = document.getElementById('cpuDice1')
      cpudice1.src = "./images/" + cpureel1.innerText + ".png";
      var cpudice2 = document.getElementById('cpuDice2')
      cpudice2.src = "./images/" + cpureel2.innerText + ".png";
      var cpudice3 = document.getElementById('cpuDice3')
      cpudice3.src = "./images/" + cpureel3.innerText + ".png";
      var cpudice4 = document.getElementById('cpuDice4')
      cpudice4.src = "./images/" + cpureel4.innerText + ".png";
      var cpudice5 = document.getElementById('cpuDice5')
      cpudice5.src = "./images/" + cpureel5.innerText + ".png";
    });
  }

}

var renderReelandHolds = function(container, reelId, holdId, diceNumber){
  for (var i = 0 ; i < 5 ; i++){
    var reel = document.createElement("p");
    reel.id = reelId + (i+1);
    var checkbox = document.createElement("input");
    checkbox.id = holdId + (i+1);
    checkbox.type = "checkbox";
    dice = document.createElement("img");
    dice.classList += "dice-face"
    dice.id = diceNumber+(i+1)

    // cpuDice = document.createElement("img");
    // cpuDice.classList += "dice-face"
    // cpuDice.id = "cpu-dice"+((i+1)+5)

    container.appendChild(reel);
    container.appendChild(checkbox);
    container.appendChild(dice);
  }
}


module.exports = DiceGameRender;
