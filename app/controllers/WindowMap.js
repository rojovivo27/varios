var args = arguments[0] || {};

$.btnAnnotation.addEventListener("click", function(e) {
	
	$.mapView.removeAllAnnotations();
	
	var mountainView = Alloy.Globals.Map.createAnnotation({
		latitude: 37.390749,
		longitude: -122.081651,
		title: "Appcelerator Headquarters",
		subtitle: "Mountain View, CA",
		pincolor: Alloy.Globals.Map.ANOTATION_RED,
		myid: 1
	});
	$.mapView.setRegion({
		latitude: 37.390749,
		longitude: -122.081651
	});
	$.mapView.addAnnotation(mountainView);
});

$.btnPosition.addEventListener("click", function(evt) {
	
	if(Ti.Network.online){
		Ti.Geolocation.purpose = "Recibir la localizacion del usuario";
		Titanium.Geolocation.getCurrentPosition(function(e){
			
			if(!e.success || e.error){
				alert("No es posible encontrar la localizacion");
			} else {
				//
				alert(e.coords);
				$.mapView.removeAllAnnotations();
				
				var user = Alloy.Globals.Map.createAnnotation({
					latitude: e.coords.latitude,
					longitude: e.coords.longitude,
					title: "User Location",
					subtitle: "You are here!",
					pincolor: Alloy.Globals.Map.ANOTATION_BLUE,
					myid: 1
				});
				$.mapView.setRegion({
					latitude: e.coords.latitude,
					longitude: e.coords.longitude
				});
				$.mapView.addAnnotation(user);
			}
		});
	} else {
		alert("Se requiere conexion a internet para utilizar geolocalizacion");
	}
});