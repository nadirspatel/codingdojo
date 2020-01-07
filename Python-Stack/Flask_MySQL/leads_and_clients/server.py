from flask import Flask, redirect, request, render_template, session
# import the function connectToMySQL from the file mysqlconnection.py
from mysqlconnection import connectToMySQL
app = Flask(__name__)
# invoke the connectToMySQL function and pass it the name of the database we're using
# connectToMySQL returns an instance of MySQLConnection, which we will store in the variable 'mysql'
mysql = connectToMySQL('leads_and_clients')

@app.route('/')
def index():
    mysql = connectToMySQL("leads_and_clients")
    all_clients = mysql.query_db("SELECT * FROM clients")
    print("Fetched all clients", all_clients)
    return render_template('index.html', clients = all_clients)

@app.route('/create_client', methods=['POST'])
def create():
    mysql = connectToMySQL("leads_and_clients")
    query = "INSERT INTO clients (first_name, last_name, leads, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(leads)s, NOW(), NOW());"
    data = {
            'first_name': request.form['first_name'],
            'last_name':  request.form['last_name'],
            'leads':  request.form['leads'],

           }
    new_client_id = mysql.query_db(query, data)
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)