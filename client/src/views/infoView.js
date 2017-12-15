var InfoView = function(location){
  this.render(location)
}

// var currentPosition =
// this.render(currentPosition)


InfoView.prototype = {

  render: function(location){
    var section = document.getElementById('sidebar-info');
    section.innerHTML = " "
    var locationName = document.createElement('h2');
    var description = document.createElement('p');
    var events = document.createElement('li');
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
