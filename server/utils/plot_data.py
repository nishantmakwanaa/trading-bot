import matplotlib.pyplot as plt

def plot_stock_data(df):
    plt.figure(figsize=(10, 5))
    plt.plot(df['timestamp'], df['price'], label='Price')
    plt.plot(df['timestamp'], df['moving_average'], label='Moving Average')
    plt.xlabel('Time')
    plt.ylabel('Price')
    plt.title('Stock Price and Moving Average')
    plt.legend()
    plt.show()
