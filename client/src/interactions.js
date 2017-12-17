var InfoView = require('./views/infoView');
var MarkerRender = require('./views/markerRender');
var TimelineRender = require('./views/timelineRender');
var FamilyMember = require("./familyMember");
var FamilyRender = require("./views/familyRender");
var SubMenuRender = require('./views/submenuRender');
var SpecialEventRender = require("./views/specialEventRender");

var redrawRoute = false;

var Interactions = {
  getSelectedChoice: function(choice){
    checkSpecialEvents(choice);
    redrawRoute = true;
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

var reloadInfoWindow = function(){
  if(this.status!=200){return};
  var jsonString = this.responseText;
  var journeyInfo = JSON.parse(jsonString);
  redrawRoute = false;
  determineLocation(journeyInfo)
}

var determineLocation = function(locations){
  var location = new InfoView(locations[currentPosition])
  if (redrawRoute){
    var currentlocation  = new MarkerRender(locations[currentPosition]);
    var thisEvent = new TimelineRender(event);
  }
  renderEventChoices(locations[currentPosition].events[currentEvent]);

}

var renderEventChoices = function(event){
  var ChoicesRender = require('./views/choicesRender');
  var thisEvent = new ChoicesRender(event);
}

var addSubMenuListeners = function(){
  var eventBtn = document.getElementById("event-btn");
  eventBtn.addEventListener("click", function(){
    makeRequest(url, reloadInfoWindow);
  });

  var familyBtn = document.getElementById("family-btn");
  familyBtn.addEventListener("click", function(){
    familyInfo = new FamilyRender(family);
  });
}

var checkSpecialEvents = function(choice){
  if(choice.memberAdd != null && choice.memberAdd != undefined){
    addFamilyMember(choice.memberAdd);
  }
  if(choice.memberRemove != null && choice.memberRemove != undefined){
    removeFamilyMember(choice.memberRemove);
  }
  if(choice.moneyChange != null && choice.moneyChange != undefined){
    changeMoney(choice.moneyChange);
  }
  if(choice.memberHealthChange != null && choice.memberHealthChange != undefined){
    changeMemberHealth(choice.memberHealthChange);
  }
}

var changeMoney = function(value){
  money += value;
}

var addFamilyMember = function(memberToAdd){
  family.members.push(new FamilyMember(memberToAdd[0], memberToAdd[1], memberToAdd[2]));
  renderNewMember(memberToAdd);
}

var removeFamilyMember = function(memberToRemove){
  var index = null;
  for(var i = 0 ; i < family.members.length; i++){
    if(family.members[i].name === memberToRemove){
      index = i;
    }
  }
  if(index != null){
    family.members.splice(index, 1);
  }
}

var changeMemberHealth = function(memberHealthChange){
  var index = null;
  for(var i = 0 ; i < family.members.length; i++){
    if(family.members[i].name === memberHealthChange[0]){
      index = i;
    }
  }
  if(index != null){
    var health = family.members[index].health += memberHealthChange[1];
    if(health < 1){
      family.members.splice(index, 1);
    }
  }
}

var renderNewMember = function(newMember){
  var eventText = newMember[0] + " has joined your family!";
  var imgUrl = "./images/" + newMember[0] + ".png";
  specialModal = new SpecialEventRender(newMember, eventText, imgUrl);
}



module.exports = Interactions;
