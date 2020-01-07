// require express
var express = require("express");

// require session
var session = require('express-session')

// path module -- try to figure out where and why we use this
var path = require("path");

// create the express app
var app = express();

// use app session
app.use(session({
    secret: 'keyboardkitten',
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
    res.render("index");
})

// post route for adding a user
app.post('/go', function(req, res) {
 console.log("POST DATA", req.body);
 name = req.body.name;
 location = req.body.location
 language = req.body.language
 comment  = req.body.comment
 res.render('result', req.body);
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});


