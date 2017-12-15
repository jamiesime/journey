var seeds = require("./seeds");

var app = function(){
  url = "http://localhost:3000/";
  makeRequest(url, requestJourney);
}

var makeRequest = function(url, callback){
  request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
};

var requestJourney = function(){
  if(this.status!=200){return};
  var jsonString = this.responseText;
  var journeyInfo = JSON.parse(jsonString);
}


window.addEventListener("load", app);
