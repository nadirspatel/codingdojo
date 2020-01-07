// IndexOf: The indexOf method searches left-to-right inside the given string for a "target" string. The indexOf() method returns the index number where the target string is first found or -1 if the target is not found.

public class StringsIndexOf {
    public static void main(String[] args) {
        String ninja = "Welcome to Coding Dojo!";
        int a = ninja.indexOf("Coding"); // a is 11 (Welcome to )
        System.out.println("a is " + a);
        int b = ninja.indexOf("Dojo"); // b is 18
        System.out.println("b is " + b);
        int c = ninja.indexOf("pizza"); // c is -1, "pizza" is not found
        System.out.println("c is " + c);

    }
}