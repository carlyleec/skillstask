'use strict';
//This factory provides an api access to the Public Stuff API for the City of Asheville

graffitiAvl.factory('pubStuffFact', function ($http, $q) {
  	//instatiate the factory object
  	var pubStuffFact = {};
  	//Private variables
  	var client_id = 819;
  	var space_id = 3737;
  	var api_key = "58j013k159vpqz87xd85df0uy7epvl";

  	//Public API
  		//All API calls use the $q library to resolve promises asynchronously

  	//Get a list of request types as JSON
  	pubStuffFact.getListOfRequestTypes = function(){
  		var q = $q.defer();
  		var params = {
  			
  		};
  		$http.get("https://www.publicstuff.com/api/2.0/requesttypes_list?return_type=json&client_id=819&api_key=58j013k159vpqz87xd85df0uy7epvl")
  			.success(function(returnTypes) {
	      		console.log(returnTypes);
	    	});
	    return q.promise
  	}
  	return pubStuffFact
  });