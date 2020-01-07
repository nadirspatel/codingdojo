from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)

@app.route('/')
def index():
    show = "hidden"
    guess = "guess"
    session.clear()
    session['rand_num'] = random.randrange(1, 100)
    return render_template('index.html', show=show)

@app.route('/', methods=['POST'])
def post():
    rand_num = session['rand_num']
    if request.form['guess'] == '':
        return redirect("/")
    else:    
        guess = request.form['guess']
        guess_num = int(guess)
        
        color_fail = ""
        color_pass = ""
        show = "inline-block"
        message = ""
        if guess_num < rand_num:
            message = "Too low"
            color_fail = "red"
            show = "inline-block"
        elif guess_num > rand_num:
            message = "Too High"
            color_fail = "red"
            show = "inline-block"
        else:
            message = "You got it right!"
            color_pass = "green"
            show = "inline-block"
        print(rand_num)
        return render_template('index.html', rand_num=rand_num, guess=guess, guess_num = guess, message=message, color_fail=color_fail, color_pass=color_pass, show=show)
if __name__=="__main__":
    app.secret_key = 'ThisIsSecretKeyFoo' # Set a secret key for security purposes
    app.run(debug=True)