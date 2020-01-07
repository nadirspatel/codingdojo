myApp.controller('createsController', function($scope, $routeParams, $location, userFactory, questionFactory, $window){
	currentUser = null;

	userFactory.readUser(function(data){
		console.log('here')
		currentUser = data;
		$scope.user = data;
	});

	$scope.addQuestion = function(newQuestion){
		console.log('addQuestion')
		$scope.errors = {}
		questionFactory.addQuestion(newQuestion, function(data){
			console.log(data, "in addQuestion controller")
			if (data.errors){
				$scope.errors = data.errors
				$scope.newQuestion= {}
			} else{
				var message = "You success full added a question"
				$window.alert(message)
				$location.path('/dashboard');
			}
		})
	}

	$scope.cancel = function(){
		var message = "you did not added any questions."
		$window.alert(message)
		$location.path('/dashboard', function()	{
		});
		
	}

})