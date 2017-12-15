var infoView = function(locations){
  this.render(locations)
}

infoView.prototype = {
  render: function(locations){
    locations.forEach(function(location){
      //get current location
      var section = document.getElementById('sidebar-info');
      var locationName = document.createElement('h2');
      var description = document.createElement('p');
      var events = document.createElement('li');
      locationName.innerText = location.name;
      description.innerText = location.description;
      events.innerText = location.events;
      section.appendChild(locationName);
      section.appendChild(description);
      section.appendChild(events);
    })
  }
}

module.exports = infoView;
