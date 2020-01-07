from flask import Flask, render_template

app = Flask(__name__)
print(__name__)

@app.route("/html_table/")
def index():
    user_info = (
        {'first_name' : 'Nadir', 'last_name' : 'Patel'},
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'John', 'last_name' : 'Supsupin'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
        )
    return render_template("index.html", users=user_info)

if __name__ == "__main__":
    app.run(debug=True)