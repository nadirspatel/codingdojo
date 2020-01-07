class Car:

    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage

    def tax(self,tax):
        if self.price > 10000:
            self.tax == "0.15"
        elif self.price < 10000:
            self.tax == "0.12"

    def display_all(self):
        print ("Price: {}\nSpeed: {}\nFuel: {}\nMileage: {}mpg\nTax: {}\n\n".format(self.price,self.speed,self.fuel,self.mileage,self.tax))

tesla = Car(120000,200,"Full",300).display_all()
toyota = Car(20000,120,"Semi Full",105).display_all()
honda = Car(12000,75,"Semi Full",95).display_all()
jaguar = Car(65000,45,"Full",90).display_all()
kia = Car(7500,30,"Empty",85).display_all()
pinto = Car(2500,20,"Empty",80).display_all()