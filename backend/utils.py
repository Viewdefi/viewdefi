import hmac
import hashlib
import base64

import os
import requests
import random
import string
import time

def get_signature(method, path, nonce, timestamp, service_api_secret, body=None):
    req = ''
    if body is not None:
        keys = sorted(body.keys())
        req = '&'.join([key_ + '=' + str(body[key_]) for key_ in keys])

    if req != '':
        requiredMsg = nonce + str(timestamp) + method + path + '?' + req
    else:
        requiredMsg = nonce + str(timestamp) + method + path

    hash_ = hmac.new(
        bytes(service_api_secret, 'utf-8'),
        bytes(requiredMsg, 'utf-8'),
        hashlib.sha512
    ).digest()
    res = base64.b64encode(hash_).strip()

    return res.decode()

def get_transaction_info(
    server_url: str,
    service_api_key: str,
    service_api_secret: str,
    txHash: str
):
    nonce = ''.join(random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(8))
    timestamp = int(round(time.time() * 1000))

    path = '/v1/transactions/' + txHash

    headers = {
        'service-api-key': service_api_key,
        'nonce': nonce,
        'timestamp': str(timestamp)
    }

    signature = get_signature('GET', path, nonce, timestamp, service_api_secret)
    headers['signature'] = signature

    res = requests.get(server_url + path, headers=headers)
    return res.json()