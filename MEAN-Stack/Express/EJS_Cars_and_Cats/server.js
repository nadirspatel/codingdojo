// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);

// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
console.log("Dirname is", __dirname); // two underscores before dirname

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// now for ejs lets install ejs first: npm install ejs

// setup an app that displays list of cars at localhost:8000/cars
app.get("/cars", function (request, response){
    // hard-coded user data
    var cars_array = [
        {make: "Tesla", model: "Model S", image: "models.jpg"},
        {make: "Tesla", model: "Model X", image: "modelx.png"}
    ];
    response.render('cars', {cars: cars_array}); // render it in cars.ejs
})

// setup an app that displays list of cats at localhost:8000/cats
app.get("/cats", function (request, response){
    // hard-coded user data
    var cats_array = [
        {breed: "Persian", type: "Straight", image: "persiancat.jpg"},
        {breed: "Ugly", type: "Gay", image: "uglycat.jpg"}
    ];
    response.render('cats', {cats: cats_array}); // render it in cars.ejs
})

// setup an app that renders new_car.ejs
app.get('/cars/new', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.render('cars_new'); // render it in cars_new.ejs
})

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1><h1>lick me</h1>");
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})