
public class Human {
	protected String name;
	protected int strength;
	protected int stealth;
	protected int intelligence;
	protected int health;
	
	public Human(String name){
		this.name = name;
		this.strength = 3;
		this.stealth = 3;
		this.intelligence = 3;
		this.health = 100;
	}
	
	public Human(String name, int strength, int stealth, int intelligence, int health) {
		this.name = name;
		this.strength = strength;
		this.stealth = stealth;
		this.intelligence = intelligence;
		this.health = health;
		
	}
	
	public void attack(Human target) {
		System.out.println(this.name + " is attacking " + target.name);
		target.health -= this.strength;
	}
	
	public void displayHealth() {
		System.out.println(this.name + " health: " + this.health);
	}
	
	
}
