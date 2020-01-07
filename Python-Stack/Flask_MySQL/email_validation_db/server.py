from flask import Flask, redirect, request, render_template, flash, session
# import the function connectToMySQL from the file mysqlconnection.py
import re
from mysqlconnection import connectToMySQL
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
# invoke the connectToMySQL function and pass it the name of the database we're using
# connectToMySQL returns an instance of MySQLConnection, which we will store in the variable 'mysql'
mysql = connectToMySQL('email_validation')

@app.route('/')
def index():
    session.clear()
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    #adding validation rules
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!", 'email')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Email is not valid!", 'email')
    # if '_flashes' in session.keys():
    #     return redirect("/")
    else:
        mysql = connectToMySQL("email_validation")
        query = "INSERT INTO users (email, created_at, updated_at) VALUES (%(email)s, NOW(), NOW());"
        data = {
            'email': request.form['email']
           }
        new_user_id = mysql.query_db(query, data)
        flash(f"The email address you entered {request.form['email']} is a VALID email address! Thank you!", 'email')
        return redirect("/success")


@app.route('/delete', methods=['POST'])
def delete():
    mysql = connectToMySQL("email_validation")
    query = " DELETE FROM users WHERE email = '%s' "
    flash("Email deleted successfully", 'email')
    delete_user_id = mysql.query_db(query)
    return redirect("/success")


@app.route('/success', methods=['GET'])
def success():
    mysql = connectToMySQL("email_validation")
    all_users = mysql.query_db("SELECT * FROM users")
    print("Fetched all user emails", all_users)
    return render_template('success.html', users = all_users)


if __name__ == "__main__":
    app.run(debug=True)