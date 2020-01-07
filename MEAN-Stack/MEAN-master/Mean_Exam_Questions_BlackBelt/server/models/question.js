var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new mongoose.Schema({
	question: String,
	answer: String,
	wronganswer1: String,
	wronganswer2: String
});
	
mongoose.model('Question', QuestionSchema);

QuestionSchema.path('question').required(true, 'question cannot be blank');
QuestionSchema.path('question').minlength(15, 'question must be 15 caracters');
QuestionSchema.path('answer').required(true, 'answer cannot be blank');
QuestionSchema.path('wronganswer1').required(true, 'wronganswer1 cannot be blank');
QuestionSchema.path('wronganswer2').required(true, 'wronganswer2 cannot be blank');

