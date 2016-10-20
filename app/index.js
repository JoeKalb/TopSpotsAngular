// top level application
myApp = angular.module('myApp', []);

// creating the controller functionality 
myApp.controller('MainController', ['$scope', '$http',  function($scope, $http){ //getting the $scope and $http functions
	$http.get('http://localhost:55519/api/TopSpots') // acquiring the JSON file
	.then(function (potato) { // ".then" using the info in the file
		$scope.bakinsoda = potato.data; // putting "places" into "$scope" and accessing the topspots data
	});

	$scope.addData = function (newName, newDes, newLoc)
    {
    	var config = {
        	params: {
        		name: newName ,
        		description: newDes ,
        		location: newLoc
        	}
      	};
      	$scope.stuff = config;
		
	};	
}]);
