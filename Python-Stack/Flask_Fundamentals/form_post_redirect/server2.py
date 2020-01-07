from flask import Flask, render_template, request, redirect
import logging

app = Flask(__name__)

# our index route will handle rendering our form
@app.route('/')
def index():
    return render_template("index.html")

# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
@app.route('/result', methods= ['POST', 'GET'])
def result():
    print(request.form)
    print('name',request.form['name'])
    print('email',request.form['email'])
    print('location',request.form['location'])
    print('comments',request.form['comments'])
    return render_template("result2.html", result = result)

# this route will handle /danger, print a message and take them back to root/homepage
@app.route('/danger')
def danger():
    return index

if __name__=="__main__":
    # run our server
    app.run(debug=True) 