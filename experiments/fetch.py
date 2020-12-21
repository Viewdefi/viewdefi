import os
import requests
import xml.etree.ElementTree as ET
import matplotlib.pyplot as plt

from bs4 import BeautifulSoup
from dotenv import load_dotenv
from datetime import datetime

load_dotenv(verbose=True)
SERVICE_KEY = os.getenv("SERVICE_KEY")
SERVICE_URL = "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev"

db = []
stats_x_label = []
stats_y_value = []

def date_iterator( start_month, start_year, end_month, end_year ):
    ym_start= 12*start_year + start_month - 1
    ym_end= 12*end_year + end_month - 1
    for ym in range( ym_start, ym_end ):
        y, m = divmod( ym, 12 )
        m = "0" + str(m) if m < 10 else m
        yield str(y) + str(m)

def call_trade_api(pageNo:int, rows: int, city_code: int, deal_ymd: int):
    """call trade information
    pageNo -- page number
    rows -- number of records to read
    city -- city_code
    """
    url = SERVICE_URL + "?serviceKey=" + SERVICE_KEY
    url += "&pageNo=" + str(pageNo)
    url += "&numOfRows=" + str(rows)
    url += "&LAWD_CD=" + str(city_code)
    url += "&DEAL_YMD=" + str(deal_ymd)

    r = requests.get(url)
    root = ET.fromstring(r.text)
    items = root.findall(".//item")
    total_cnt = root.findtext(".//totalCount")
    result = []
    for item in items:
        result.append({
            "dealYmd": deal_ymd,
            "serialNo": item.findtext("일련번호"),
            "apt": item.findtext("아파트"),
            "poolName": item.findtext("법정동"),
            "price": int(item.findtext("거래금액").replace(',', ''))
        })
    return result, int(total_cnt)

def put_data(el):
    found = False
    for item in db:
        if item["serialNo"] == el["serialNo"]:
            item["price"] = el["price"]
            found = True

    if not found :
        db.append(el)

def pin_for_stats(ymd):
    _sum = 0
    _cnt = 0
    for item in db:
        _sum += item["price"]
        _cnt += 1

    index = 0 if _cnt == 0 else _sum/_cnt
    if index != 0:
        stats_x_label.append(str(ymd))
        stats_y_value.append(index)

def save_stats():
    print(stats_x_label)
    print(stats_y_value)

    plt.plot(stats_x_label, stats_y_value)
    plt.xticks(rotation=90)
    plt.ylabel('index')
    plt.xlabel('deal year and month')
    plt.savefig('foo.png')

def fetch_by_city(city_code:int):
    now = datetime.now()
    for ymd in date_iterator(12, 2015, now.month, now.year):
        print("fetching real estate trade for ", ymd)
        pageNo = 1
        rows = 50
        result, total_cnt = call_trade_api(pageNo, rows, city_code, ymd)
        for el in result:
            put_data(el)

        while total_cnt > pageNo * rows:
            pageNo += 1
            result, total_cnt = call_trade_api(pageNo, rows, city_code, ymd)
            for el in result:
                put_data(el)

        # pin curent data to show statistical graph.
        pin_for_stats(ymd)
        print("[done for]", ymd)

    save_stats()

if __name__ == "__main__":
    print("SERVICE_KEY: ", SERVICE_KEY)
    print("SERVICE_URL: ", SERVICE_URL)

    fetch_by_city(11680)