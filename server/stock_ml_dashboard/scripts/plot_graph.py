import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import time
from datetime import datetime

def plot_graph(df):
    """Simulates Real-Time Stock Price Movement Using A Line Chart."""
    plt.ion()
    fig, ax = plt.subplots(figsize=(12, 6))

    stock_symbol = np.random.choice(df['Symbol'])
    time_series = []
    price_series = []

    while True:
        ax.clear()

        current_time = datetime.now().strftime('%H:%M:%S')
        new_price = np.random.uniform(100, 500)

        time_series.append(current_time)
        price_series.append(new_price)

        ax.plot(time_series, price_series, marker='o', linestyle='-', color='b', label=stock_symbol)

        ax.set_title(f"Live Stock Price for {stock_symbol}", fontsize=14)
        ax.set_xlabel("Time", fontsize=12)
        ax.set_ylabel("Stock Price (USD)", fontsize=12)
        ax.legend()
        plt.xticks(rotation=45)

        plt.pause(3)

    plt.ioff()
    plt.show()