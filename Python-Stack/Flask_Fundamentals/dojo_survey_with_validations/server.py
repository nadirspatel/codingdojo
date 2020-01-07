# import Flask
from flask import Flask, render_template, redirect, request, session, flash
# the "re" module will let us perform some regular expression operations
import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"

@app.route('/')
def index():
    session.clear()
    return render_template("index.html")

@app.route("/process",  methods=['POST','GET'])
def submit():
    # adding validation rules
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!", 'email')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!", 'email')

    if len(request.form['name']) < 1:
        flash("Name cannot be blank!", 'name')
    elif len(request.form['name']) <= 3:
        flash("Name must be 3+ characters", 'name')

    if len(request.form['location']) < 1:
        flash("Location cannot be blank!", 'location')
    elif len(request.form['location']) > 120:
        flash("Location must be less than 120 characters", 'location')
    
    if len(request.form['language']) < 1:
        flash("Language cannot be blank!", 'language')
    elif len(request.form['language']) > 120:
        flash("Language must be less than 120 characters", 'language')

    if '_flashes' in session.keys():
        return redirect("/")
    else:
        return redirect("/success")

@app.route("/success", methods=['POST','GET'])
def result():
    print(request.form)
    name = request.form['name']
    email = request.form['email']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    return render_template("success.html", name=name, email=email, location=location, language=language, comment=comment)

if __name__=="__main__":
    app.run(debug=True)