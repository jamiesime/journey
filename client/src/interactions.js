var InfoView = require('./views/infoView');
var MarkerRender = require('./views/markerRender');
var TimelineRender = require('./views/timelineRender')


var Interactions = {
  getSelectedChoice: function(choice){
    checkSpecialEvents(choice);
    currentPosition = choice.goto[0];
    currentEvent = choice.goto[1];
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
  var thisEvent = new TimelineRender(event);
}

var renderEventChoices = function(event){
  var ChoicesRender = require('./views/choicesRender');
  var thisEvent = new ChoicesRender(event);
}

var checkSpecialEvents = function(choice){
  if(choice.memberAdd != ""){
    console.log("will remove " + choice.memberadd);
  }
  if(choice.memberRemove != ""){
    console.log("will remove " + choice.memberRemove);
  }
  if(choice.moneyChange != 0){
    console.log("change money by " + choice.moneyChange)
  }
}

module.exports = Interactions;
