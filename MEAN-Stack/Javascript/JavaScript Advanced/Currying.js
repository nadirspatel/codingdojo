// Currying
// Currying is the idea that you only run part of a function, rather than the whole thing. It is functional programming rather than object oriented.

// We just want to mention it here, because it is a different strategy of writing code, and can be kind of fun. It also illustrates closures quite well.

// Example: Uncurried
function ninjaBelt(ninja, beltColor){
  console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
}
ninjaBelt('Eileen', 'black');

// Example:Curried
function ninjaBelt(ninja){
  return function belt(beltColor){ //note the closure here!
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
  }
}
ninjaBelt('Eileen')('black'); //note the double invocation here.

// Interesting right? It can get tough to read if you have multiple curried functions.