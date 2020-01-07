// Format: Another way of concatenating strings!

public class StringsFormat {
    public static void main(String[] args) {
    String ninja = String.format("Fuckin bitch %s, you owe me $%.2f !", "Jack", 25.0);
    System.out.println(ninja);
    }
}
// Will print out Fuckin bitch Jack, you owe me $25.00 !
// Where %s is expecting a string
// And %.2f is expecting a float data type. The value 2 will just place two values to right of the decimal point.