var InfoView = function(location){
  console.log(location);
  this.render(location)
}

// var currentPosition =
// this.render(currentPosition)


InfoView.prototype = {
  render: function(location){
    var section = document.getElementById('sidebar-info');
    var locationName = document.createElement('h2');
    var description = document.createElement('p');
    var events = document.createElement('li');
    var move = document.createElement('button');
    locationName.innerText = location.placeName;
    description.innerText = location.description;
    for(var event of location.event){
      events.innerText = event.title;
    }
    section.appendChild(locationName);
    section.appendChild(description);
    section.appendChild(events);

  }
}
module.exports = InfoView;
