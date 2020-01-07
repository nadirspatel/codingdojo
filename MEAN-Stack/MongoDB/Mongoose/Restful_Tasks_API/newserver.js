var express = require('express');
var app = express();

var mongoose = require('mongoose');
require('./server/config/mongoose.js');
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Require path
var path = require('path');

var router = require('./server/config/routes.js');
router(app);

//fire up
PORT = 8000;
app.listen(8000, function(){
console.log("Listening on port " + PORT);
})
