var InfoView = require('./views/infoView')
currentPosition = 0
var map = require("./mapWrapper");


var app = function(){
  url = "http://localhost:3000/getlocations";
  makeRequest(url, requestLocations);

  //Following displays map on load:
  var container = document.getElementById('map-container');
  var coords = [56.4907, -4.2026];
  var mainMap = new MapWrapper(container, coords, 10);

  var modal = document.getElementById('myModal');
  var span = document.getElementById("modal-close");
  modal.style.display = "block";
  span.onclick = function() {
    // this.style.marginRight = "2px";
    // this.style.marginBottom = "4px";
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var move = document.getElementById('advance')
  move.addEventListener('click', function(){
    changePosition();
    makeRequest(url, requestLocations)
  })

}

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
  var info = new InfoView(locations[currentPosition])
}

var changePosition = function(){
  currentPosition ++
}

window.addEventListener("load", app);
