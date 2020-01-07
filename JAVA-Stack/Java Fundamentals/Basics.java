
import com.sun.org.glassfish.external.statistics.AverageRangeStatistic;

public class Basics {
///////////////////
public static void main(String[] args) {


// Print 1-255
// Write a method that prints all the numbers from 1 to 255.

// int i = 1;
// int j = 255;
// while(i <= j)
//     {
//     System.out.println(i);
//     i++;
//     }
// }



// Print odd numbers between 1-255
// Write a method that prints all the odd numbers from 1 to 255.

// int i = 1;
// int j = 255;
// while(i <= j) {
//     if (i % 2 == 1) {
//     System.out.println(i);
//     }
//     i++;
//     }



// Print Sum
// Write a method that prints the numbers from 0 to 255, but this time print the sum of the numbers that have been printed so far. For example, your output should be something like this:

// New number: 0 Sum: 0
// New number: 1 Sum: 1
// New number: 2 Sum: 3
// New number: 3 Sum: 6
// ...
// New number: 255 Sum: ___
// Do NOT use an array to do this exercise.

//  int i = 0;
//  int j = 255;
//  int sum = 0;
//  while(i < j) {
//      System.out.println("New Number:" + i);
//      i++;
//      sum = sum + i;
//      System.out.println("Sum:" + sum);
//  }
// }

// Iterating through an array
// Given an array X, say [1,3,5,7,9,13], write a method that would iterate through each member of the array and print each value on the screen. Being able to loop through each member of the array is extremely important.

// int[] x = {1,3,5,7,9,13};
// for(int str : x) {

//     System.out.println(str);
// }
// }


// Find Max
// Write a method (sets of instructions) that takes any array and prints the maximum value in the array. Your method should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), or even a mix of positive numbers, negative numbers and zero.

// Step 1: Initialize array value
// Step 2: (int max = a[0];)
//         Initialize max value as array's first value
// Step 3: (for int i = 1; i < a.length; i++ )
//         Iterate array using a for loop (exclude arrays first position 0,             since it was assumed as max value)
// Step 4: if(a[i] > max)
//         Use if condition to compare array current value with max value,              if current array value is greater than max then assign array                 current value as max (max = a[i];).
// Step 5: 
//         Continue the loop and resign the max value if array current value            is greater than max

// int[] array = new int[] { -20, -30, 50, 4, 71, 100};
// 		int max = array[0];
// 		for(int i = 1; i < array.length;i++) {
// 			if(array[i] > max) {
// 				max = array[i];
// 			}
// 		}
//         System.out.println("The Given Array Element is:");
// 		for(int i = 0; i < array.length;i++) {
// 			System.out.println(array[i]);
// 		    }
//         System.out.println("From The Array Element Largest Number is:" + max);



// Get Average
// Write a method that takes an array, and prints the AVERAGE of the values in the array. For example for an array [2, 10, 3], your method should print an average of 5. Again, make sure you come up with a simple base case and write instructions to solve that base case first, then test your instructions for other complicated cases.

// int[] array = new int[]{1, 2, 3, 4, 5, -1};
// //calculate sum of all array elements
// int sum = 0;
// for(int i=0; i < array.length ; i++)
//  sum = sum + array[i];
// //calculate average value
//  double average = sum / array.length;
//  System.out.println("Average value of the array elements is : " + average); 



// Array with Odd Numbers
// Write a method that creates an array 'y' that contains all the odd numbers between 1 to 255. When the method is done, 'y' should have the value of [1, 3, 5, 7, ... 255].

int[] arr = new int[128];
for (int i = 1; i <= 255; i++) {
    if (i %2 !=0) {
        arr[(i-2)/2] = i;
     }
}
System.out.println(Arrays.toString(arr));


// Greater Than Y
// Write a method that takes an array and returns the number of values in that array whose value is greater than a given value y. For example, if array = [1, 3, 5, 7] and y = 3, after your method is run it will print 2 (since there are two values in the array that are greater than 3).

// Square the values
// Given any array x, say [1, 5, 10, -2], write a method that multiplies each value in the array by itself. When the method is done, the array x should have values that have been squared, say [1, 25, 100, 4].

// Eliminate Negative Numbers
// Given any array x, say [1, 5, 10, -2], write a method that replaces any negative number with the value of 0. When the method is done, x should have no negative values, say [1, 5, 10, 0].

// Max, Min, and Average
// Given any array x, say [1, 5, 10, -2], write a method that returns an array with the maximum number in the array, the minimum value in the array, and the average of the values in the array. The returned array should be three elements long and contain: [MAXNUM, MINNUM, AVG]

// Shifting the Values in the Array
// Given any array x, say [1, 5, 10, 7, -2], write a method that shifts each number by one to the front. For example, when the method is done, an x of [1, 5, 10, 7, -2] should become [5, 10, 7, -2, 0]. Notice that the last number is 0. The method does not need to wrap around the values shifted out of bounds.


//////////////////////////
// end public class basics
    }
}