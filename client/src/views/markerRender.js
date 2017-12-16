MarkerRender = function(location){
this.moveLocation(location);
this.addMarker({lat: 41.991213, lng: -70.861985})
};

MarkerRender.prototype.render = function (location) {
    console.log(location);

    location.forEach(function(marker){
        mainMap = addMarker({lat: marker.Latlng[0], lng: marker.Latlng[1]});
    });
};

MarkerRender.prototype.moveLocation = function (location) {
  console.log(location);
    var lat = location.Latlng[0];
    var lng = location.Latlng[1];
    var newCoords ={lat: lat, lng: lng};
    mainMap.addMarker(newCoords);
    console.log(newCoords);
    mainMap.repositionMap(newCoords, 7);
};

module.exports = MarkerRender;
