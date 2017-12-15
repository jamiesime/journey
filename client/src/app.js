var map = require("./mapWrapper");

var app = function(){
  url = "http://localhost:3000/getlocations";
  makeRequest(url, requestLocations);

  //Following displays map on load:
  var container = document.getElementById('map-container');
  var mainMap = new MapWrapper(container, center, 10);


  //Following displays instructions popup on load:
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

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
