var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ScoreSchema = new mongoose.Schema({
	name: String,
	score: String,
	percentage: String
});
	
mongoose.model('Score', ScoreSchema);


