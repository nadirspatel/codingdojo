var mongoose = require('mongoose');

var TasksSchema = new mongoose.Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	completed: {type: Boolean, default: false}
}, {timestamps: true})

mongoose.model('Tasks', TasksSchema);