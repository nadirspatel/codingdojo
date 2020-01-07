myApp.controller('playController', function($scope, $routeParams, $location, userFactory, questionFactory, gameFactory,$window){
	currentUser = null;
	var questions = []
	var gameQuestoins = []

	userFactory.readUser(function(data){
		console.log('here', data)
		currentUser = data;
		$scope.user = data;
	});

	questionFactory.getQuestions(function(data){
		questions = data
		if (questions.length > 4){
			console.log(questions, 'this arr questions')
			var a = Math.floor(Math.random()*questions.length);
			question= questions[a]
			questions.splice(a,1)
			console.log(question)
			console.log(questions)
			gameQuestoins.push(question)
			console.log(gameQuestoins)

			var a = Math.floor(Math.random()*questions.length);
			question= questions[a]
			questions.splice(a,1)
			console.log(question)
			console.log(questions)
			gameQuestoins.push(question)
			console.log(gameQuestoins)

			var a = Math.floor(Math.random()*questions.length);
			question= questions[a]
			questions.splice(a,1)
			console.log(question)
			console.log(questions)
			gameQuestoins.push(question)
			console.log(gameQuestoins, 'this sushould have 3 ')

			$scope.questions = gameQuestoins
	
		}else {
			$scope.message = 'you need to create more questions first'
		}
	});

	$scope.addAnswer = function(answer){
		console.log(answer)
		if (answer == undefined){
			$scope.message = 'Anser all the questions'
		} else{
			answer.name = currentUser.name
			gameFactory.addAnswer(answer, function(data){
				console.log(data.message)
				if (data.message){
					$scope.message = data.message
				} else{

					console.log(data, "this is success")
					$location.path('/dashboard')
				}

			})
		}
	}


	$scope.cancel = function(){
		var message = "you did not submit your answers."
		$window.alert(message)
		$location.path('/dashboard', function()	{
		});
		
	}

	
})