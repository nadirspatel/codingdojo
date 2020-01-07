class Person{
	private int age;
	private String name;
	private int cmHeight;

	// over-loading the constructor:
	// empty constructor with default values

	public Person(){
		this(20, "John Doe", 171);
	}

	public Person(int age, String name, int cmHeight){
		this.age = age;
		this.name = name;
		this.cmHeight = cmHeight;
	}

	// Object superclass:
	// methods inherited from the "Object" class

	// Object is a superclass because it is at the top of the class Hierarchy.

	public void objectMethods(Person anotherObject){
		System.out.println("Class name: " + this.getClass().getSimpleName());
		System.out.println("toString: " + this.toString());
		System.out.println("Equals: " + this.equals(anotherObject));
	}
}