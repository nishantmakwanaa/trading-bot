import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, StatusBar, Platform } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const Analysis = () => {
  const chartURL = 'https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT';
  const backendURL = 'http://192.168.250.163:5000/chart-data';

  const handleWebViewMessage = (event: WebViewMessageEvent) => {
    if (!event) return;
    const chartInfo = JSON.parse(event.nativeEvent.data);
    console.log('Received Data From WebView:', chartInfo);
    sendDataToBackend(chartInfo);
  };

  const sendDataToBackend = async (chartInfo: any) => {
    try {
      console.log('Sending Data To BackEnd :', chartInfo);

      const { symbol, price, volume } = chartInfo;
      const dataToSend = {
        symbol: symbol,
        price: price === 'N/A' ? null : price,
        volume: volume === 'N/A' ? null : volume,
      };

      const response = await fetch(backendURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chartInfo: dataToSend }),
      });

      const result = await response.json();
      console.log('Data Sent Successfully :', result);
    } catch (error) {
      console.error('Error Sending Data :', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WebView 
        source={{ uri: chartURL }}
        style={{ width, height }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={handleWebViewMessage}
        injectedJavaScript={`
          setInterval(() => {
            const priceElement = document.querySelector('.some-price-class');
            const volumeElement = document.querySelector('.some-volume-class');
            
            const chartData = {
              price: priceElement ? priceElement.innerText : null,
              volume: volumeElement ? volumeElement.innerText : null,
            };
            
            console.log('Sending chart data:', chartData);
            window.ReactNativeWebView.postMessage(JSON.stringify(chartData));
          }, 5000); 
        `}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Analysis;