var mongoose = require('mongoose');
var FiftyFive = mongoose.model('FiftyFive');
var fiftyfives = require('../controllers/fiftyfives.js')
// within the anonymous function, write your routes
// as you would in a single server.js file
module.exports = function(app){
	
	app.get("/", function(req, res){
		fiftyfives.showAll(req, res);
	})

	app.get("/:name", function(req, res){
		fiftyfives.showOne(req, res);
	})

	app.get("/new/:name", function(req, res){
		fiftyfives.new(req, res);
	})

	app.get("/remove/:name", function(req, res){
		fiftyfives.delete(req, res);
	})
}