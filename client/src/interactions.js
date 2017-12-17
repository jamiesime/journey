var InfoView = require('./views/infoView');
var MarkerRender = require('./views/markerRender');
var TimelineRender = require('./views/timelineRender');
var FamilyRender = require("./views/familyRender");
var SubMenuRender = require('./views/submenuRender');

var Interactions = {
  getSelectedChoice: function(choice){
    checkSpecialEvents(choice);
    currentPosition = choice.goto[0];
    currentEvent = choice.goto[1];
    url = "http://localhost:3000/getlocations";
    makeRequest(url, requestLocations);
    var refreshMenu = new SubMenuRender();
    addSubMenuListeners();
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

var addSubMenuListeners = function(){
  var eventBtn = document.getElementById("event-btn");
  eventBtn.addEventListener("click", function(){
    makeRequest(url, requestLocations);
  });

  var familyBtn = document.getElementById("family-btn");
  familyBtn.addEventListener("click", function(){
    familyInfo = new FamilyRender(family);
  });
}

var checkSpecialEvents = function(choice){
  if(choice.memberAdd != null && choice.memberadd != undefined){
    console.log("will remove " + choice.memberadd);
  }
  if(choice.memberRemove != null && choice.memberRemove != undefined){
    console.log("will remove " + choice.memberRemove);
  }
  if(choice.moneyChange != null && choice.moneyChange != undefined){
    changeMoney(choice.moneyChange);
  }
  if(choice.memberHealthChange != null && choice.memberHealthChange != undefined){
    console.log(choice.memberHealthChange.name + " health to change by " + choice.memberHealthChange.value);
  }
}

var changeMoney = function(value){
  money += value;
}

module.exports = Interactions;
