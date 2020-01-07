// Two things you need to remember when dealing with conditions in programming:

// A condition always returns true or false
// As long as something has a value (Which almost everything in Java does) it can be used in a condition
// IF
// Let's say we are a basketball player. If a defender is guarding us closely, then we should pass. Our thought process can be represented this way in code.

public class ConditionalsIf {
    public static void main(String[] args) {
        boolean defenderGuarding = true;
        if(defenderGuarding == true) {
        System.out.println("Pass The Ball");
        }
    }
}