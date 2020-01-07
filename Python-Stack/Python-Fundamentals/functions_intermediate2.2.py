# 2. Create a function that given a list of dictionaries, it loops through each dictionary in the list and prints each key and the associated value.  For example, given the following list:

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def iterateDictionary():
    for i in students:
        print("first_name - {}, last_name - {}".format(i['first_name'], i['last_name']))
iterateDictionary()


# iterateDictionary( students ) should output:
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel