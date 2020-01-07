// While loop
// It is important for us to understand the while loop before we understand the for loop because a for loop is just a specialized while loop. To create a while loop, we have to specify the condition we will check after each loop whether if it is true or not and the block of code to execute if the condition is true. If the condition specified never turns false, then the loop will go on forever leading to an infinite loop. Therefore it is important to make sure that we are modifying some aspect in the program that will eventually make the condition turn false. Let's take a simple look at a while loop that will print something to the screen as long as a particular variable is less than 7.

public class Loops {
    public static void main(String[] args) {
        int i = 0;
        while(i < 7)
        {
            System.out.println("foo");
            i++;
        }
    }
}
// Java will first check if the variable i is less than 7. If it is, it will execute the block of code surrounded by curly braces. Then Java will check if the variable i is less than 7 again...and so on. Notice how we were modifying the i value inside of our while loop so that eventually our loop will stop. Now, this is not the best use for a while loop because we know before hand that we want this block of code to execute 7 times because if we increment i by 1 after each iteration, the loop will be iterated 7 times. This concept of repeating something for a specified interval is so common that the for loop was invented to handle specific cases like this.