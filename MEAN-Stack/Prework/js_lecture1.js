function Person(n, h) { // object constructor
    this.name = n; // object
    this.hairColor = h; // object
    this.walk = function() {
        console.log("walking");
    }
}

var person1 = new Person("Nadir", "Brown");
var person2 = new Person("Zena", "Light Brown");
var person3 = new Person("Zara", "Golden Brown");


console.log(person1)
console.log(person2)
console.log(person3)


// var person = {
//     name: "Nadir";
//     hairColor: "Brown";
//     walk: function() {
//         console.log("walking")
//     }
// }
