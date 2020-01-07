from flask import Flask, render_template, request, redirect, session
import random
import datetime

app = Flask(__name__)
print(__name__)

@app.route('/') 
def index():
    session.clear()
    if 'ninjas_gold' in session:
        pass
    else:
        session['ninjas_gold'] = int(0)
    ninjas_gold = session['ninjas_gold']
    return render_template("index.html", ninjas_gold=session['ninjas_gold'] )

@app.route('/process_money', methods=['POST'] )
def process():
    message_log = []

    if request.form['building'] == 'farm':
        rand_gold = int(random.randrange(10,20))
        session['ninjas_gold'] += rand_gold
        session['message'] = "You gained {} gold from the farm!".format(rand_gold)

    if request.form['building'] == 'cave':
        rand_gold = int(random.randrange(5,10))
        session['ninjas_gold'] += rand_gold
        session['message'] = "You gained {} gold from the cave!".format(rand_gold)

    if request.form['building'] == 'house':
        rand_gold = int(random.randrange(2,5))
        session['ninjas_gold'] += rand_gold
        session['message'] = "You gained {} gold from the house!".format(rand_gold)

    elif request.form['building'] == 'casino':
        rand_gold = int(random.randrange(-50,50))
        if rand_gold < 0:
            session['ninjas_gold'] = int(session['ninjas_gold']) - rand_gold
            session['message'] = "You lost {} gold from the casino!".format(rand_gold)
        elif rand_gold > 0:
            session['ninjas_gold'] += rand_gold
            session['message'] = "You gained {} gold from the casino".format(rand_gold)

    return render_template("index.html", message = session['message'], message_log = message_log, ninjas_gold = session['ninjas_gold'])

if __name__=="__main__":  
    app.secret_key = 'ThisIsSecretKeyFoo' # Set a secret key for security purposes 
    app.run(debug=True)    