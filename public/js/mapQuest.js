function initMap() {
	L.mapquest.key = 'aADfnwOTJY7XvG5pGNqMflobP8pKER2A';

	var map = L.mapquest.map('map', {
  		center: [32.87873652854944, -117.23591818889847],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12
	});

	//add UCSD marker to map
	L.marker([32.87873652854944, -117.23591818889847]).addTo(map);
}