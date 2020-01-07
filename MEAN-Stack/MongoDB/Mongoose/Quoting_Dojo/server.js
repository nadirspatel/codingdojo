
// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

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

// Use native promises
//mongoose.Promise = global.Promise;

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');

/////////////////////////////////////////////////////////////////////////////

// Require Mongoose for DB
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "DojoQuotes" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project
mongoose.connect('mongodb://localhost/DojoQuotes');
// Create our Mongoose Schemas: model Quote. user will have full_name that is a string and an quote that is a string.
var QuoteSchema = new mongoose.Schema({
    full_name: { type: String, required: true, minlength: 2}, // add validations
    my_quote: { type: String, required: true, min: 1, max: 150} // add validations
   }, {timestamps: true});
   mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
   var Quote = mongoose.model('Quote'); // We are retrieving this Schema from our Models, named 'Quote'

/////////////////////////////////////////////////////////////////////////////

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

/////////////////////////////////////////////////////////////////////////////
// Routes

// root route for adding new quote or skipping to quotes page
app.get('/', function(req, res) {
    res.render("index");
})

// The quotes route -- we want to get all of the quotes from the database and then render the quotes view
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        console.log(quotes)
      // This is the method that finds all of the quotes from the database
      // Notice how the first parameter is the options for what to find and the second is the
      //   callback function that has an error (if any) and all of the users
      // Keep in mind that everything you want to do AFTER you get the users from the database must
      //   happen inside of this callback for it to be synchronous 
      // Make sure you handle the case when there is an error, as well as the case when there is no error
        if(err){
            // if there is an error upon saving, use console.log to see what is in the err object 
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('getquotes', err.errors[key].message);    
            }
        }
      // end error logging
      res.render("quotes", {quotes:quotes});
    });
  });

// Add new quote on POST 
app.post('/quotes', function (req, res){
  var quotes = new Quote(req.body);
  quotes.save(function(err){
      if(err){
          // if there is an error upon saving, use console.log to see what is in the err object 
          console.log("We have an error!", err);
          // adjust the code below as needed to create a flash message with the tag and content you would like
          for(var key in err.errors){
              req.flash('addquote', err.errors[key].message);
          }
          // redirect the user to an appropriate route on error
          res.redirect('/');
      }
      else {
          res.redirect('/quotes');
      }
  });
});

/////////////////////////////////////////////////////////////////////////////
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})