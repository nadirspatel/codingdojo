// Equality: We can compare the equality of a string in two ways. Do they refer to the exact same object, or do they have the same exact sequence of characters.

public class StringsEquality {
    public static void main(String[] args) {
        String a = new String("word");
        String b = new String("word");
        System.out.println(a == b); // false. not the same exact object.
        System.out.println(a.equals(b)); // true. same exact characters.
    }
}