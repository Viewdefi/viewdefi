import os
import requests
import xml.etree.ElementTree as ET

from bs4 import BeautifulSoup
from dotenv import load_dotenv

load_dotenv(verbose=True)
SERVICE_KEY = os.getenv("SERVICE_KEY")
SERVICE_URL = "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev"

def get_trade_history(pageNo:int, rows: int, city_code: int, deal_ymd: int):
    url = SERVICE_URL + "?serviceKey=" + SERVICE_KEY
    url += "&pageNo=" + str(pageNo)
    url += "&numOfRows=" + str(rows)
    url += "&LAWD_CD=" + str(city_code)
    url += "&DEAL_YMD=" + str(deal_ymd)

    r = requests.get(url)
    root = ET.fromstring(r.text)
    items = root.findall(".//item")
    result = []
    for item in items:
        result.append({
            "serialNo": item.findtext("일련번호"),
            "apt": item.findtext("아파트"),
            "poolName": item.findtext("법정동"),
            "price": item.findtext("거래금액")
        })
    return result


if __name__ == "__main__":
    print("SERVICE_KEY: ", SERVICE_KEY)
    print("SERVICE_URL: ", SERVICE_URL)

    result = get_trade_history(1, 10, 11680, 202010)
    print(result)