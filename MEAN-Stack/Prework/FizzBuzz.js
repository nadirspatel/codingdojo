function fizzbuzz(n) {
    // validate if n is a positive number
    if ( n < 0 ) {
        console.log("n has to be a positive number")
    }
    else if ( isNaN(n) ) {
        console.log("n is not number")
    } 
    else {
        for ( var i = 1; i <= n; i++ ) {
            if ( i % 3 == 0 && i % 5 == 0 ) {
                console.log("FizzBuzz")
            }
            else if ( i % 3 == 0 && i % 5 >= 1 ) {
               console.log("Fizz")
            }
            else if ( i % 5 == 0 && i % 3 >= 1  ) {
                console.log("Buzz")
            }
            else { 
                console.log(i) 
            }
        }
    }
}
    fizzbuzz("-15")