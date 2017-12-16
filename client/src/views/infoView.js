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
    locationName.innerText = location.placeName;
    description.innerText = location.description;
    section.appendChild(locationName);
    section.appendChild(description);
  }
}



module.exports = InfoView;
