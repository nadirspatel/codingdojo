// Privacy
// If you remember the hoisting rules of ES5, whenever we use the var keyword, we are locking the variable inside its current scope. We can leverage this to create private variables within our Object Constructor.

// the naming convention for Classes and Object Constructors is that they're capitalized and singular
function Person(name, age) {
    var privateVariable = "This variable is private";
    var privateMethod = function() {
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
var eliza = new Person("Eliza", 48);
console.log(eliza.privateVariable);
// undefined!
// Now we can't access our private methods from outside the Constructor. When we try, it logs 'undefined'. How can we use these private methods?
function Person(name, age) {
    var privateVariable = "This variable is private";
    var privateMethod = function() {
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
var joe = new Person("Joe", 23);
joe.greet();

// The 'this' problem workaround
// In ES5, this creates the this problem. Luckily there's a workaround: Storing a reference to this.

function Person(name, age) {
    // create a private variable that stores a reference to the new object we create
    var self = this;
    var privateVariable = "This variable is private";
    var privateMethod = function() {
        console.log("this is a private method for " + self.name);
        console.log(self);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
var joe = new Person("Joe", 23);
joe.greet();
// When our Object Constructor runs, we create a private variable called self that retains the reference to the object we just constructed. Now we can use self in place of this within private methods to avoid losing access to this. In our console, we will see the instance of joe.