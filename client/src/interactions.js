var InfoView = require('./views/infoView');
var MarkerRender = require('./views/markerRender');

console.log(InfoView);
console.log(MarkerRender);

var Interactions = {
  getSelectedChoice: function(choiceGoto){
    currentPosition = choiceGoto[0];
    currentEvent = choiceGoto[1];
    url = "http://localhost:3000/getlocations";
    makeRequest(url, requestLocations);
  }
}

var makeRequest = function(url, callback){
  request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestLocations = function(){
  if(this.status!=200){return};
  var jsonString = this.responseText;
  var journeyInfo = JSON.parse(jsonString);
  determineLocation(journeyInfo)
}

var determineLocation = function(locations){
  var location = new InfoView(locations[currentPosition])
  var currentlocation  = new MarkerRender(locations[currentPosition]);
  renderEventChoices(locations[currentPosition].events[currentEvent]);
}

var renderEventChoices = function(event){
  var ChoicesRender = require('./views/choicesRender');
  var thisEvent = new ChoicesRender(event);
}

module.exports = Interactions;
