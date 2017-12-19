var DiceGame = function(){
  this.sides = 6;
}

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


    for (var number of resultsArray) {
      var sortedResult = document.getElementById("reel"+index).innerText = number;
      if (resultsArray[4] === 6 || (six) ) {
        document.getElementById("hold5").checked = true;
        if (resultsArray[3] === 5 || (five)) {
          document.getElementById("hold4").checked = true;
          if (resultsArray[2] === 4) {
            document.getElementById("hold3").checked = true;
            var btn = document.getElementById('reelroll');
            btn.disabled = true;
            var victory = document.getElementById('victory');
            victory.innerText = "Player wins!"
          }
        }
      }
      index++;
    }
  }
}
