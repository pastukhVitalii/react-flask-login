import time
from flask import Flask

app = Flask(__name__)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/login')
def index():
    return 'test'
