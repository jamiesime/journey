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
    var eventDesc = document.createElement('p');

console.log(location.events[0])
    locationName.innerText = location.placeName;
    description.innerText = location.description;
    eventDesc.innerText = location.events[0].text;

    section.appendChild(locationName);
    section.appendChild(description);
    section.appendChild(eventDesc)
  }
}



module.exports = InfoView;
