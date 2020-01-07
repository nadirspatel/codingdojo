console.log("NOW: ");
console.log("Declaring and assigning variable 'ninja'.");
var ninja = 'Master Gimpy';
setTimeout( function myCallbackFunction(){
  console.log("LATER AFTER 20 SECONDS: ")
  console.log(ninja, "MOVES IN AGAIN"); }, 20000
);
console.log("Printing ninja value.");
console.log(ninja, "MOVING NOW");
//Hopefully, by running the code, you can see the important role our callback function plays: It supplies setTimeout() with a chunk of code to run once its timer has elapsed. You’ve probably already gathered that we are using setTimeout() to represent Ajax requests to the server. What’s Ajax again? Asynchronous JavaScript and XML. Since it takes time to get a response from a server, we can use setTimeout() to simulate that wait-time, but otherwise we should have no reason to use it in our assignments.


var a = 2; 
var b = function() { console.log("lets do something"); };
function doSomething(x) {
  console.log(typeof(x)); // typeof used here
}
doSomething(a);
doSomething(b);
// Variable a is a number, while b is a function, which we’ve confirmed by logging the typeof argument that was passed into our doSomething function. Now, what if we wanted to alter our code so that if the data type of the argument is a function, invoke that function.


function doSomething(possibleCallback) {
    if (typeof(possibleCallback) === 'function'){
      console.log('possibleCallback is a callback!');
      possibleCallback(); //we can invoke the callback!
    }
    else {
      console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
    }
  }
  doSomething(function myCallback(){ console.log('yes, I am a callback!') });
  doSomething('string');


  function makePasta(pasta, makeSauce) {
    console.log("Boiling the water");
    console.log("Putting " + pasta + " in the water.. wait 2 secs", 2000);
    console.log("Pasta is done!");
    return pasta + " Pasta! Voila!";
  }
  makePasta("Penne");
  makePasta("Farfalle");
  makePasta("Draco")
//   makePasta() can help us make different types of pasta! Unfortunately, our pasta is pretty bland right now with no sauce. We’re able to accept a callback (our makeSauce parameter), but we’re not passing it a function when makePasta() is invoked. Yet.


// What if I want penne with Alfredo sauce one day and then Bowtie (Farfalle) with Pesto the next day? We need to modify our makePasta recipe so when it is passed a sauce it can make it! (Remember, recipe is just a set of instructions, like a function!)

function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  // create a variable for sauce!
  var sauce = makeSauce();          // invoke makeSauce, our callback
  console.log("Mixing sauce");
  console.log("Pasta is done!");
  return pasta + " Pasta with " + sauce + " sauce! Voila!";
}
function makePesto() {
  console.log("Making Pesto");
  return "pesto";
}
function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo";
}
// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));
// notice lack of parentheses after makePesto.
// Remember: we want to pass the function, not execute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));


// A couple of things to note:

// When we pass the function as an argument into the makePasta function call, we don’t put parenthesis after “makePesto,” because we actually want to pass the function definition, or the list of instructions, rather than execute the function (which would just pass whatever the function returns).