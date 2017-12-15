//choices

var ChoicesRender = function(event){
  this.render(event);
}

ChoicesRender.prototype = {

  render: function(event){
    debugger;
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
  container.appendChild(choiceBtn);
}

module.exports = ChoicesRender;
