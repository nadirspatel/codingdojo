from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = "jsklfjlajflkjdf"

@app.route('/')
def index():
    render_template("index.html")

@app.route('/register', methods=['POST'] )
def register():
    for i in request.form:
        if len(request.form[i]) < 1:
            flash("{} is not long enough".format[i.split('_')])

app.run(debug=True)