# # 1. Basic - Print all the numbers/integers from 0 to 150
for count in range(0,151):
     print(count)

# # Multiples of 5 - Print all the multiples of 5 from 5 to 1,000,000
for count in range(5,1000001,5):
     print(count)

# Counting - Print integers 1 to 100. 
# If divisible by 5 print "Coding" instead
# If divisible by 10, also print "Dojo"
for count in range(1,101):
    if count % 5 == 0: 
        print("Coding")
    else: 
        print(count)
    if count % 10 == 0:
        print("Dojo")

#Whoa, That suckers Huge - Add odd integers from 0 500,000 and print the final sum.
i = 0
sum = 0
while i <= 500000:
    if i % 2 != 0:
        sum = sum + i
    i = i + 1
print(sum)

#Countdown by Fours - Print positive numbers starting at 2018, counting down by fours (exclude 0).
for count in range(1,2018,):
    print(count)

#Flexible countdown - Based on earlier "Countdown by Fours", 
# given lowNum, highNum, mult, print multiples of mult from lowNum to highNum, using a FOR loop.  
# For (2,9,3), print 3 6 9 (on successive lines)



# understand difference between these:
list = [3,5,1,2]
for i in list:
    print(i)
# returns 3 5 1 2 ( on successive lines)

list = [3,5,1,2]
for i in range(list):
    print(i)
# returns syntax error?

list = [3,5,1,2]
for i in range(len(list)):
    print(i)
# returns 0 1 2 3 (on successive lines)