MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, center: coords, zoom: zoom
  });
  this.markers = [];
};

MapWrapper.prototype.addMarker = function (coords, content) {
  var marker = new google.maps.Marker({
    position: coords,
  });
  var infowindow = new google.maps.InfoWindow({
    content: content
};


MapWrapper.prototype.removeMarker = function () {
  if(this.markers.length >= 1){
    var lastMarker = this.markers.pop();
    lastMarker.setMap(null);
  };
};

MapWrapper.prototype.repositionMap = function (newCoords, zoom) {
  this.googleMap.setCenter(newCoords);
  this.googleMap.setZoom(zoom);
};
