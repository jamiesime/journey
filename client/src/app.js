
var app = function(){
  url = "http://localhost:3000/getlocations";
  makeRequest(url, requestLocations);
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
  debugger;
  var journeyInfo = JSON.parse(jsonString);
}


window.addEventListener("load", app);
