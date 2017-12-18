var LogRender = function(loggedEvents){
  this.render(loggedEvents);
}

LogRender.prototype = {

  render: function(loggedEvents){
    container = document.getElementById("sidebar-info-content");
    loggedEvents.forEach(function(event){
      var testP = document.createElement("p");
      testP.innerText = "logged!";
      container.appendChild(testP);
    });
  }

}


module.exports = LogRender;
