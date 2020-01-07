#print(x) # should print 5
#which should perform 0+2+(2+5+1)-(3+2) and print 5

class MathDojo:

    def __init__(self, add, subtract):
        self.add = add
        self.subtract = subtract

    def add(self):
        self.add += self.add
        return self

    def subtract(self):
        self.subtract -= self.subtract

    def md(*args):
        pass

x = md.add(2).add(2,5,1).subtract(3,2).result
