var mongoose = require('mongoose');

var FiftyFiveSchema = new mongoose.Schema({
	name: {type: String, required: true},
}, {timestamps: true})

mongoose.model('FiftyFive', FiftyFiveSchema);