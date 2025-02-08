import pandas as pd

file_path = "./data/example_dataset.csv"

def load_stock_data(file_path):
    """Load Stock Data From A CSV File."""
    try:
        df = pd.read_csv(file_path)
        return df
    except Exception as e:
        print(f"Error Loading File : {e}")
        return None