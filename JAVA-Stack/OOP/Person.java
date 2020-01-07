// Object Superclass
// Since this refers to your object and given that all objects are descendants of the Object class, this means we are able to use methods inherited from the Object class.

// The Object class is considered a superclass because it is at the top of the class Hierarchy. It contains some methods that all of our objects can use, but to access them, you have to use the this keyword. Some of the most used methods from the Object class are:

// .getClass(): returns a Class object that represents the object's current class.
// .equals(): compares two objects for equality and returns a boolean.
// .toString(): return a string representation of the object. If you want, you can override this method.

class Person {
    private int age;
    private String name;
    public Person(int ageParam, String nameParam) {
        this.age = ageParam;
        this.name = nameParam;
    }
    public void objectMethods(Person anotherObject) {
        System.out.println("Class name: " + this.getClass().getSimpleName());
        System.out.println("toString: " + this.toString());
        System.out.println("Equals: " + this.equals(anotherObject));
    }
}