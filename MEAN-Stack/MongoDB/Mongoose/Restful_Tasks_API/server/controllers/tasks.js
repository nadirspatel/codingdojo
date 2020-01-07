var mongoose = require('mongoose');
var Tasks = mongoose.model('Tasks');

module.exports = {

	// show all users in json
	showAll_json: function(req, res){
		Tasks.find({}, function(err, tasks){
			if(err){
				console.log(err);
			}
			else{
				res.json(tasks);		
			}
		})
	},

	// render all users in body
		showAll: function(req, res){
			Tasks.find({}, function(err, tasks){
				if(err){
					console.log(err);
				}
				else{
					res.render("index", {tasks:tasks});		
				}
			})
		},

	// find one user from database based on _id
	showOne_json: function(req, res){
		Tasks.findOne({_id: req.params._id}, function(err, task){
			if(err){
				console.log(err);
			}
			else{
				res.json(task);
			}
		})
	},

	// find one user from database based on _id
	showOne: function(req, res){
		Tasks.findOne({_id: req.params._id}, function(err, task){
			if(err){
				console.log(err);
			}
			else{
				res.render("user", {task:task});
			}
		})
	},

	// create new user in json
	new_json: function(req, res){
		var task = new Tasks(
			{title: req.params.title, description: req.params.description});
		task.save(function(err){
			if(err){
				console.log(err);
			}
			else{
				res.redirect("/");
			}
		})
	},

	// create new user in json
	new: function(req, res){
		var task = new Tasks(
			{title: req.params.title, description: req.params.description});
		task.save(function(err){
			if(err){
				console.log(err);
			}
			else{
				res.redirect("/");
			}
		})
	},

	// delete a user based on _id in json
	delete_json: function(req, res){
		Tasks.findOne({_id: req.params._id}, function(err, task){
			if(err){
				console.log(err);
			}
			else{
				Tasks.remove({_id: task._id}, function(err){
					if(err){
						console.log(err);
					}
					else{
						res.redirect("/");
					}
				})
			}
		})
	},

	// delete a user based on _id in body
	delete: function(req, res){
		Tasks.findOne({_id: req.params._id}, function(err, task){
			if(err){
				console.log(err);
			}
			else{
				Tasks.remove({_id: task._id}, function(err){
					if(err){
						console.log(err);
					}
					else{
						res.redirect("/");
					}
				})
			}
		})
	} 

	//end controllers

}