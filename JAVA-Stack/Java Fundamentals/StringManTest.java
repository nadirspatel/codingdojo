public class StringManTest {
    public static void main(String[] args) {

        StringMan m = new StringMan(); // invokes StringMan.java

        // first one
        // System.out.println(m.trimAndConcat ("      Hello     ","     World     ") );
        //works

        // second one
        // char letter = 'o';
        // Integer a = m.getIndexOrNull("Coding", letter);
        // Integer b = m.getIndexOrNull("Hello World", letter);
        // Integer c = m.getIndexOrNull("Hi", letter);
        // System.out.println(a); // 1
        // System.out.println(b); // 2
        // System.out.println(c); // 3
        //works 

        //third one
        // String word = "Hello";
        // String subString = "llo";
        // String notSubString = "world";
        // Integer a = m.getIndexOrNull(word, subString);
        // Integer b = m.getIndexOrNull(word, notSubString);
        // System.out.println(a); // 2
        // System.out.println(b); // null
        //works

        //Fourth one
        String word = m.concatSubstring("Hello", 1, 2, "world");
        System.out.println(word); // eworld
    }
}