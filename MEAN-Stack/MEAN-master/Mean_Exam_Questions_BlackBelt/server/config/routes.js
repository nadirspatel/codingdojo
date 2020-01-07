var userscontroller = require('./../controllers/users.js');
var questionscontroller = require('./../controllers/questions.js');
var scorescontroller = require('./../controllers/scores.js')
module.exports = function(app){

	app.get('/users', function(req,res){
		console.log("in get users route");
		userscontroller.index(req, res);
	});


	app.post('/users',function(req,res){
		console.log("in add user route")
		userscontroller.create(req, res);
	});

	app.get('/users/:id', function(req,res){
		conole.log("in read user route ")
		userscontroller.show(req, res)
	});

	app.post('/questions', function(req, res){
		console.log("in add newQuestion route")
		questionscontroller.create(req, res);
	});

	app.get('/questions', function(req, res){
		console.log("in get questions route")
		questionscontroller.index(req, res)
	})

	app.post('/scores', function(req, res){
		console.log('in post scores')
		scorescontroller.create(req, res)
	})

	app.get('/scores', function(req, res){
		console.log('in get scores route')
		scorescontroller.index(req, res)
	})
}