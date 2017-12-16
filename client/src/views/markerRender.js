MarkerRender = function(location){
this.moveLocation(location);
};

MarkerRender.prototype.render = function (location) {
    console.log(location);

    location.forEach(function(marker){
        mainMap = addMarker(lat: marker.Latlng[0], lng: marker.Latlng[1]);
    });
};

MarkerRender.prototype.moveLocation = function (location) {
    var lat = location.Latlng[0];
    var lng = location.Latlng[1];
    var newCoords ={lat: lat, lng: lng};
    mainMap.addMarker(newCoords, location.placeName);
    mainMap.repositionMap(newCoords, 7);
};

module.exports = MarkerRender;
