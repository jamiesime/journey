var Interactions = require("../interactions");
//choices

var ChoicesRender = function(event){
  this.render(event);
}

ChoicesRender.prototype = {

  render: function(event){
    eventChoices = event.choices;
    eventChoices.forEach(function(choice){
      renderChoiceButton(choice);
    });
  }

}

renderChoiceButton = function(choice){
  container = document.getElementById("choice-buttons-container");
  choiceForm = document.createElement("form");
  choiceText = choice.text;
  choiceGoto = choice.goto;
  // choiceForm.method = "GET";
  // choiceForm.action = "/getnext/" + choiceGoto[0] + "/" + choiceGoto[1];
  var choiceBtn = document.createElement("button");
  choiceBtn.innerText = choiceText;
  choiceBtn.className = "choice";
  addListener(choiceBtn, choiceGoto);
  // choiceForm.appendChild(choiceBtn);
  container.appendChild(choiceBtn);
}

addListener = function(choiceBtn, choiceGoto){
  choiceBtn.addEventListener("click", function(){
    Interactions.getSelectedChoice(choiceGoto);
  });
}


module.exports = ChoicesRender;
