var Interactions = require("../interactions");

var ChoicesRender = function(event){
  this.render(event);
}

ChoicesRender.prototype = {

  render: function(event){
    eventChoices = event.choices;
    debugger;
    container = document.getElementById("choice-buttons-container");
    container.innerHTML = "";
    eventChoices.forEach(function(choice){
      renderChoiceButton(choice);
    });
  }

}

renderChoiceButton = function(choice){
  container = document.getElementById("choice-buttons-container");
  choiceText = choice.text;
  choiceGoto = choice.goto;
  var choiceBtn = document.createElement("button");
  choiceBtn.innerText = choiceText;
  choiceBtn.className = "choice";
  addListener(choiceBtn, choiceGoto);
  container.appendChild(choiceBtn);
}

addListener = function(choiceBtn, choiceGoto){
  choiceBtn.addEventListener("click", function(){
    Interactions.getSelectedChoice(choiceGoto);
  });
}


module.exports = ChoicesRender;
