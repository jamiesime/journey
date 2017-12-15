MapWrapper = function(container, coords, zoom){
    this.googleMap = new google.maps.Map(container, center: coords, zoom: zoom
    });
    this.markers = [];
};

MapWrapper.prototype.addMarker = function (coords) {
    var marker = new google.maps.Marker({
        position: coords,
        content: owner
    });
};


MapWrapper.prototype.removeMarker = function () {
    if(this.markers.length >= 1){
        var lastMarker = this.markers.pop();
        lastMarker.setMap(null);
    };
};

MapWrapper.prototype.recenterMap = function (newCoords) {
    this.googleMap.setCenter(newCoords);
};
