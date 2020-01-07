class PersonTest{
	public static void main(String[] args){
		Person person1 = new Person(10, "Person One", 171);
		Person person2 = new Person(5, "Person Too", 10);

		person1.objectMethods(person2);
	}
}