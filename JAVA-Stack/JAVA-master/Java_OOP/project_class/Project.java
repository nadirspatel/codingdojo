class Project{
	private String name;
	private String description;
	private double initialCost;

	public Project(){
		this("", "", .99);
	}

	// overloading constructor...
	public Project(String name){
		this.name = name;
	}

	public Project(String name, String description){
		this.name = name;
		this.description = description;
	}

	public Project(String name, String description, double initialCost){
		this.name = name;
		this.description = description;
		this.initialCost = initialCost;
	}

	// begin setters
	public void setName(String name){
		this.name = name;
	}

	public void setDescription(String description){
		this.description = description;
	}

	public void setInitialCost(double initialCost){
		this.initialCost = initialCost;
	}
	//end setters

	// begin getters
	public String getName(){
		return this.name;
	}

	public String getDescription(){
		return this.description;
	}

	public double getInitialCost(){
		return this.initialCost;
	}
	// end getters

	public String elevatorPitch(){
		return name + " (" + initialCost + ") "+ ": " + description;
	}
}