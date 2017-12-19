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
    rollBtn.style.marginLeft = "35%";
    rollBtn.style.marginRight = "35%";
    rollBtn.innerText = "Roll dice";

    var rules = document.createElement('p');
    rules.innerText = "The rules of Ship Captain Crew: You roll 5 die, and try to get 6 (ship), 5 (captain) and 4 (crew). If these numbers appear in your roll, they will be banked and the number of dice you roll will reduce. First player to get these win. If both players get the Ship, Captain and Crew, the sum of their remaining two die determines the victor."

    var playerName = document.createElement('h2');
    playerName.innerText = "Your dice"
    var computerName = document.createElement('h2')
    computerName.innerText = "Salty Jack's dice";

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
    container.appendChild(rules);
    container.appendChild(playerName)
    container.appendChild(reelDisplay);
    container.appendChild(computerName)
    container.appendChild(cpuReelDisplay);
    container.appendChild(victoryDiv);
    container.appendChild(rollBtn);

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
    var flexDiv = document.createElement('div');
    flexDiv.style.display = "flex";
    flexDiv.style.justifyContent = "center";
    flexDiv.style.flexDirection = "column";
    flexDiv.style.alignItems = "center";

    var reel = document.createElement("p");
    reel.id = reelId + (i+1);
    reel.style.display = "none";
    var checkbox = document.createElement("input");
    checkbox.id = holdId + (i+1);
    checkbox.type = "checkbox";
    checkbox.style.display = "none";
    dice = document.createElement("img");
    dice.classList += "dice-face";
    dice.id = diceNumber+(i+1);
    dice.src = "./images/" + "1" + ".png";

    lock = document.createElement("img");
    lock.classList += "lock";
    lock.src = "./images/" + "locked" + ".png";
    lock.style.display = "none";
    lock.style.height = "20px";
    lock.style.width = "20px";
    lock.id = "lock-" + reelId + (i+1);

    flexDiv.appendChild(dice)
    flexDiv.appendChild(lock)
    container.appendChild(flexDiv)

    container.appendChild(reel);
    container.appendChild(checkbox);
  }
}

module.exports = DiceGameRender;
