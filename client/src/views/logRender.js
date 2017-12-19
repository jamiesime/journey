var LogRender = function(loggedEvents){
  this.render(loggedEvents);
}

LogRender.prototype = {

  render: function(loggedEvents){
    loggedEvents.reverse();
    container = document.getElementById("sidebar-info-content");
    container.innerHTML = "";
    header = document.createElement("h2");
    header.innerText = "Recent Events";
    container.appendChild(header);
    if (loggedEvents != null || loggedEvents != undefined){
      loggedEvents.forEach(function(event){
        var testP = document.createElement("p");
        testP.innerText = event.eventText;
        var hr = document.createElement('hr');
        container.appendChild(testP);
        container.appendChild(hr);
      });
    }
  }

}


module.exports = LogRender;
