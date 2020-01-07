function greaterThanSecond(); {
    var count = 0;
    for (var i=0; i<arr.length; i++) {
        if(arr[i] > arr[1]) {
            console.log(arr[i]);
            count = count + 1;
        }
    }
    return count();

}