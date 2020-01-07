myApp.controller('dashboardController', function($scope, $routeParams, $location, userFactory, questionFactory, gameFactory){
	currentUser = null;

	userFactory.readUser(function(data){
		console.log('here')
		currentUser = data;
		$scope.user = data;
	});

	gameFactory.getScores(function(data){
		$scope.scores= data
	})
})