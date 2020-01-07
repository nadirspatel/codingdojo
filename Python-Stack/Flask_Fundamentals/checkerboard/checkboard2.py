
from flask import Flask, render_template

app = Flask(__name__)

print(__name__)

@app.route("/checkerboard/")
def index():
    return render_template("index2.html", across=4, down=4)

@app.route("/checkerboard/<x>/<y>/")
def checkerboard(x, y):
    return render_template("index2.html", across=int(x), down=int(y))

if __name__ == "__main__":
    app.run(debug=True)