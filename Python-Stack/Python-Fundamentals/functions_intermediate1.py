#As part of this assignment, please create a function randInt() where
# randInt() returns a random integer between 0 to 100
# randInt(max=50) returns a random integer between 0 to 50
# randInt(min=50) returns a random integer between 50 to 100
# randInt(min=50, max=500) returns a random integer between 50 and 500

def randInt():
    import random
    print(random.random()*100) # returns a random float between 0 to 100
    print(random.random()*50) # returns a random float between 0 to 50
    print(random.random()*100) # returns a random float between 50 to 100
    print(random.random()*500) # returns a random float between 50 to 500
randInt()