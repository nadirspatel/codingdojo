
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

// Require mongoose sequence for auto-increment ID in DB
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);


///////////////////////////////////////////////////////////////////////////////

// Require Mongoose for DB
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project
mongoose.connect('mongodb://localhost/Mongoose_Dashboard');
// Create our Mongoose Schemas: model Users. user will have a name that is a string and an age that is a number.
var AnimalSchema = new mongoose.Schema({
    id
    name: String,
    description: String
   })
   mongoose.model('Animals', AnimalSchema); // We are setting this Schema in our Models as 'User'
   var User = mongoose.model('Animals'); // We are retrieving this Schema from our Models, named 'User'

///////////////////////////////////////////////////////////////////////////////


// Use native promises
//mongoose.Promise = global.Promise;

// set up other middleware, such as session
const flash = require('express-flash');
app.use(flash());

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

///////////////////////////////////////////////////////////////////////////////

// Routes

// The root route -- we want to get all of the animals from the database and then render the index view passing it all of the users
app.get('/', function(req, res) {
    Animals.find({}, function(err, animals) {
      // This is the method that finds all of the animals from the database
      // Notice how the first parameter is the options for what to find and the second is the
      //   callback function that has an error (if any) and all of the animals
      // Keep in mind that everything you want to do AFTER you get the animals from the database must
      //   happen inside of this callback for it to be synchronous 
      // Make sure you handle the case when there is an error, as well as the case when there is no error
      //begin error logging
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully found the user information');
      } 
      // end error logging
      res.render("index");
    })
  })

// Display information about one mongoose
  app.get('/mongooses/:id', function(req, res) {
    Animals.find({}, function(err, animals) {
      // This is the method that finds all of the animals from the database
      // Notice how the first parameter is the options for what to find and the second is the
      //   callback function that has an error (if any) and all of the animals
      // Keep in mind that everything you want to do AFTER you get the animals from the database must
      //   happen inside of this callback for it to be synchronous 
      // Make sure you handle the case when there is an error, as well as the case when there is no error
      //begin error logging
      var id = request.params.id
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully found the user information');
      } 
      // end error logging
      res.render("index");
    })
  })


// Form for making new animal
app.post('/mongooses', function (req, res){
    if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully found the user information');
      } 
      // end error logging
      res.render("new");
    });


// Post data for /new goes here
app.get('/new/', function (req, res){
  var animal = new Animals(req.body);
  animal.save(function(err){
      if(err){
          // if there is an error upon saving, use console.log to see what is in the err object 
          console.log("We have an error!", err);
          // adjust the code below as needed to create a flash message with the tag and content you would like
          for(var key in err.errors){
              req.flash('registration', err.errors[key].message);
          }
          // redirect the user to an appropriate route
          res.redirect('/new');
      }
      else {
          res.redirect('/');
      }
  });
});

// Form for editing an animal
app.get('/mongooses/edit/:id', function (req, res){
    var id = request.params.id
    Animals.findOne({id:id}, function(err, animals) {
    Animals.name = name;
    Animals.description = description;
    if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully found the user information');
      } 
      // end error logging
      res.render("edit");
    })
});

// POST method for editing an animal
app.post('/mongooses/edit/', function (req, res){
    var id = request.params.id
    Animals.findOne({id:id}, function(err, animals) {
    Animals.name = name;
    Animals.description = description;
    if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully found the user information');
      } 
      // end error logging
      res.redirect("/edit/:id");
    })
});

// POST method for deleting an animal
app.post('/mongooses/delete/:id', function (req, res){
    var id = request.params.id
    Animals.remove({_id:id}, function(err, animals) {
    if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully deleted the animal information');
      } 
      // end error logging
      res.redirect("/");
    })
});
///////////////////////////////////////////////////////////////////////////////

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})