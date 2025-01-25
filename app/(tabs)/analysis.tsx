import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, StatusBar, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const Analysis = () => {
  const chartURL = 'https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WebView 
        source={{ uri: chartURL }}
        style={{ width, height }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
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