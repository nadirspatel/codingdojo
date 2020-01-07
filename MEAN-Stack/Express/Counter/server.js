// require express
var express = require("express");

// require session
var session = require('express-session')

// path module -- try to figure out where and why we use this
var path = require("path");

// create the express app
var app = express();

// setup our counter
var counter = 0;

// use app session
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

// require body-parser
var bodyParser = require('body-parser');
// ... and use it!
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    session.counter = counter++
    res.send("<h1>You have connected " + counter + " times </h1>");
    //res.render("index", session.counter);
})

// post route for adding a user
app.post('/go', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.render('result');
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});

