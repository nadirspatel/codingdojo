public class Greeter {

    public String greet(String name){
        return createGreeting(name);
    }

    public String greet(){
        return createGreeting("World");
    }

    public String greet(String firstName, String lastName) {
        return createGreeting(firstName + " " + lastName);
    }

    //use a private method to instantiate objects above
    private String createGreeting(String toBeGreeted) {
        return "Hello " + toBeGreeted + ", welcome to coding dojo";
    }

    }