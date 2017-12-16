var app = require("./app");

var Interactions = {
  getSelectedChoice: function(choiceGoto){
    currentPosition = choiceGoto[0];
    currentEvent = choiceGoto[1];
    url = "http://localhost:3000/getlocations";
    app.makeRequest(url, app.requestLocations);
  }
}

module.exports = Interactions;
