public class Greeter{
	public String greet(String firstName, String lastName){
		return createGreeting(firstName + " " + lastName);
	}
	public String greet(){
		return createGreeting("World");
	}
// Parts of a method:
//  modifier (private/protected/public) | return type | method name | paramter list 
	private String createGreeting(string toBeGreeted){
		// method body
		return "Hello " + toBeGreeted;
	}
}
// method type: "static" (most common one we'll see, access also exists) defines
// the method as a class method that is invoked w/o reference to a particular object
// 