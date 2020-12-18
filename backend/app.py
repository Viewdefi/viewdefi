import json

from flask import Flask, request
from main import Viewdefi

app = Flask('app')

@app.route('/', methods=['GET'])
def index():
    return 'Success'

@app.route('/currentList', methods=['GET'])
def currentList():
    return 'Success'

if __name__ == "__main__":
    with open('./users.json') as f:
        users = json.load(f)

    owner = users['Owner']

    with open('./config.json') as f:
        config = json.load(f)

    # Set Fantopia service
    viewdefi = Viewdefi(owner, config)

    app.run(host='0.0.0.0', debug=True)