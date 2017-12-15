var InfoView = function(location){
  this.render(location)
}

InfoView.prototype = {
  render: function(location){
    console.log(location[0].placeName);
      var section = document.getElementById('sidebar-info');
      var locationName = document.createElement('h2');
      var description = document.createElement('p');
      var events = document.createElement('li');
      locationName.innerText = location[0].placeName;
      description.innerText = location[0].description;
      for(var event of location[0].event){
        events.innerText = event.title;

      }
      section.appendChild(locationName);
      section.appendChild(description);
      section.appendChild(events);

  }
}

module.exports = InfoView;
