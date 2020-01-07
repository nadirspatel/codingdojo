from flask import Flask, render_template
app = Flask(__name__)

# @app.route('/play')
# def index():
#     return render_template("index.html", times=5)

# @app.route('/play/<times>')
# def index(times):
#     return render_template("index.html", times=int(times))
# if __name__=="__main__":
#     app.run(debug=True)

@app.route('/play/<times>/<color>')
def index(color,times):
    return render_template("index.html", color=(color), times=int(times))
if __name__=="__main__":
    app.run(debug=True)