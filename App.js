import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/redux-store';
import Nav from './pages/Navigations/Navigation';
import { styles } from './style';
import MovieNav from './pages/Home/MovieNav';
function App() {
  
  return (
    <Provider store={store}>
<View style={styles.container}>
<Nav/>
    
</View>
    
  </Provider>
  );
}

export default App