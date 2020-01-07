module.exports = {
    greet: function(){
        console.log("we are now using math module!");
    },
    add: function(num1, num2){
        console.log("the sum is:", num1 + num2);
    },
    multiply: function(num1, num2){
	console.log("the multipy sum is:", num1 * num2);
    },
    square: function(num1){
	console.log("the square of " + num1 + " is: ", num1 * num1);
    },
    rand: function(num1, num2){
	var rand = Math.floor(Math.random(num1) * num2 )
	console.log("Random number", rand);
    },
}
