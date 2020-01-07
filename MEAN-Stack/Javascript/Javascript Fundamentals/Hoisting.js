// Key Rules of Hoisting
// • Variable declarations (var) rise to the top of their scope like hot air balloons.

// • Functions create their own scope and act like cages, preventing declarations from rising out.

// • Assignments, or = signs, act like anchors. They stay put, no matter how the code is rearranged.

// • let and const do not get hoisted,  and will throw an error if called before they are declared. const will even throw a syntax error if it is called before it is assigned.

// There are two takeaways here: Functions act like a cage, preventing declarations from being hoisted out of them. Another thing to remember is that standalone functions also get hoisted. Let's see if you can predict the output of this next example without running it:

magicalUnicorns();
var magicalUnicorns = function(){
    console.log("Will it blend?");
}
console.log("Don't breathe this!");

// Which console log fires first? Neither! We get the error 'magicalUnicorns is not a function'. Why? The variable magicalUnicorns got hoisted to the top, and we tried to invoke it before we assigned the function to it.


// example
var example;
console.log(example); // logs undefined
example = "I'm the example!";

// another example
let example = "I'm the example!";  // rmr: if let or var is after call then doesnt work!
console.log(example);


// predict the output of following 
//1
console.log(hello);                                   
var hello = 'world';
// will print undefined: 
// proper syntax:
var hello = 'world';
console.log(hello);                                   


//2
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
//prints magnet: correct

//3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//prints super cool: correct

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// prints chicken, half-chicken: correct

//5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// prints error

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//prints undefined rock, r&b, r&b, disco 

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// prints san jose, seattle, burbank, san jose

//8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
//prints error (close tho!)