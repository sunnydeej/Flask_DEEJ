from flask import Flask

app = Flask(__name__)
print("uyes")
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
    
