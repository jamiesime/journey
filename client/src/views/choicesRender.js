//choices

var ChoiceView = function(event){
  this.render(event);
}

ChoiceView.prototype = {

  render: function(event){
    eventChoices = event.choices;
    forEach(function(choice){
      renderChoiceButton(choice);
    });
  }
}

var renderChoiceButton = function(choice){
  container = document.getElementById("choice-buttons-container");
  choiceText = choice;
  var choiceBtn = document.createElement("button");
  choiceBtn.innerText = choiceText;
}
