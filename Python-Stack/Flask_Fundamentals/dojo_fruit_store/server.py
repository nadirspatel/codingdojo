from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
print(__name__)

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    student_id = request.form['student_id']
    strawberry = request.form['strawberry']
    raspberry = request.form['raspberry']
    apple = request.form['apple']
    total_quantity = int(strawberry)+int(raspberry)+int(apple)

    print(request.form)
    return render_template("checkout.html", checkout=checkout, total_quantity=total_quantity)

@app.route('/danger')         
def danger():
    return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)    