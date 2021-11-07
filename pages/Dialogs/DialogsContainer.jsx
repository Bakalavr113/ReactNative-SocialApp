import React, { useRef } from 'react'
import { StyleSheet,Animated, Button,Text, View,SafeAreaView, Easing,ImageBackground } from 'react-native';
const DialogsContainer = () => {
    
    const animate_state = {
        start: 0,
        end: 100
    }

    const value = useRef(new Animated.Value(animate_state.start)).current

    const startAnimate = () => {
        Animated.timing(value, { toValue: animate_state.end, useNativeDriver: true, duration: 1000 }).start()
    }
    const inputRange = [animate_state.start, animate_state.end] //или Object.values(animate_state)
    const translateY = value.interpolate({ inputRange, outputRange: [0, 300] })
    const opacity = value.interpolate({ inputRange, outputRange: [0.1, 1] })

    return <Animated.View style={{ transform: [{ translateY }], opacity, height: 200, width: 200, justifyContent: 'center', backgroundColor: '#4649ad' }}  >
        <Button title={'start animate'} onPress={startAnimate} />
    </Animated.View>
    }

    


const styles = StyleSheet.create({
    nav: {
        flex: 1


    }
})
export default DialogsContainer
