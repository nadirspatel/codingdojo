class Vehicle2Test {
    public static void main(String[] args) {
        Vehicle2 redVehicle = new Vehicle2("red");
        String color = redVehicle.getColor();
        System.out.println("The Vehicle color is: " + color);
    }
}

// Overloading a method is just defining new method signatures for the same method name. Now we can instantiate objects in 3 different ways. new Vehicle(), new Vehicle('someColor'), and new Vehicle('someColor', 4). Remember that the method overloading technique is not only for constructors; any method can be overloaded.