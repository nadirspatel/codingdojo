var mongoose = require('mongoose'); // require mongoose
var fs = require('fs'); // require file system

var path = require('path'); // require path

//mongoose database file path and name
mongoose.connect('mongodb://localhost/Restful_Tasks_API');

var models_path = (path.join(__dirname, './../models'));

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		// require the file (this runs the model file which registers the schema)
		require(models_path + '/' + file);
	}
})