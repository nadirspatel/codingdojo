var mongoose = require('mongoose');
var Score = mongoose.model('Score');

module.exports = (function(){
	console.log('in Score controller');
	return {

		index: function(req, res){
			console.log('polls show');
			Score.find({}, function(err, scores){
				if(err){
					console.log('cant find scores')
				}else{
					console.log(scores)
					res.json(scores);
				}
			})

		},


		create: function(req, res){

			console.log(req.body)
			if (!req.body.one || !req.body.twoo || !req.body.tree){
				console.log("did not anser correct")
				var message = {message:"anser all questions"}
				res.json(message)
		
			}else{
				var count = 0
				if (req.body.one == "correct"){
					count += 1
				}if (req.body.twoo == "correct"){
					count += 1
				}if (req.body.tree == "correct"){
					count += 1
				}

				var percentage = 0
				if (count == 1){
					percentage= "33.33%"
				}if (count == 2){
					percentage= "66.66%"
				}if (count == 3){
					percentage= "100%"
				}
				var result = {}
				result.score = count
				result.name= req.body.name
				result.percentage = percentage
				console.log(result)
				var score = new Score(result)
				score.save(function(err,result){
					if( err){
						console.log(err)
					}else{

						res.json(result)
					}
				})

			}
		}	

	}
})()