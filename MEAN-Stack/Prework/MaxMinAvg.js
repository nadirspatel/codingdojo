//Find Min, Max Avg - Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function MaxMinAvg(arr) {
    var min = arr[0];
    var max = arr[0];
    var avg = arr[0]
    var count = 0;
    var temp = 0;
    for ( var i = 0; i < arr.length; i++ ) {
        // find the lowest value in array
        if ( arr[i] < arr[0] ) {
            min = arr[i]
        } 
        // find the highest value in array
        if ( arr[i] > arr[0] ) {
            max = arr[i]
        } 
        count = arr.length;
        temp = arr[i]
        avg = temp / count;
    }
    console.log("The Count is " + count)
    console.log("The Min is " + min)
    console.log("The Max is " + max)
    console.log("The Avg is " + avg)
}
MaxMinAvg([1,2,3,4,5]);