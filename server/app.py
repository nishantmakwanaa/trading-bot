from flask import Flask, jsonify
import pandas as pd
from utils.fetch_data import fetch_stock_data
from utils.process_data import process_stock_data
from utils.plot_data import plot_stock_data

app = Flask(__name__)

@app.route('/live-data', methods=['GET'])
def live_data():
    # Fetch live data from TradingView API
    raw_data = fetch_stock_data()
    
    # Process the data
    processed_data = process_stock_data(raw_data)
    
    # Save to CSV
    processed_data.to_csv('data/stock_data.csv', index=False)
    
    # Plot the data
    plot_stock_data(processed_data)
    
    return jsonify(processed_data.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
