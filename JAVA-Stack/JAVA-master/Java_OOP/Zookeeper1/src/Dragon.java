
public class Dragon extends Mammal {

	public Dragon () {
		super(500);
	}
	
	public void fly() {
		System.out.println("The dragon is flying *rush of leathery wings*");
		this.energyLevel -= 50;
	}
	
	public void eatHuman() {
		System.out.println("The dragon is eating a human *Wilhelm scream*");
		this.energyLevel += 25;
	}
	
	public void attackTown() {
		System.out.println("Oh the humanity the dragon is attacking a town *fire noises*");
		this.energyLevel -= 100;
	}
}
