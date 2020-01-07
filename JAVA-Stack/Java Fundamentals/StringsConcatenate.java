// Concatenate: A String method that allows two strings to be squashed together. Since each string is immutable, this results in a brand new string.

public class StringsConcatenate {
    public static void main(String[] args) {
        String string1 = "My name is ";
        String string2 = "Nadir";
        String string3 = string1.concat(string2);
        System.out.println(string3);
        // will output My name is Nadir
    }
}