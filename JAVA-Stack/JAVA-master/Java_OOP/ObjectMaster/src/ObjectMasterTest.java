
public class ObjectMasterTest {

	public static void main(String[] args) {
		Ninja yoshi = new Ninja("Yoshi");
		Wizard gandalf = new Wizard("Gandalf");
		Samurai ryu = new Samurai("Ryu");
		Samurai jack = new Samurai("Jack");
		
		jack.howMany();
		ryu.deathBlow(jack);
		jack.displayHealth();
		gandalf.heal(jack);
		jack.displayHealth();
		gandalf.fireball(yoshi);
		yoshi.displayHealth();
		yoshi.steal(gandalf);
		yoshi.displayHealth();
		yoshi.runAway();
		yoshi.displayHealth();
		jack.meditate();
		jack.displayHealth();

	}

}
