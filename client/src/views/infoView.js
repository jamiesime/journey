var InfoView = function(location){
  this.render(location)
}

InfoView.prototype = {

  render: function(location){
    var section = document.getElementById('sidebar-info');
    var content = document.getElementById('sidebar-info-content');
    content.innerHTML = " "
    var locationName = document.createElement('h2');
    var description = document.createElement('p');
    var eventDesc = document.createElement('p');

    locationName.innerText = location.placeName;
    description.innerText = location.description;
    eventDesc.innerText = location.events[currentEvent].text;


    content.appendChild(locationName);
    content.appendChild(description);
    content.appendChild(eventDesc);
    section.appendChild(content);
  }
}



module.exports = InfoView;
