var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  addMarker: function(coords, contentString) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    var infowindow = new google.maps.InfoWindow({
             content: contentString
           });
    marker.addListener('click', function() {
              infowindow.open(marker.map,marker);
            });

  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click",
      function(event){
        console.log(event);
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
        this.addMarker({lat: lat, lng: lng});
      }.bind(this));
  },

  markerAddListenerEvent:function(content){
    markerInfoBox(content);
    marker.addListener('click', function() {
              infowindow.open(map, marker);
            });
  },

  setCenter:function(){
    this.googleMap.setCenter({lat: 55.9477, lng: -3.2038})
    this.googleMap.setZoom(14);

  },

    getCurrentLocation: function(button) {
    button.onclick = function() {
      navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {lat: position.coords.latitude, lng: position.coords.longitude};

      this.googleMap.setCenter(pos);
      this.googleMap.setZoom(17);
    }.bind(this));
  }.bind(this);
}
}