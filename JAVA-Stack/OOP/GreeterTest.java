public class GreeterTest {
    public static void main(String[] args) {
        
        Greeter g = new Greeter();

        //String greeting = g.greet();
        //String greetingWithName = g.greet(); // When not sending anything, returns one method
        //String greetingWithName = g.greet("Nadir"); // When sending only firstname, returns one method
        String greetingWithName = g.greet("Nadir","Patel"); // When sending both first and lastname, returns one method

        System.out.println(greetingWithName);

        // if (greeting.equals("Hello World") || greetingWithName.equals("Hello Nadir")){
        //     System.out.println("Test successful");
        // } else{
        //     System.out.println("Test Fail");
        // }
    }
}