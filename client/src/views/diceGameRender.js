var DiceGameRender = function(){
  this.render();
}

DiceGameRender.prototype = {

  render: function(){
    var container = document.getElementById("sidebar-info-content");
    container.innerHTML = '';
    var test = document.createElement("p");
    test.innerText = "dice game goes here";
    container.appendChild(test);
  }

}

module.exports = DiceGameRender;
