
public class Samurai extends Human {
	
	private static int count = 0;

	public Samurai(String name) {
		super(name);
		this.health = 200;
		count += 1;
	}
	
	public void deathBlow(Human target) {
		System.out.println(this.name + " dealt a death blow to " + target.name);
		this.health -= (this.health / 2);
		target.health = 0;
	}

	public void meditate() {
		System.out.println(this.name + " is meditating...");
		this.health += (this.health / 2);
	}
	
	public void howMany() {
		System.out.println("There are " + count + " samurai");
	}
}
