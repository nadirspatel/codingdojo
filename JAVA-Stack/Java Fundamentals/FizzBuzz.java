// Write a program that will take an integer and print Fizz if the number is divisible by 3, Buzz if the number is divisible by 5, FizzBuzz if the number is divisible by 3 and 5, and the number itself for all other cases.

// Objectives:
// ● Practice conditionals.
// ● Implement a classic interview algorithm.


public class FizzBuzz {
    public String fizzBuzz(int num) {
        // fizzbuzz logic here
        if(num % 15 == 0 ){
            return "FizzBuzz";
        }
        else if(num % 3 ==0){
            return "Fizz";
        }
        else if(num % 5 ==0){
            return "Buzz";
        }
        else {
            return String.valueOf(num);
        }
    }
}
