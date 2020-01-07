var mongoose = require('mongoose');
var Task = mongoose.model('Tasks');
var tasks = require('../controllers/tasks.js')
// within the anonymous function, write your routes
// as you would in a single server.js file
module.exports = function(app){
	
	// show all users in json
	app.get("/", function(req, res){
		tasks.showAll_json(req, res);
	})

	// show all users in body
	app.get("/", function(req, res){
		tasks.showAll(req, res);
	})

	//show one task in json
	app.get("/:name", function(req, res){
		tasks.showOne_json(req, res);
	})

	//show one user in body
	app.get("/:name", function(req, res){
		tasks.showOne(req, res);
	})

	// create new user in json
	app.get("/new/:name|:description", function(req, res){
		tasks.new_json(req, res);
	})

	// create new user in body
	app.get("/new/:name|:description", function(req, res){
		tasks.new(req, res);
	})

	// delete user in json
	app.get("/remove/:name", function(req, res){
		fiftyfives.delete_json(req, res);
	})

	// delete user in body
	app.get("/remove/:name", function(req, res){
		fiftyfives.delete(req, res);
	})

}