//Introduction and implementation of static methods

public class Person {
    private int age;
    private String name;
    public static int numberOfPeople = 0;


    public Person(int ageParam, String nameParam) {
        age = ageParam;
        name = nameParam;
        numberOfPeople++;
    }

    //static methods can only call other static methods
    public static int peopleCount() {
        return numberOfPeople;
    }

} 