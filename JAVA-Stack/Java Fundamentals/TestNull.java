public class TestNull {
    public static void main(String[] args) {
        Integer a = 10; // this can be converted into Integer or String
        int b = 10; // this is strict for integer
        a = null;
        b = null;
    }
}

// this wont work because main is set to String[] and 