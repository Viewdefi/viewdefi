import json

from flask import Flask, request
from main import Viewdefi

app = Flask('app')

@app.route('/', methods=['GET'])
def index():
    return 'Server is listening at :5000'

# fetch all locations api
@app.route('/all_locations', methods=['GET'])
def fetchAllLocations():
    return json.dumps({
        "data": [{
            "lat": 37.5120885,
            "lng": 127.0179846,
            "name": "논현 1동",
            "fullName": "서울시 강남구 논현 1동",
            "price": 419.10,
            "apy": "8.9%"
        }, {
            "lat": 37.5012113,
            "lng": 127.0334121,
            "name": "역삼동",
            "fullName": "서울시 강남구 역삼동",
            "price": 411.10,
            "apy": "12.1%"
        }, {
            "lat": 37.5067738,
            "lng": 127.0776962,
            "name": "잠실동",
            "fullName": "서울시 강남구 잠실동",
            "price": 454.10,
            "apy": "14.7%"
        }, {
            "lat": 37.4686291,
            "lng": 127.0185656,
            "name": "대흥동",
            "fullName": "서울시 강남구 대흥동",
            "price": 323.10,
            "apy": "13.2%"
        }]
    })

# current balance of link
@app.route('/wallet/link/balance/<address>', methods=['GET'])
def linkBalanceOf(address):
    pass

# transfer link
@app.route('/wallet/link/balance', methods=['POST'])
def transferLink():
    pass

if __name__ == "__main__":
    with open('./users.json') as f:
        users = json.load(f)

    owner = users['Owner']

    with open('./gov_config.json') as f:
        gov_config = json.load(f)
    
    with open('./link_config.json') as f:
        link_config = json.load(f)

    # Viewdefi service
    viewdefi = Viewdefi(owner, gov_config, link_config)

    app.run(host='0.0.0.0', debug=True)