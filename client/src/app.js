var InfoView = require('./views/infoView');
var ChoicesRender = require('./views/choicesRender');
var Interactions = require("./interactions");
var Family = require("./family");
var FamilyMember = require("./familyMember");
var FamilyRender = require("./views/familyRender");
var SubMenuRender = require("./views/submenuRender");
var map = require("./mapWrapper");
var MarkerRender = require('./views/markerRender.js')

family = [];
money = 500;
previousPosition = 0;
currentPosition = 0;
currentEvent = 0;

var app = function(){
  url = "http://localhost:3000/getlocations";
  makeRequest(url, requestLocations);

  //Following sets up initial family - all users will start with this familyMember
  initialFamilySetUp();

  //Following displays map on load:
  var container = document.getElementById('map-container');
  var coords = [56.4907, -4.2026];
  mainMap = new MapWrapper(container, coords, 6);

  var modal = document.getElementById('myModal');
  var span = document.getElementById("modal-close");
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  // SUBMENU BUTTONS

  var renderSubMenu = new SubMenuRender();

  var eventBtn = document.getElementById("event-btn");
  eventBtn.addEventListener("click", function(){
    makeRequest(url, requestLocations);
  });

  var familyBtn = document.getElementById("family-btn");
  familyBtn.addEventListener("click", function(){
    familyInfo = new FamilyRender(family);
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
  determineLocation(journeyInfo)
}

var determineLocation = function(locations){
  var location = new InfoView(locations[currentPosition])
  var currentlocation  = new MarkerRender(locations[currentPosition]);
  renderEventChoices(locations[currentPosition].events[currentEvent]);
}

var renderEventChoices = function(event){
  var thisEvent = new ChoicesRender(event);
}

var changePosition = function(change){
  currentPosition += change;
}

var changeEvent = function(change){
  currentEvent += change;
}

var renderNewMarker = function(locations){
  var currentlocation  = new MarkerRender(locations[currentPosition]);
};

var initialFamilySetUp = function(){
  var member1 = new FamilyMember("Alice", "24", 89);
  var member2 = new FamilyMember("Jonas", "24", 91);
  var member3 = new FamilyMember("Grace", "6", 50);
  initialMembers = [];
  initialMembers.push(member1);
  initialMembers.push(member2);
  initialMembers.push(member3);
  familyName = document.getElementById('userInput').value
  family = new Family(familyName, initialMembers);
}

window.addEventListener("load", app);
