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
var EndGameRender = require("./views/endGameRender");

var locations;
var redrawRoute = false;
var eventQueue = [];
var loggedEvents = [];
var inDiceGame = false;
var gameOver = false;

var Interactions = {
  getSelectedChoice: function(choice){
    gameOver = checkMoneyAndFamily(gameOver);
    if (gameOver == false){
      checkSpecialEvents(choice);
      redrawRoute = true;
      currentPosition = choice.goto[0];
      currentEvent = choice.goto[1];
      url = "http://localhost:3000/getlocations";
      makeRequest(url, requestLocations);
      // addSubMenuListeners();
    }
    else {
      endTheGame();
    }
    var refreshMenu = new SubMenuRender();
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
  if (!inDiceGame){
    var location = new InfoView(locations[currentPosition]);
  }
  else {
    startDiceGame();
  }

  var familyBtn = document.getElementById("family-btn");
  familyBtn.addEventListener("click", function(){
    setHighlightedButton(this);
    familyInfo = new FamilyRender(family, locations[currentPosition]);
  });

  addSubMenuListeners();

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
    setHighlightedButton(this);
    makeRequest(url, reloadInfoWindow);
  });

  var logBtn = document.getElementById("log-btn");
  logBtn.addEventListener("click", function(){
    setHighlightedButton(this);
    var logInfo = new LogRender(loggedEvents);
  });

}

var setHighlightedButton = function(activeButton){
  var logBtn = document.getElementById("log-btn");
  var eventBtn = document.getElementById("event-btn");
  var familyBtn = document.getElementById("family-btn");
  var buttons = [];
  buttons.push(logBtn);
  buttons.push(eventBtn);
  buttons.push(familyBtn);
  buttons.forEach(function(button){
    if(button.id == activeButton.id){
      button.classList.add("button-highlight");
    }
    else {
      button.classList.remove("button-highlight");
    }
  });
}



//ALL RESULT RELATED FUNCTIONS BELOW

var checkSpecialEvents = function(choice){
  if(choice.diceGame != null && choice.diceGame != undefined){
    if(choice.diceGame === "start"){
      startDiceGame();
      inDiceGame = true;
    }
    if(choice.diceGame === "end"){
      inDiceGame = false;
      var location = new InfoView(locations[currentPosition]);
    }
  }
  if(choice.endGame != null && choice.endGame != undefined){
    eventText = "This is where we leave the story of the " + family.name + " family, at least for now. \n\n Maybe there will be more to this journey in the future...until then, thanks for playing, bye bye!";
    header = "THE END";
    var endGame = new EndGameRender(eventText, header);
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
    if(family.members[i].name === memberToRemove.name){
      index = i;
    }
  }
  if(index != null){
    var gone = family.members.splice(index, 1);
    gone[0].health = 0;
    renderRemoveMember(gone, memberToRemove);
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
      renderRemoveMember(gone, memberHealthChange);
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

var renderRemoveMember = function(removeMember, dbObject){
  var memberObject = removeMember[0];
  var eventText;
  if(dbObject.source != undefined || null){
    eventText = memberObject.name + " has died of " + dbObject.source;
  }
  else {
    eventText = memberObject.name + " has died of starvation";
  }
  var imgUrl = "./images/" + memberObject.name + ".png";
  var extraImgUrl = "./images/gravestone.png";
  var result = new Result(memberObject, eventText, imgUrl, extraImgUrl);
  eventQueue.push(result);
}

var renderMoneyChange = function(moneyChange){
  if (Math.sign(moneyChange.value) === 1){
    var eventText = "Money increased by " + moneyChange.value + " due to " + moneyChange.source;
  }
  else {
    var eventText = "Money decreased by " + moneyChange.value + " due to " + moneyChange.source;
  }
  var imgUrl = "./images/money.png";
  var result = new Result(null, eventText, imgUrl);
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
    eventText = memberObject.name + "'s health improved due to " + memberHealthChange.source;
  }
  else {
    eventText = memberObject.name + "'s health got worse due to " + memberHealthChange.source;
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
        removeFamilyMember({name: member.name, source: "natural causes"});
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

var checkMoneyAndFamily = function(gameOver){
  if (money < 1){
    return true;
  }
  if(family.members.length === 0){
    return true;
  }
  return false;
}

var endTheGame = function(){
  if (money < 1){
    var eventText = "The " + family.name + " family have run of out money! \n\n With no way to support themselves, the family perish."
    var header = "GAME OVER";
    var endGame = new EndGameRender(eventText, header);
  }
  if(family.members.length === 0){
    var eventText = "Every member of the " + family.name + " has died. \n\n The journey has reached it's conclusion.";
    var header = "GAME OVER";
    var endGame = new EndGameRender(eventText, header);
  }
}

module.exports = Interactions;
