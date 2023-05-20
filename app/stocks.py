import yfinance as yf


def get_dow30_data(start_date, end_date):
    data = yf.download("^DJI", start=start_date, end=end_date, interval="1d")
    data = data["Adj Close"].to_dict()
    if len(data) == 0 or data is None or data == {} or data == dict():
        return {}
    return data
