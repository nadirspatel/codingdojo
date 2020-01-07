myApp.factory('questionFactory', function($http, $location){
	var factory = {}

	factory.getQuestions =function(callback){
		$http.get('/questions').success(function(data){
			callback(data)
		})
	}

	factory.addQuestion = function(newQuestion, callback){
		console.log('addQuestion factory', newQuestion)
		$http.post('/questions',  newQuestion).success(function(data){
				callback(data)
		})
	}



	return factory;
})