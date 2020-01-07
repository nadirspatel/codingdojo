
public class Ninja extends Human {

	public Ninja(String name) {
		super(name);
		this.stealth = 10;
	}
	
	public void steal(Human target) {
		System.out.println(this.name + " stole health from " + target.name);
		target.health -= this.stealth;
		this.health += this.stealth;
	}
	
	public void runAway() {
		System.out.println(this.name + " has run away, the coward");
		this.health -= 10;
	}
}
