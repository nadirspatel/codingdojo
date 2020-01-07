// For example, you had the following code:

   var a = "Hi";
   var b = 38;
   function test() {
     //some code here
   }
   function add() {
     //some code here
   }
   test();

// If this was how you wrote your javascript library (basically codes where others can use your codes/methods), if someone else also used a variable a, b, or had functions named test or add, this would cause conflicts and cause lots of problems.

// Therefore, to eliminate these variables/methods being exposed outside and to contain its scoping, you could wrap them inside an immediate function. Once you wrap these inside an immediate function, these variables/methods are no longer global (due to the function scoping of Javascript).

// This is exactly why JavaScript libraries use immediate functions to scope their variables/functions inside itself.

// Example: http://code.jquery.com/jquery-1.11.0.js . The jquery library uses immediate functions!

// Our a,b test, add code rewritten:

( function() {
   var a = "Hi";
   var b = 38;
   function test() {
     //some codes here
   }
   function add() {
     //some codes here
   }
   test();
}());