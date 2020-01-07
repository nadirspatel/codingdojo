function personConstructor(name, age) {
    // an object literal that will be returned
    var person = {};
    // attributes of a person
    person.name = name;
    person.age = age;
    // when attached to an object or instance, functions are called 'methods'.
    // this is our first method, greet
    person.greet = function(){
        console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
    }
    // finally, this function must return an instance
    return person;
}
// create the 'steve' instance, run greet
var steve = personConstructor("Steve", 27);
steve.greet();
// create the 'anika' instance, run greet. note that it is different.
var anika = personConstructor("Anika", 33);
anika.greet();
// finally note how we can refine the greet method for any particular instance
var zak = personConstructor("Zak", 19);
zak.greet = function() {
    console.log("My name is Zak and I am the biggest bitch ass, ever!");
};
zak.greet();

// The key takeaway here is that an Object Constructor is a function that constructs objects. In the above example, we created an object literal at the top of the scope, and returned it at the bottom. There is nothing different about these objects from any other object we made previously. Each object (what we call an instance) is unique, and we can modify their methods at any time (like we did with the emily instance!)

// this and new
// Taking the concept of Object Constructors further, we can use the this keyword to store our attributes and methods, and the new keyword to create new instances.

function personConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
// In the above example, we reduced the complexity of our Object Constructor quite a bit. this will refer to each individual instance when the Object Constructor is run. However, without returning an object literal by default, it seems like our constructor is no longer constructing. Enter new:

function personConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
// the 'new' keyword causes our constructor to return the object we expected.
var anika = new personConstructor('Anika', 33);
anika.greet();
console.log(anika);
// What's the benefit of using this and new? Besides cleaning up our code, it allows us to do even more. Remember when we modified Emily's greet()? Now we can refer to the instance attributes!

function personConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
var emily = new personConstructor("Emily", 22);
// using this & new, we can now refer to the 'name' attribute of our instance!
emily.greet = function() {
    console.log("My name is " + this.name + " and I'm the coolest ever!");
}
// Remember: this and new go together. If you're using this in your Constructor, you must create new instances with new!

