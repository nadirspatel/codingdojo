var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

module.exports = (function(){
	console.log('in controller questions');
	return {


		index: function(req, res){
			console.log('polls show');
			Question.find({}, function(err, questions){
				if(err){
					console.log('cant find questions')
				}else{
					console.log(questions)
					res.json(questions);
				}
			})

		},

		// question: function(req, res){ 
		// 	Question.findOne({_id: req.params.id}, function(err, ques){
		// 	console.log(ques, "in bend controller")
		// 		if(err){
		// 			console.log(err)
		// 		} else {
		// 			res.json(ques)
		// 		}
		// 	})
		// },


	// 	delete: function(req, res){
	// 		Poll.remove({_id: req.params.id}, function(err, poll){
	// 			if(err){
	// 				console.log(err);
	// 				console.log('looks like we have an error in delte Controller');
	// 			} else {
	// 				res.json(poll);
	// 			}
	// 		})
	// 	}, 

		create: function(req, res){
			var question = new Question(req.body);
			console.log(req.body, 'this is the question')
			question.save(function(err, results){
				if(err){
					console.log(err, "here is vallidaton")
					res.json(err)

				} else{			
					console.log(results, "save user, question")
					res.json(results)
				}
					
			})

		}
	}
})()