
public class DragonTest {

	public static void main(String[] args) {
		Dragon smaug = new Dragon();
		
		smaug.attackTown();
		smaug.displayEnergyLevel();
		smaug.attackTown();
		smaug.displayEnergyLevel();
		smaug.attackTown();
		smaug.displayEnergyLevel();
		
		smaug.eatHuman();
		smaug.displayEnergyLevel();
		smaug.eatHuman();
		smaug.displayEnergyLevel();
		
		smaug.fly();
		smaug.displayEnergyLevel();
		smaug.fly();
		smaug.displayEnergyLevel();
		

	}

}
