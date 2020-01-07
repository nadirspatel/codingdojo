// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

///////////////////////////////////////////////////////////////////////////////
// DATABASE
///////////////////////////////////////////////////////////////////////////////

// Require Mongoose for DB
var mongoose = require('mongoose');
// Database connect (mongodb://localhost/:name)
mongoose.connect('mongodb://localhost/MyPeople_API');

// Create our Mongoose Schemas
var FirstAngularAppSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2}, // add validations
  description: { type: String, required: true, min: 1, max: 150} // add validations
  }, {timestamps: true});
   mongoose.model('MyPeople_API', MyPeopleAppSchema); // We are setting this Schema in our Models 
   var MyPeople = mongoose.model('MyPeople_API'); // We are retrieving this Schema from our Models

///////////////////////////////////////////////////////////////////////////////
// Middleware: express-flash, express-session
///////////////////////////////////////////////////////////////////////////////

// include flash messages
const flash = require('express-flash'); 
app.use(flash()); // tell app to use flash messages
//use app session - required for flash messages
var session = require('express-session');
app.use(session({
    secret: 'tonythetigersaystheyregreaaaat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');

// Include angular files from /dist:
app.use(express.static( __dirname + '/public/dist/public' ));

///////////////////////////////////////////////////////////////////////////////
// Routes
///////////////////////////////////////////////////////////////////////////////

app.get('/', function(req, res) {
  MyPeople_API.find( {}, function(err, allpeople) {
    console.log(allpeople);
    res.json({message: "Success", data: allpeople});
    } // end callback
  )} //end function for /root
  ); // close app.get


///////////////////////////////////////////////////////////////////////////////

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
