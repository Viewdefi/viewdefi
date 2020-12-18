import base64
import time
import hashlib
import json

from ST import ServiceToken
from utils import get_transaction_info

class Viewdefi:
    def __init__(
        self,
        owner: dict,
        config: dict
    ):
        self.owner = owner
        self.st = ServiceToken(owner, config)
        self.config = config