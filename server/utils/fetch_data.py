import requests

try:
    response = requests.get("https://api.tradingview.com/your-endpoint")
    response.raise_for_status()
    print("Connection successful:", response.json())
except requests.exceptions.RequestException as e:
    print("Error:", e)
