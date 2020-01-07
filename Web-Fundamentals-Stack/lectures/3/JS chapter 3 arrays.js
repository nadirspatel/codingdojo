//Array: Reverse
function reverseArr(arr) {
    for ( var i = 0; i < arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1-i] = temp;
        
    }
        return arr;
}
console.log((reverseArr([2,4,6,8,10])));