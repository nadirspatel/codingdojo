
///////////////////////////////////////////////////////////////////////////////
// Restful Tasks API
// Language: NodeJS + MongoDB/Mongoose
// Purpose: Create restful tasks API
// Author: Nadir Patel on Nov 10, 2018
///////////////////////////////////////////////////////////////////////////////

// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

///////////////////////////////////////////////////////////////////////////////
// Database
///////////////////////////////////////////////////////////////////////////////

// Require Mongoose for DB
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose 
mongoose.connect('mongodb://localhost/Restful_Tasks_API');

// Create our Mongoose Schemas: model Tasks.
var TasksSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 }, // add validations
  description: { type: String, required: true, minlength: 5, maxlength: 150 } // add validations
  }, {timestamps: true});
   mongoose.model('Tasks', TasksSchema); // We are setting this Schema in our Models as 'Tasks'
   var Tasks = mongoose.model('Tasks'); // We are retrieving this Schema from our Models, named 'Tasks'

///////////////////////////////////////////////////////////////////////////////

// Use native promises
mongoose.Promise = global.Promise;

///////////////////////////////////////////////////////////////////////////////
// MIDDLEWARE: express-flash, express-session, bcrypt
///////////////////////////////////////////////////////////////////////////////

// include flash messages
var flash = require('express-flash');
app.use(flash()); // tell app to use flash messages
//use app session - required for flash messages
var session = require('express-session');
app.use(session({
    secret: 'tonythetigersaystheyregreaaaat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

//Setup bCrypt: options are bcrypt-as-promised and mongoose-bcrypt
const bcrypt = require('mongoose-bcrypt');
// Hashing
// bcrypt.hash('password_from_form', 10)
// .then(hashed_password => {
// })
// .catch(error => {
// });
// Whats the '10'? - That's the saltrounds, the number of times the bcrypt library will generate a more complex hashed password. 10 is a good standard.

// Validation
// bcrypt.compare('password_from_form', 'stored_hashed_password')
// .then( result => {
// })
// .catch( error => { 
// })


// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App for jSON response
app.use(bodyParser.json());
// and for form post
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
///////////////////////////////////////////////////////////////////////////////

// The root route -- we want to get all of the tasks from the database and print in json for API
app.get('/api', function(req, res) {
    Tasks.find({}, function(err, tasks) {
      console.log(tasks);
      // This is the method that finds all of the tasks from the database
      //begin error logging
      if(err){
        // if there is an error upon saving, use console.log to see what is in the err object 
        console.log("We have an error!", err);
        // adjust the code below as needed to create a flash message with the tag and content you would like
        for(var key in err.errors){
            req.flash('viewtasks', err.errors[key].message);
        }
      }
      // end error logging
      res.json({tasks:tasks});
    })
  })

// Create a HTML viewable version called Dashboard
app.get('/', function(req, res) {
    Tasks.find({}, function(err, tasks) {
      console.log(tasks);
      // This is the method that finds all of the tasks from the database
      //begin error logging
      if(err){
        // if there is an error upon saving, use console.log to see what is in the err object 
        console.log("We have an error!", err);
        // adjust the code below as needed to create a flash message with the tag and content you would like
        for(var key in err.errors){
            req.flash('viewtasks', err.errors[key].message);
        }
      }
      // end error logging
      res.render("index", {tasks:tasks});
    })
  })

// Display information about one task
  app.get('/details/:id', function(req, res) {
    Tasks.find({'_id': req.params.id}, function(err, tasks) {
      // This is the method that finds one of the animals from the database
      //begin error logging
      if(err){
        // if there is an error upon saving, use console.log to see what is in the err object 
        console.log("We have an error!", err);
        // adjust the code below as needed to create a flash message with the tag and content you would like
        for(var key in err.errors){
            req.flash('viewtasks', err.errors[key].message);
        }
      }
      console.log(tasks)
      //end error logging
      res.render("detail", {tasks: tasks})
     })
  })


// Form for making new task
app.get('/new', function (req, res){
      res.render("new");
    });


// Post data for /new goes here
app.post('/new/', function (req, res){
  var task = new Tasks(req.body);
  task.save(function(err){
      if(err){
          // if there is an error upon saving, use console.log to see what is in the err object 
          console.log("We have an error!", err);
          // adjust the code below as needed to create a flash message with the tag and content you would like
          for(var key in err.errors){
              req.flash('newtask', err.errors[key].message);
          }
          // redirect the user to an error route
          res.redirect('/new');
      }
      else {
          // redirect the user to an success route
          res.redirect('/');
      }
  });
});


// Form for editing an task
app.get('/edit/:id', function (req, res){
    var id = req.params.id;
    Tasks.find({'_id': req.params.id}, function(err, tasks) {
    if(err){
      // if there is an error upon saving, use console.log to see what is in the err object 
      console.log("We have an error!", err);
      // adjust the code below as needed to create a flash message with the tag and content you would like
      for(var key in err.errors){
          req.flash('edittask', err.errors[key].message);
      }
      // redirect the user to an appropriate route
      res.redirect('/');
  }
  else {
    res.render("edit", {tasks:tasks});
  }
    })
});


// POST method for editing an task in DB
app.post('/edit', function (req, res){
  Tasks.findByIdAndUpdate(req.body._id, {name:req.body.name,description:req.body.description}, function(err, animals) {
      if(err){
        // if there is an error upon saving, use console.log to see what is in the err object 
        console.log("We have an error!", err);
        // adjust the code below as needed to create a flash message with the tag and content you would like
        for(var key in err.errors){
            req.flash('edittask', err.errors[key].message);
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
    Tasks.findByIdAndRemove({'_id': req.params.id}, function(err, tasks) {
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