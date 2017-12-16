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

var renderChoiceButton = function(choice){
  container = document.getElementById("choice-buttons-container");
  choiceText = choice;
  var choiceBtn = document.createElement("button");
  choiceBtn.innerText = choiceText;
  choiceBtn.className = "choice";
  addListener(choiceBtn);
  container.appendChild(choiceBtn);
}

var addListener = function(choiceBtn){
  choiceBtn.addEventListener("click", function(){
    Interactions.getSelectedChoice(choiceBtn.innerText);
  });
}


module.exports = ChoicesRender;
