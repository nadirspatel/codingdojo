// For Loop
// In our previous example, we did a few things. First, we initialized a variable called i to hold onto starting number. Second, we determined the termination condition to check after each iteration. Third, we specified the body of the while loop with a code block to execute on each iteration. Fourth we made sure to modify the variable i in the code block. We can do this exact same thing with a for loop.

public class LoopsFor {
    public static void main(String[] args) {

    for (int i = 0; i < 7; i++){
    System.out.println("bar");
    }

    // Using the for loop, we can easily iterate over an array, since we will always know its length; for example:

    // ArrayList<String> dynamicArray = new ArrayList<String>();
    // dynamicArray.add("hello");
    // dynamicArray.add("world");
    // dynamicArray.add("etc");
    // for (int i = 0; i < dynamicArray.size(); i++){
    //     System.out.println(dynamicArray.get(i));
    // }

    }
}


// The most common for statement you'll see is comprised of 4 key parts: the initialization; the termination; the increment; and the body statements. Let's put a face to the name: