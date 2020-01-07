// Two things you need to remember when dealing with conditions in programming:

// A condition always returns true or false
// As long as something has a value (Which almost everything in Java does) it can be used in a condition
// IF-ELSE
// We want to pass the ball if the defender is guarding us but what do we do if the defender isn't guarding us? If the condition is not true, we should write a block of code that will execute so that we will always have something to do whether the defender is guarding us or not.


public class ConditionalsIfElse {
    public static void main(String[] args) {
        boolean defenderGuarding = false; // change to false to test
        if(defenderGuarding == true) {
            System.out.println("Pass The Ball");
        } else {
            System.out.println("Shoot The Ball");
        }
    }
}