class Vehicle2 {
    private int numberOfWheels;
    private String color;
    
    // ex. new Vehicle()
    public Vehicle2() {
    }
    // ex. new Vehicle("someColor")    
    public Vehicle2(String color) {
        // setting the color attribute to the value from the color parameter
        this.color = color;
    }
    
    // ex. new Vehicle("someColor", 4)    
    public Vehicle2(String color, int num) {
        this.color = color;
        this.numberOfWheels = num;
    }
        
    // ...
    // getters and setters removed for brevity
    // ...
}