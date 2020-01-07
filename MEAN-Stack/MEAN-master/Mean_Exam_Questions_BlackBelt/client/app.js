	var myApp = angular.module('myApp', ['ngRoute']);


(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',{
				controller: 'usersController',
				templateUrl: "partials/users/index.html"
			})
			.when('/dashboard',{
				controller: 'dashboardController',
				templateUrl: "partials/game/dashboard.html"
			})
			.when('/create/:id',{
				controller: 'createsController',
				templateUrl: "partials/game/create.html"	
			})
			.when('/play/:id',{
				controller: 'playController',
				templateUrl: "partials/game/game.html"
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}());