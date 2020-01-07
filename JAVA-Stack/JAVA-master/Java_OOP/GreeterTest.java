public class GreeterTest {
	public static void main(String[] args){
		Greeter hW = new Greeter();

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