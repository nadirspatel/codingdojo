var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/MovieReviews-BeltExam');

mongoose.Promise = global.Promise; // optional

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function () {
    console.log("Listening on localhost:8000");
});
