# Parent class
class Bike:

    # instance method
    # - have this method display the bike's price, maximum speed, and the total miles.
    def __init__(self,price,max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    # instance method
    # - have it display "Riding" on the screen and increase the total miles ridden by 10
    def riding(self):
        print("Riding")
        self.miles += 10
        return self
        
    # instance method
    # - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
    def reversing(self):
        print("Reversing")
        if self.miles>5:
            self.miles-=5
        else:
            print("cannot have negative mileage")
        return self

    def displayInfo(self):
        print ("Price is {}, Max Speed is {}, Miles is {}".format(self.price,self.max_speed,self.miles))

bike1 =  Bike(200,25)

for i in range(3):
    bike1.riding()
bike1.reversing()
bike1.displayInfo()