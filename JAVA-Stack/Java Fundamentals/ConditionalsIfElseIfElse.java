// Two things you need to remember when dealing with conditions in programming:

// A condition always returns true or false
// As long as something has a value (Which almost everything in Java does) it can be used in a condition
// IF-ELSE IF-ELSE
// We shouldn't always shoot the ball if the defender isn't guarding us. What if we are far away from the basket? In that case, instead of shooting the ball we should dribble the ball. In this case, we have three different blocks of code that we can take given a certain set of conditions. We can chain if-else if-else statements to cover all of the different scenarios. 
// Note: Conditional is not limited to just comparing booleans. You can compare other data types as well, including Strings and integers. But you have to make sure you are not comparing two completely different data types.


public class ConditionalsIfElseIfElse {
    public static void main(String[] args) {
        boolean defenderGuarding = true; // change to false to test
        boolean closeToBasket = true; // change to false to test
        if(defenderGuarding == true) {
            System.out.println("Pass The Ball");
        } else if(closeToBasket == true) {
            System.out.println("Shoot The Ball");
        } else {
            System.out.println("Dribble The Ball");
        }
    }
}

