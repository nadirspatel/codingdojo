myApp.factory('gameFactory', function($http, $location){
	var factory = {}

	factory.addAnswer = function(answer, callback){
		$http.post('/scores', answer).success(function(data){
			callback(data)

		})

	}

	factory.getScores =function(callback){
		$http.get('/scores').success(function(data){
			callback(data)
		})
	}



	return factory;
})