def registration(first_name, last_name, email, password):
register_dictionary = {}
register_dictionary['first_name'] = first_name
register_dictionary['last_name'] = last_name
register_dictionary['email'] = email
register_dictionary['password'] = password
return register_dictionary
# create a new dictionary (key:value pairs)

def get_user_info():
    first = input("First name: \n")
    last = input("Last name: \n")
    email = input("Email: \n")
    password = input("Password: \n")

    db_entry = registration(first, last, email, password)
    save_into_database(db_entry)

def save_into_database(user):
    database.append(user)

def num_of_users(num):
    for i in range(0,num):
        get_user_info()

num_of_users(5)
print(database)