var InfoView = require('./views/infoView');
var ChoicesRender = require('./views/choicesRender');
var Interactions = require("./interactions");
var Family = require("./family");
var FamilyMember = require("./familyMember");
var FamilyRender = require("./views/familyRender");
var LogRender = require("./views/logRender");
var SubMenuRender = require("./views/submenuRender");
var map = require("./mapWrapper");
var MarkerRender = require('./views/markerRender.js')

// these are global variables that need to be accessed in interactions and views to render
family = [];
money = 50;
currentPosition = 0;
currentEvent = 0;

//follow runs on first load, subsequent turns run in interactions
var app = function(){
  url = "http://localhost:3000/getlocations";
  makeRequest(url, requestLocations);

  //Following displays map on load:
  var container = document.getElementById('map-container');
  var coords = [56.4907, -4.2026];
  mainMap = new MapWrapper(container, coords, 6);

  var modal = document.getElementById('myModal');

  //OPENING POPUPS
  var nextBtn = document.getElementById("modal-next");
  nextBtn.addEventListener('keypress', function(){
    nextBtn.disabled = false;
  });
  nextBtn.addEventListener('click', function(){
    if(!nextBtn.disabled){
      renderInstructions(modal);
    }
  });

  // SUBMENU BUTTONS
  // family is in determine locations

  var renderSubMenu = new SubMenuRender();

  var eventBtn = document.getElementById("event-btn");
  eventBtn.addEventListener("click", function(){
    makeRequest(url, requestLocations);
  });

};

var makeRequest = function(url, callback){
  request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
};

var requestLocations = function(){
  if(this.status!=200){return};
  var jsonString = this.responseText;
  var journeyInfo = JSON.parse(jsonString);
  determineLocation(journeyInfo);
  Interactions.locations = journeyInfo;
}

var determineLocation = function(locations){
  var location = new InfoView(locations[currentPosition])
  var currentlocation  = new MarkerRender(locations[currentPosition]);
  renderEventChoices(locations[currentPosition].events[currentEvent]);

  var familyBtn = document.getElementById("family-btn");
  familyBtn.addEventListener("click", function(){
    familyInfo = new FamilyRender(family, locations[currentPosition]);

  });
}

var renderEventChoices = function(event){
  var thisEvent = new ChoicesRender(event);
}

var renderNewMarker = function(locations){
  var currentlocation  = new MarkerRender(locations[currentPosition]);
};

var initialFamilySetUp = function(){
  var member1 = new FamilyMember("Alice", 1805, 89);
  var member2 = new FamilyMember("John", 1804, 91);
  var member3 = new FamilyMember("Grace", 1824, 50);
  var member4 = new FamilyMember("Gramps", 1770, 30);
  var member5 = new FamilyMember("Grammy", 1769, 32);
  initialMembers = [];
  initialMembers.push(member1);
  initialMembers.push(member2);
  initialMembers.push(member3);
  initialMembers.push(member4);
  initialMembers.push(member5);
  familyName = document.getElementById('userInput').value;
  family = new Family(familyName, initialMembers);
}

var renderInstructions = function(modal){
  var span = document.getElementById("modal-close");
  modal.style.display = "block";
  span.onclick = function() {
    modal.className = "modal-click";
    // modal.style.display = "none";
    //Following sets up initial family - all users will start with this familyMember
    initialFamilySetUp();
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.className = "modal-click";
      //Following sets up initial family - all users will start with this familyMember
      initialFamilySetUp();
    }
  }
}

window.addEventListener("load", app);
