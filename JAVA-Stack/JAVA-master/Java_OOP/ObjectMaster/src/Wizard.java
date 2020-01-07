
public class Wizard extends Human {

	public Wizard(String name) {
		super(name);
		this.health = 50;
		this.intelligence = 8;
	}
	
	public void heal(Human target) {
		System.out.println(this.name + " healed " + target.name);
		target.health += this.intelligence;
	}
	
	public void fireball(Human target) {
		System.out.println(this.name + " used fireball on " + target.name);
		target.health -= (this.intelligence * 3);
	}
	
}
