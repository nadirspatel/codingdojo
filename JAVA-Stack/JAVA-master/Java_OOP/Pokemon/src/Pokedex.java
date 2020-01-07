
public class Pokedex extends PokeAbstract {
	
	public void pokemonInfo(Pokemon pokemon) {
		System.out.println("Name: " + pokemon.getName());
		System.out.println("Type: " + pokemon.getType());
		System.out.println("Health: " + pokemon.getHealth());
	}
	
}
