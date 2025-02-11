import pandas as pd
import numpy as np

def process_stock_data(raw_data):
    # Convert raw data to DataFrame
    df = pd.DataFrame(raw_data)
    
    # Example processing: calculate moving average
    df['moving_average'] = df['price'].rolling(window=5).mean()
    
    return df
