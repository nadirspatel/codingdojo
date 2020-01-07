var mongoose = require('mongoose');
var FiftyFive = mongoose.model('FiftyFive');


module.exports = {
	showAll: function(req, res){
		FiftyFive.find({}, function(err, fiftyfives){
			if(err){
				console.log(err);
			}
			else{
				res.json(fiftyfives);		
			}
		})
	},

	showOne: function(req, res){
		FiftyFive.findOne({name: req.params.name}, function(err, fiftyfive){
			if(err){
				console.log(err);
			}
			else{
				res.json(fiftyfive);
			}
		})
	},

	new: function(req, res){
		var fiftyfive = new FiftyFive({name: req.params.name});
		fiftyfive.save(function(err){
			if(err){
				console.log(err);
			}
			else{
				res.redirect("/");
			}
		})

	},
	
	delete: function(req, res){
		FiftyFive.findOne({name: req.params.name}, function(err, fiftyfive){
			if(err){
				console.log(err);
			}
			else{
				FiftyFive.remove({name: fiftyfive.name}, function(err){
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
}