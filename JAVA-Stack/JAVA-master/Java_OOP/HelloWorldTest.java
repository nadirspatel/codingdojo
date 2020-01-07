public class HelloWorldTest {
	public static void main(String[] args){
		HelloWorld hW = new HelloWorld();

		String greeting = hW.greet();
		String greetingWithName = hW.greet("Eduardo");

		if (greeting.equals("Hello World") || greetingWithName.equals("Hello Eduardo")){
			System.out.println("Test Successful");
		}
		else{
			System.out.println("Test Failed");
		}
	}
}