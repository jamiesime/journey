
var app = function(){
  url = "http://localhost:3000/getlocations";
  makeRequest(url, requestLocations);

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
