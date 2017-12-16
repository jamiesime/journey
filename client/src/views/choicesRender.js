var Interactions = require("../interactions");

var ChoicesRender = function(event){
  this.render(event);
}

ChoicesRender.prototype = {

  render: function(event){
    eventChoices = event.choices;
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
  if (currentPosition !== 0) {
    addTimelineEvent();
  }
}

addListener = function(choiceBtn, choiceGoto){
  choiceBtn.addEventListener("click", function(){
    Interactions.getSelectedChoice(choiceGoto);
  });
}

var addTimelineEvent = function(){
  console.log("Hello")
  var timeline = document.getElementById('timeline');
  var timelineObject = document.createElement('div');
  var joiner = document.createElement('div');
  joiner.className = "joiner";
  timelineObject.className = "timeline-object";
  timeline.appendChild(joiner);
  timeline.appendChild(timelineObject);
}


module.exports = ChoicesRender;
