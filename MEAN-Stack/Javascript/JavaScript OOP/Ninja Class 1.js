// Private variables are scoped to the constructor with the 'var' keyword
function Ninja(name) {
    this.name = name;
    this.health = 100;
    this.strength = 3;
    this.speed = 3;
    
    // To make functions private, we scope them to the constructor
    function updateHealth(health) {
        health += 10;
    };

    function updateStrength(strength) {
        strength += strength;
    };

    function updateSpeed(speed) {
        speed += speed;
    };
    
    // 'Getter' functions help us read private variables
    this.readHealth = function(health) {
        updateHealth();
    }

    this.readStrength = function(strength) {
        updateStrength();
    }
    
    this.readSpeed = function(speed) {
        updateSpeed();
    }

    this.drinkSake = function() {
      updateHealth();
      // return this will allow us to chain methods
      return this;
    }
}
var NewNinja = new Ninja("Nadir");
// by returning this, we can chain drive()
NewNinja.drinkSake(); 
// but we can read it with our getter function
console.log( "Name is " + NewNinja.name );
console.log( "Strength is " + NewNinja.readStrength );
console.log( "Speed is " + NewNinja.readSpeed );
console.log( "Health is " + NewNinja.readHealth );