
public class HumanTest {

	public static void main(String[] args) {
		Human larry = new Human("Larry");
		Human gary = new Human("Gary");
		larry.displayHealth();
		gary.attack(larry);
		larry.displayHealth();

	}

}
