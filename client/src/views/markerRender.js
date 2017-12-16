MapView = function(markers){
this.render(markers);
};

MapView.prototype.render = function (markers) {
    console.log(markers);

    markers.forEach(function(marker){
        mainMap = addMarker(lat: marker.Latlng[0], lng: marker.Latlng[1]);
    });
};

MapView.prototype.moveLocation = function (location) {
    var lat = location.Latlng[0];
    var lng = location.Latlng[1];
    var newCoords ={lat: lat, lng: lng};
    mainMap.addMarker(newCoords, location.placeName);
    mainMap.repositionMap(newCoords, 7);
};

module.exports = MapView;
