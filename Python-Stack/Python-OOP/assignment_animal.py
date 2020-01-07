class Animal:

    def __init__(self, given_name, given_health):
        self.name = given_name
        self.health = given_health

    def walk(self):
        self.health -= 1

    def run(self):
        self.health -= 5

    def fly(self):
        self.health -= 10

    def display_health(self):
        print("Health is: {}".format(self.health))


class Dog(Animal):

    def __init__(self, given_name):
        super().__init__(given_name, 150)

    def pet(self):
        self.health += 5


class Dragon(Animal):

    def __init__(self, given_name):
        super().__init__(given_name, 170)

    def display_health(self):
        super().display_health()
        print("I am a dragon")

draco = Animal('Draco',100)
draco.fly()
draco.fly()
draco.fly()
draco.fly()
draco.fly()
draco.display_health()