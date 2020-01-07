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
    res.render("index");
})

// handle the people button using AXIOS for AJAX call
const axios = require('axios');
app.get('/people', function(req, res){
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get('https://swapi.co/api/people')
    .then(data => {
        // log the data before moving on! 
        console.log(data);
        // rather than rendering, just send back the json data!
        res.json(data);
    })
    .catch(error => {
        // log the error before moving on!
        console.log(error);
        res.json(error);
    })
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});


