#Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big". Example: makeItBig([-1, 3, 5, -5]) returns that same array, changed to [-1, "big", "big", -5].
def biggieSize(list):
    i = 0
    for i in list:
        if i >= 1:
            i = "big"
    print(list)
biggieSize([-1,3,5,-5])

#Count Positives - Given an array of numbers, create a function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.  (Note that zero is not considered to be a positive number).
def countPositives(list):
    newList = []
    sum = 0
    i = 0
    for i in list:
        if i > 0:
            sum = sum + 1
    list.pop()
    list.append(sum)
    print(list)
countPositives([-1,1,1,1])


#SumTotal - Create a function that takes an array as an argument and returns the sum of all the values in the array.  For example sumTotal([1,2,3,4]) should return 10
def sumTotal(list):
    for i in list:
        b = sum(list)
    print b
sumTotal([1,2,3,4,5])


#Average - Create a function that takes an array as an argument and returns the average of all the values in the array.  For example multiples([1,2,3,4]) should return 2.5
def getAvg(list):
    total = 0
    avg = 0
    for i in list:
        total = sum(list)
        avg = total / len(list)
    print avg
getAvg([1,2,3,4,5,6,7,8,9,10])


#Length - Create a function that takes an array as an argument and returns the length of the array.  For example length([1,2,3,4]) should return 4
def getLength(list):
    count = 0
    for i in list:
        count = len(list)
    print count
getLength([1,2,3,4,5])


#Minimum - Create a function that takes an array as an argument and returns the minimum value in the array.  If the passed array is empty, have the function return false.  For example minimum([1,2,3,4]) should return 1; minimum([-1,-2,-3]) should return -3.
def getMin(list):
    minimum = list[0]
    length = len(list)
    for i in list:
        if i < minimum:
            minimum = i
        elif length <= 0:
            return False
    print minimum
getMin([1,2,3])

#Maximum - Create a function that takes an array as an argument and returns the maximum value in the array.  If the passed array is empty, have the function return false.  For example maximum([1,2,3,4]) should return 4; maximum([-1,-2,-3]) should return -1.
def getMax(list):
    maximum = list[0]
    for i in list:
        if i > maximum:
            maximum = i
    print maximum
getMax([1,2,3,4,5])

#UltimateAnalyze - Create a function that takes an array as an argument and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the array.
def ultimateAnalyze(list):
    sumTotal = 0
    average = 0
    minimum = list[0]
    maximum = list[0]
    length = len(list)
    for i in list:
        sumTotal = sum(list)
        average = sumTotal / len(list)
        if i < minimum:
            minimum = i
        if i > maximum:
            maximum = i
    #print sumTotal, average, minimum, maximum, length
    dict = {'Sum Total': sumTotal, 'Average': average, 'Minimum': minimum, 'Maximum': maximum, 'Length': length}
    print dict
    #return sumTotal, average, minimum, maximum, length
ultimateAnalyze([1,2,3,4,5,6,7,8,9,10])

    

#ReverseList - Create a function that takes an array as an argument and return an array in a reversed order.  Do this without creating an empty temporary array.  For example reverse([1,2,3,4]) should return [4,3,2,1]. This challenge is known to appear during basic technical interviews.
def reverseList(list):
    list = list[::-1]
    print list
    return list
reverseList([1,2,3])