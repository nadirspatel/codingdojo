// Define the object constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Attach class methods using .prototype
Person.prototype.greet = function() {
    console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    return this;
};
// Create new instances with the new keyword
var amelia = new Person('Amelia', 36);
// Create instance methods by attaching the function directly to an instance
amelia.sing = function() {
    console.log("Lalalala!");
};


// Soft Privacy & Method Chaining
// You may have seen other languages use public and private as keywords that change how accessible the data is. JavaScript does not have these keywords, but we can still make private variables and methods. In order to keep data private in a particular instance, we just need to leverage JavaScripts scoping rules. By creating variables scoped to the Object Constructor, we keep them out of the global scope. To read and update private data, we'll need to write getter and setter methods.
// Additionally, we can chain methods together by returning this. Essentially, whenever we tell a public or prototype method to return this, we're asking for the entire object back. This lets us chain function calls together.

// Private variables are scoped to the constructor with the 'var' keyword
function Car(make, model) {
    var odometer = 0;
    this.make = make;
    this.model = model;
    
    // To make functions private, we scope them to the constructor
    function updateOdometer(distance) {
        odometer += distance;
    };
    
    // 'Getter' functions help us read private variables
    this.readOdometer = function() {
      return odometer;
    }

    this.readMake = function() {
            return make;
    }
    
    this.readModel = function() {
            return model;
    }

    // 'Setter' functions help us update private variables
    this.drive = function(distance) {
      updateOdometer(distance);
      // return this will allow us to chain methods
      return this;
    }
}
var myCarInstance = new Car("Chevy", "Camaro");
// by returning this, we can chain drive()
myCarInstance.drive(50).drive(90); 
// private variable is undefined
console.log(myCarInstance.odometer);
// but we can read it with our getter function
console.log(myCarInstance.readOdometer());
console.log(myCarInstance.readMake());
console.log(myCarInstance.readModel());