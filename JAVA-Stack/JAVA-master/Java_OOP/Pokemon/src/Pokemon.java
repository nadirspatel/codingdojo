
public class Pokemon implements PokemonInterface {
	private String name;
	private int health;
	private String type;
	private static int count = 0; 
	
	public Pokemon(String name, String type, int health) {
		this.setName(name);
		this.setHealth(health);
		this.setType(type);
		count++;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHealth() {
		return this.health;
	}

	public void setHealth(int health) {
		this.health = health;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public Pokemon createPokemon(String name, String type, int health) {
		return new Pokemon(name, type, health);
	}
	
	public void attackPokemon(Pokemon pokemon) {
		pokemon.health -= 10;
	}
	
	public void pokemonInfo(Pokemon pokemon) {
		System.out.println("Name: " + pokemon.name);
		System.out.println("Type: " + pokemon.type);
		System.out.println("Health: " + pokemon.health);
	}
	
	
	
}
