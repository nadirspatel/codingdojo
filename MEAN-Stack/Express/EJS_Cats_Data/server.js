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

// setup an app that displays list of cats at localhost:8000/cats
app.get("/cats", function Cat(request, response){
    // hard-coded user data
    var cats_array = [
        {name: "Chucky", food: "Pizza", age: 12, sleepingspots: ["On the lap", "Under the car", "On the roof"], image: "persiancat.jpg"},
        {name: "Spanky", food: "Human Poop", age: 4, sleepingspots: ["In the cars engine", "In the food blender", "With a firecracker in its butt"], image: "uglycat.jpg"}
    ];
    response.render('cats', {cats: cats_array}); // render it in cars.ejs
})

app.get("/cats/Chucky", function (request, response){
    var cats_array = [
        {name: "Chucky", food: "Pizza", age: 12, sleepingspots: ["On the lap", "Under the car", "On the roof"], image: "persiancat.jpg"},
    ];
    response.render('details', {cats: cats_array}); // render it in details.ejs
})

app.get("/cats/Spanky", function (request, response){
    var cats_array = [
        {name: "Spanky", food: "Human Poop", age: 4, sleepingspots: ["In the cars engine", "In the food blender", "With a firecracker in its butt"], image: "uglycat.jpg"}
    ];
    response.render('details', {cats: cats_array}); // render it in details.ejs
})

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1><br><h1>EJS Cat Data Assignment</h1>");
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})