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
        govConfig: dict,
        linkConfig: dict
    ):
        self.owner = owner
        self.govST = ServiceToken(owner, govConfig)
        self.lnST = ServiceToken(owner, linkConfig)