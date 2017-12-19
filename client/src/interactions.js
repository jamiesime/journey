var InfoView = require('./views/infoView');
var MarkerRender = require('./views/markerRender');
var TimelineRender = require('./views/timelineRender');
var FamilyMember = require("./familyMember");
var FamilyRender = require("./views/familyRender");
var SubMenuRender = require('./views/submenuRender');
var ResultQueueRender = require("./views/resultQueueRender");
var Result = require("./result");
var LogRender = require("./views/logRender");
var DiceGameRender = require("./views/diceGameRender");

var locations;
var redrawRoute = false;
var eventQueue = [];
var loggedEvents = [];

var Interactions = {
  getSelectedChoice: function(choice){
    redrawRoute = true;
    currentPosition = choice.goto[0];
    currentEvent = choice.goto[1];
    url = "http://localhost:3000/getlocations";
    makeRequest(url, requestLocations);
    var refreshMenu = new SubMenuRender();
    addSubMenuListeners();
    checkSpecialEvents(choice);
  }
}

var getLoggedEvents = function(){
  return loggedEvents;
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
  determineLocation(journeyInfo);
  locations = journeyInfo;
}

var reloadInfoWindow = function(){
  if(this.status!=200){return};
  var jsonString = this.responseText;
  var journeyInfo = JSON.parse(jsonString);
  redrawRoute = false;
  determineLocation(journeyInfo)
}

var determineLocation = function(locations){
  var location = new InfoView(locations[currentPosition]);

  var familyBtn = document.getElementById("family-btn");
  familyBtn.addEventListener("click", function(){
    familyInfo = new FamilyRender(family, locations[currentPosition]);
  });
  if (redrawRoute){
    var currentlocation  = new MarkerRender(locations[currentPosition]);
    var thisEvent = new TimelineRender(locations[currentPosition]);
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

  var logBtn = document.getElementById("log-btn");
  logBtn.addEventListener("click", function(){
    var logInfo = new LogRender(loggedEvents);
  });

  // var familyBtn = document.getElementById("family-btn");
  // familyBtn.addEventListener("click", function(){
  //   familyInfo = new FamilyRender(family, locations[currentPosition]);
  // });
}

var checkSpecialEvents = function(choice){
  if(choice.startDiceGame != null && choice.startDiceGame != undefined){
    startDiceGame();
  }
  if(choice.memberAdd != null && choice.memberAdd != undefined){
    addFamilyMember(choice.memberAdd);
  }
  if(choice.memberRemove != null && choice.memberRemove != undefined){
    removeFamilyMember(choice.memberRemove);
  }
  if(choice.moneyChange != null && choice.moneyChange != undefined){
    changeMoney(choice.moneyChange.value);
    renderMoneyChange(choice.moneyChange);
  }
  if(choice.memberHealthChange != null && choice.memberHealthChange != undefined){
    changeMemberHealth(choice.memberHealthChange);
  }
  if (locations != null && locations != undefined){
    randomDeathOfOldAge();
  }
  if (eventQueue.length > 0){
    renderEventsSequence(eventQueue);
  }
}

var changeMoney = function(value){
  money += value;
}

var addFamilyMember = function(memberToAdd){
  family.members.push(new FamilyMember(memberToAdd.name, memberToAdd.born, memberToAdd.health));
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
    var gone = family.members.splice(index, 1);
    gone[0].health = 0;
    renderRemoveMember(gone);
  }
}

var changeMemberHealth = function(memberHealthChange){
  var index = null;
  for(var i = 0 ; i < family.members.length; i++){
    if(family.members[i].name === memberHealthChange.name){
      index = i;
    }
  }
  if(index != null){
    var health = family.members[index].health += memberHealthChange.change;
    if(health < 1){
      var gone = family.members.splice(index, 1);
      gone[0].health = 0;
      renderRemoveMember(gone);
    }
    else{
      renderMemberHealthChange(memberHealthChange);
    }
  }
}

var renderNewMember = function(newMember){
  var eventText = newMember.name + " has joined your family!";
  var imgUrl = "./images/" + newMember.name + ".png";
  var result = new Result(newMember, eventText, imgUrl);
  eventQueue.push(result);
}

var renderRemoveMember = function(removeMember){
  var memberObject = removeMember[0];
  var eventText = memberObject.name + " has died!";
  var imgUrl = "./images/" + memberObject.name + ".png";
  var result = new Result(memberObject, eventText, imgUrl);
  eventQueue.push(result);
}

var renderMoneyChange = function(moneyChange){
  if (Math.sign(moneyChange.value) === 1){
    var eventText = "Money increased by " + moneyChange.value + " due to " + moneyChange.source;
  }
  else {
    var eventText = "Money decreased by " + moneyChange.value + " due to " + moneyChange.source;
  }
  var result = new Result(null, eventText, null);
  eventQueue.push(result);
}

var renderMemberHealthChange = function(memberHealthChange){
  var index = null;
  var memberObject
  var eventText;
  for(var i = 0 ; i < family.members.length; i++){
    if(family.members[i].name === memberHealthChange.name){
      memberObject = family.members[i];
    }
  }
  var imgUrl = "./images/" + memberObject.name + ".png";
  if (Math.sign(memberHealthChange.change) === 1){
    eventText = memberObject.name + "'s health got better!";
  }
  else {
    eventText = memberObject.name + "'s health got worse!";
  }
  var result = new Result(memberObject, eventText, imgUrl);
  eventQueue.push(result);
}

var renderEventsSequence = function(eventQueue){
  if (eventQueue != null && eventQueue != undefined){
    var resultQueue = new ResultQueueRender(eventQueue, locations);
    eventQueue.forEach(function(event){
      loggedEvents.push(event);
    });
  }
  eventQueue.splice(0, eventQueue.length);
}

var randomDeathOfOldAge = function(){
  family.members.forEach(function(member){
    var age = (locations[currentPosition].events[currentEvent].date - member.born);
    if( age > 45){
      var chance = getRandomInt();
      if(chance > 90){
        removeFamilyMember(member.name);
      }
    }
  });
}

var getRandomInt = function(){
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min)) + min;
}

var startDiceGame = function(){
  var diceGame = new DiceGameRender();
}

module.exports = Interactions;
