import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, ImageBackground } from 'react-native';
const Login = () => {
    return (
        <View >
        <ImageBackground source={require('../../images/background.png')} style={styles.image}>
     <SafeAreaView style={styles.container}>
     <Text style={styles.title} >Welcome back</Text>
     <Text style={styles.subtitle} >Log in with your account</Text>
     </SafeAreaView>
         
        </ImageBackground>
        <StatusBar style="light" />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
     marginTop: 150,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    image:{
      width: "100%",
      height: "100%"
    },
    title: {
      fontSize: 40,
      fontWeight: "600",
      color: "white",
      letterSpacing: 3,
    },
    subtitle: {
      fontSize: 18,
      color: "rgba(255, 255, 255, 0.8)",
      color: "white",
      letterSpacing: 2,
    }
  });
export default Login
