var contentString = '<div id="content">' +'</div>'+'<h1 id="bodyContent">'+'<p><b>Isle of Mull</b></p>'+'<p>Mull and its islands have been continually inhabited since they became environments able to support man after the Ice Age. C. 6500 – 3500 BC. Mesolithic hunter-gatherers lived in caves such as Livingston’s cave on Ulva. C. 4000 – 2000 BC.  Neolithic farmers people lived here leaving behind burial cairns and stone axes. C. 2500 – 600 BC.</p>'+'<a href="http://www.isle-of-mull.net/attractions/history/history-of-mull/">'+'READ MORE'+'</a>'
var mainMap
var handleButtonClick = function(){
  mainMap.setCenter();
}

var initialize = function() {
  var center = {lat: 56.4392, lng: -6.0009};
  var mapDiv = document.querySelector('#main-map');
  mainMap = new MapWrapper(mapDiv, center, 9);
  mainMap.addMarker(center, contentString);
  mainMap.addClickEvent();

  var button = document.querySelector("button");
  button.onclick = handleButtonClick;

  var goToMyLocation = document.querySelector('#my-location');
  mainMap.getCurrentLocation(goToMyLocation);

 
}

window.onload = initialize;
