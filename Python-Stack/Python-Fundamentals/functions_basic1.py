def a():
    return 5
print(a())
#returns 5

def a():
    return 5
print(a()+a())
#returns 10 

def a():
    return 5
    return 10
print(a())     
#returns 5

def a():
    return 5
    print(10)
print(a())  
#returns 5   

def a():
    print(5)
x = a()
print(x)  
#returns 5   

def a(b,c):
    print(b+c)
print(a(1,2) + a(2,3))   
# a(3) + a(5) = 8
#prints 8

def a(b,c):
    return str(b)+str(c)
print(a(2,5))
#prints 25

def a():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(a()) 
#prints 100, 10

def a(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(a(2,3)) # prints 7
print(a(5,3)) # prints 14
print(a(2,3) + a(5,3)) #prints a(7) + a(14) = 21  

def a(b,c):
    return b+c
    return 10
print(a(3,5)) # prints 8 

b = 500
print(b) # prints 500
def a():
    b = 300
    print(b) #prints 300
print(b) # ignored?
a() # calls function a(), so prints 300 second time
print(b) # prints 300
# prints 500, 500, 300, 500



b = 500
print(b) #prints 500
def a():
    b = 300
    print(b)
    return b
print(b) # prints 500
a() # prints 300
print(b) #prints 500
#prints 500, 500, 300, 500


b = 500
print(b) #prints 500
def a():
    b = 300
    print(b) #prints 300
    return b #returns 300
print(b) # prints 500
b=a()
print(b) # prints 300
# prints 500, 500, 300, 300

def a():
    print(1)
    b()
    print(2)
def b():
    print(3)
a()
# print 1,3,2

def a():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = a()
print(y)
#prints 1,3,5,10