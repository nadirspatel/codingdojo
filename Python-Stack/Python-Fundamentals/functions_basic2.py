#Countdown - Create a function that accepts a number as an input.  Return a new array that counts down by one, from the number (as arrays 'zero'th element) down to 0 (as the last element). For example countDown(5) should return [5,4,3,2,1,0].
list = []
def Countdown(n):
    for i in range(0,n):
        list.append(i)
    list.reverse()
    print list
Countdown(10)

#Print and Return - Your function will receive an array with two numbers. 
# Print the first value, and return the second.
list = [1,2]
a = list[0]
b = list[1]
def printAndReturn():
    print(a)
    return(b)
printAndReturn()


#First Plus Length - Given an array, return the sum of the first value in the array, plus the array's length.
#list = 

def firstPlusLength(list):
    firstValue = list[0]
    i = len(list)
    #sum = 0
    sum = firstValue + i
    print sum
firstPlusLength([1,2,3,4,5])



#Values Greater than Second - Write a function that accepts any array, 
# and returns a new array with the array values that are greater than its 2nd value. 
# Print how many values this is.  If the array is only one element long, have the function return False
def valuesGreaterSecond(arr):
    arrNew = []
    if len(arr) == 1: # if length is 1, return False
        return False
    for i in range(0, len(arr)): # iterate through array
        if arr[i] > arr[1]:
            arrNew.append(arr[i])
    print(arrNew) # print the new array
    print(len(arrNew)) # print the length of new array
valuesGreaterSecond([1,2,3,4,5])


#This Length, That Value - Write a function called lengthAndValue which accepts two parameters, 
# size and value. This function should take two numbers and return a list of length size containing 
# only the number in value. For example, lengthAndValue(4,7) should return [7,7,7,7].
def lengthAndValue(a,b):
    list = []
    list.append(b)
    print(list * a)
lengthAndValue(10,2)