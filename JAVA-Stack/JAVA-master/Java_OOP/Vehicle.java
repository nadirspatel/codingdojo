class Vehicle{
	private int numberOfWheels;
	private String color;

	// Constructors 
	// ex: new Vehicle()
	public Vehicle(){
	}

	// overloading the constructor:
	//ex. new Vehicle("someColor")
	public Vehicle(String color){
		// setting the color attribute to the value from the color parameter
		color = color;
	}

	//ex. new Vehicle("someColor", 4)
	public Vehicle(String color, int num){
		color = color;
		numberOfWheels = num;
	}

	// getter
	public int getNumberOfWheels(){
		return numberOfWheels;
	}

	// setter
	public void setNumberOfWheels(int number){
		numberOfWheels = number;
	}

	// getter
	public String getColor(){
		return color;
	}

	// setter
	public void setColor(String color){
		this.color = color; // The 'this' keyword specifies that we are talking about
		// the instance variable and not the parameter variable.
	}
}