from scripts.load_data import load_stock_data
from scripts.process_data import process_stock_data
from scripts.plot_graph import plot_graph

if __name__ == "__main__":
    file_path = "data/example_dataset.csv"
    df = load_stock_data(file_path)
    processed_df = process_stock_data(df)

    if processed_df is not None:
        plot_graph(processed_df)