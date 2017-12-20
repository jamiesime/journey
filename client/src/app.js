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
money = 250;
currentPosition = 0;
currentEvent = 0;

//follow runs on first load, subsequent turns run in interactions
var app = function(){
  url = "http://localhost:3000/getlocations";

  //Following displays map on load:
  var container = document.getElementById('map-container');
  var coords = [56.4907, -4.2026];
  mainMap = new MapWrapper(container, coords, 6);

  //OPENING POPUPS

  var modal = document.getElementById('myModal');
  var nameInput = document.getElementById("userInput")
  var nextBtn = document.getElementById("modal-next");
  nameInput.oninput = function(){
    nextBtn.disabled = false;
    nextBtn.classList.remove("button-disabled");
  }

  nextBtn.addEventListener('click', function(){
    if(!nextBtn.disabled){
      var familyName = document.getElementById("userInput").value;
      initialFamilySetUp(familyName);
      renderInstructions(modal);
      Interactions.getSelectedChoice({text: "start", goto: [0,0]});
    }
  });



};

var renderNewMarker = function(locations){
  var currentlocation  = new MarkerRender(locations[currentPosition]);
};

var initialFamilySetUp = function(familyName){
  var member1 = new FamilyMember("Alice", 1805, 89);
  var member2 = new FamilyMember("John", 1804, 91);
  var member3 = new FamilyMember("Grace", 1824, 50);
  var member4 = new FamilyMember("Alistair", 1770, 30);
  var member5 = new FamilyMember("Elizabeth", 1769, 32);
  initialMembers = [];
  initialMembers.push(member1);
  initialMembers.push(member2);
  initialMembers.push(member3);
  initialMembers.push(member4);
  initialMembers.push(member5);
  family = new Family(familyName, initialMembers);
}

var renderInstructions = function(modal){
  var modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = "";
  var logo = document.createElement("img");
  logo.src = "./images/yorelogo.png";
  logo.id = "logoImg";
  modalContent.appendChild(logo);
  renderFamilySpriteBar(modalContent);
  var header = document.createElement("h2");
  header.innerText = "The " + family.name + " Family";
  modalContent.appendChild(header);
  var modalText = document.createElement("p");
  modalText.innerText = "The " + family.name + " family are leaving Scotland, in search of greener pastures, for Canada. This is the story of their journey. \n\nTheir travels may be hazardous, and you must help them make decisions along the way. The lives of the " + family.name + " family are in your hands.";
  var closeBtn = document.createElement("button");
  closeBtn.id = "modal-close";
  closeBtn.innerText = "Begin";
  modalContent.appendChild(modalText);
  modalContent.appendChild(closeBtn);
  closeModal(modal);
}

var renderFamilySpriteBar = function(modalContent){
  var spriteBar = document.createElement("div");
  spriteBar.id = "sprite-bar";
  family.members.forEach(function(member){
    var memberSprite = document.createElement("img");
    memberSprite.src = "./images/" + member.name + ".png";
    memberSprite.classList.add("family-sprite");
    spriteBar.appendChild(memberSprite);
  });
  modalContent.appendChild(spriteBar);
}

var closeModal = function(modal){
  var span = document.getElementById("modal-close");
  modal.style.display = "block";
  span.onclick = function() {
    modal.className = "modal-click";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.className = "modal-click";
    }
  }
}

window.addEventListener("load", app);
