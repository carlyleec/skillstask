'use strict';

angular.module('graffitiAvl')
  .controller('MainCtrl', ['$scope', '$filter', 'pubStuffFact','geoJsonFact', function ($scope, $filter, pubStuffFact, geoJsonFact) {
  	var map = L.map('map').setView([35.5951125,-82.5511088], 12);
  	L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
   		attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    	subdomains: ['otile1','otile2','otile3','otile4']
	}).addTo(map);
	var graffitiWms = L.tileLayer.wms("http://opendataserver.ashevillenc.gov:80/geoserver/wms", {
	    layers: 'coagis:mobile311_graffiti_requests_view',
	    format: 'image/png',
	    transparent: true,
	    attribution: "City Of Asheville"
	}).addTo(map);
	// var graffitiJSON = L.geoJson(geoJsonFact.graffiti, {
	// 		    style: function (feature) {
	// 		    	return {color : "red"}
	// 		    },
	// 		    onEachFeature: function (feature, layer) {
	// 		        layer.bindPopup(feature.properties.address);
	// 		    }
	// 		})
	// map.on('zoomstart', function(e){
	// 	console.log(map.getZoom());
	// 	if(map.getZoom() > 15){
	// 		graffitiJSON.addTo(map);
	// 	}else{
	// 		map.removeLayer(graffitiJSON);
	// 	}
	// })

  	pubStuffFact.getListOfRequestTypes()
  		//when promise resolves...
  		.then(function(requestTypes){
  			for (var i = 0; i < requestTypes.length; i++) {
  				//We are interested in graffiti requests types; so we'll check request type by name
		  		if(requestTypes[i].request_type.name === "Graffiti"){ 
					pubStuffFact.getListOfRequests({"request_type_id" : requestTypes[i].request_type.id, "limit" : 1000})
						.then(function(requestsList){
							$scope.requestsList = $filter('orderBy')(requestsList.requests, '-request.date_created', false)
							//Get the latest requests
							var latestRequestDtime = $scope.requestsList[0].request.date_created*1000;
							var d = new Date();
							var dTime = d.getTime();
							$scope.daysSinceLastRequest = Math.floor((latestRequestDtime/dTime)/3600);
							var dTime30DaysAgo = d.setDate(d.getDate() - 30);
							var dTime365DaysAgo = d.setDate(d.getDate() - 365);
							var count30days = 0;
							var count365days = 0;
							for(var i = 0; i < $scope.requestsList.length; i++) {
								if($scope.requestsList[i].request.date_created*1000 > dTime30DaysAgo){
									count30days += 1
								}
								if($scope.requestsList[i].request.date_created*1000 > dTime365DaysAgo){
									count365days += 1
								}
							};
							$scope.requestsLast30days = count30days;
							$scope.requestsLast365days = count365days;
							// $scope.requestsList = requestsList;
							// var d = new Date();

						})
				}
		  	};
  		});


  	
  	
}]);
