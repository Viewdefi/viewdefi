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
GLOBAL_COUNTER = 0

db = []
stats_x_label = []
stats_y_value = []

plt.style.use('dark_background')

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
    global GLOBAL_COUNTER
    GLOBAL_COUNTER += 1
    url = SERVICE_URL + "?serviceKey=" + SERVICE_KEY
    url += "&pageNo=" + str(pageNo)
    url += "&numOfRows=" + str(rows)
    url += "&LAWD_CD=" + str(city_code)
    url += "&DEAL_YMD=" + str(deal_ymd)

    r = requests.get(url)
    root = ET.fromstring(r.text)
    result = root.findtext(".//resultCode")
    if result == "99":
        print("limited number of service requests.")
        exit(0)

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

def save_stats(filename:str):
    plt.plot(stats_x_label, stats_y_value, linestyle='--', linewidth=1.5)
    plt.xticks(rotation=45)
    plt.ylabel('index')
    plt.xlabel('deal year and month')
    plt.savefig(filename)
    plt.clf()

def fetch_by_city(city_code:int, filename: str):
    global db
    global stats_x_label
    global stats_y_value

    # initialize
    db = []
    stats_x_label = []
    stats_y_value = []

    now = datetime.now()
    for ymd in date_iterator(12, 2017, now.month, now.year):
        print("fetching real estate trade for ", ymd)
        pageNo = 1
        rows = 5000
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

    print("[api call count]", GLOBAL_COUNTER)
    save_stats(filename)

if __name__ == "__main__":
    print("SERVICE_KEY: ", SERVICE_KEY)
    print("SERVICE_URL: ", SERVICE_URL)

    fetch_by_city(11680, "graph_gangnam.png")
    fetch_by_city(11650, "graph_seocho.png")
    fetch_by_city(11440, "graph_mapo.png")
    fetch_by_city(41135, "graph_bundang.png")
    fetch_by_city(41131, "graph_soojeong.png")
    fetch_by_city(28237, "graph_boopyung.png")
    fetch_by_city(41173, "graph_dongan.png")
    fetch_by_city(11620, "graph_gwanak.png")