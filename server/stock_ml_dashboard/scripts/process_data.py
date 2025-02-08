import pandas as pd

def process_stock_data(df):
    """Extract Required Fields For Plotting."""
    if df is None:
        return None
    return df[['Symbol', 'Security Name', 'Listing Exchange', 'Market Category']]