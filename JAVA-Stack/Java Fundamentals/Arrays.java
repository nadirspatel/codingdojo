import java.util.ArrayList;

public class Arrays {
    public static void main(String[] args) {
    // Declaration, initialization, and adding in separate steps:
    ArrayList<Object> list = new ArrayList<Object>();
    list.add(10);
    list.add("Hello");
    list.add(new ArrayList<Integer>());
    list.add(new Double(12.0)); // adding a Double of value 12.0
            
    System.out.println(list); // [10, "Hello", [], 12.0]

    // Check out the ArrayList documentation. The most used methods are: add, clear, clone, contains, get, indexOf, isEmpty, remove, size. Try them out and see what you can do with the ArrayList class.
    // Note: The <> are informally referred to as the "diamond."

    }
}