
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

///////////////////////////////////////////////////////////////////////////////

// Require Mongoose for DB
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project
mongoose.connect('mongodb://localhost/Mongoose_Dashboard');

// Create our Mongoose Schemas: model Animals. animalß will have a name that is a string and an description that is a string, ID is auto incremented by mongoose-sequence module.
var AnimalSchema = new mongoose.Schema({
  animal_id: { type: Number},
  name: { type: String, required: true, minlength: 2}, // add validations
  description: { type: String, required: true, min: 1, max: 150} // add validations
  }, {timestamps: true});
   mongoose.model('Animals', AnimalSchema); // We are setting this Schema in our Models as 'User'
   var Animals = mongoose.model('Animals'); // We are retrieving this Schema from our Models, named 'Animals'

///////////////////////////////////////////////////////////////////////////////


// Use native promises
mongoose.Promise = global.Promise;

// Set up other middleware, such as session
const flash = require('express-flash'); // include flash messages
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
      console.log(animals);
      // This is the method that finds all of the animals from the database
      //begin error logging
      if(err){
        // if there is an error upon saving, use console.log to see what is in the err object 
        console.log("We have an error!", err);
        // adjust the code below as needed to create a flash message with the tag and content you would like
        for(var key in err.errors){
            req.flash('viewanimals', err.errors[key].message);
        }
      }
      // end error logging
      res.render("index", {animals:animals});
    })
  })


// Display information about one mongoose
  app.get('/details/:id', function(req, res) {
    Animals.find({'_id': req.params.id}, function(err, animals) {
      // This is the method that finds one of the animals from the database
      //begin error logging
      if(err){
        // if there is an error upon saving, use console.log to see what is in the err object 
        console.log("We have an error!", err);
        // adjust the code below as needed to create a flash message with the tag and content you would like
        for(var key in err.errors){
            req.flash('viewanimal', err.errors[key].message);
        }
      }
      console.log(animals)
      //end error logging
      res.render("detail", {animals: animals})
     })
  })


// Form for making new animal
app.get('/new', function (req, res){
  //   if(err){
  //     // if there is an error upon saving, use console.log to see what is in the err object 
  //     console.log("We have an error!", err);
  //   // adjust the code below as needed to create a flash message with the tag and content you would like
  //     for(var key in err.errors){
  //       req.flash('newanimal', err.errors[key].message);
  //     }
  //   }
  // }
      // end error logging
      res.render("new");
    });


// Post data for /new goes here
app.post('/new/', function (req, res){
  var animal = new Animals(req.body);
  animal.save(function(err){
      if(err){
          // if there is an error upon saving, use console.log to see what is in the err object 
          console.log("We have an error!", err);
          // adjust the code below as needed to create a flash message with the tag and content you would like
          for(var key in err.errors){
              req.flash('newanimal', err.errors[key].message);
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
app.get('/edit/:id', function (req, res){
    var id = req.params.id;
    Animals.find({'_id': req.params.id}, function(err, animals) {
    if(err){
      // if there is an error upon saving, use console.log to see what is in the err object 
      console.log("We have an error!", err);
      // adjust the code below as needed to create a flash message with the tag and content you would like
      for(var key in err.errors){
          req.flash('editanimal', err.errors[key].message);
      }
      // redirect the user to an appropriate route
      res.redirect('/');
  }
  else {
    res.render("edit", {animals:animals});
  }
    })
});


// POST method for editing an animal in DB
app.post('/edit', function (req, res){
  Animals.findByIdAndUpdate(req.body._id, {name:req.body.name,description:req.body.description}, function(err, animals) {
      if(err){
        // if there is an error upon saving, use console.log to see what is in the err object 
        console.log("We have an error!", err);
        // adjust the code below as needed to create a flash message with the tag and content you would like
        for(var key in err.errors){
            req.flash('editanimal', err.errors[key].message);
        }
        // redirect the user to an appropriate route on error
        res.redirect('/edit/:' + id);
    }
    else { // take them to success page
      res.redirect("/");
    }
    });
});


// GET method for deleting an animal
app.get('/delete/:id', function (req, res){
    Animals.findByIdAndRemove({'_id': req.params.id}, function(err, animals) {
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