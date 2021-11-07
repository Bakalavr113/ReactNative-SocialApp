import React from 'react'
// import Login from './pages/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';import {
    StyleSheet,
  } from "react-native";
  import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import ProfileContainer from '../Home/ProfileContainer';
import FriendsContainer from '../Friends/FriendsContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import PeopleContainer from '../People/PeopleContainer';
import MovieContainer from '../Home/MovieContainer';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Nav = () => {
    return (
        <NavigationContainer >
      
     
        
        <Stack.Navigator>
        <Stack.Screen
          name="Back"
          component={TabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Movie" component={MovieContainer}  options={{ headerShown: false }}/>
      </Stack.Navigator>
      </NavigationContainer>
    
    )
}
const  TabNav = () => {
    return(
        <Tab.Navigator style={styles.nav} screenOptions={{
            tabBarStyle: { backgroundColor: 'black', borderTopWidth: 0,  elevation: 0 },
          }} > 
                <Tab.Screen name="Movie List"  component={ProfileContainer} options={{
                     headerTintColor: 'white',
                     headerShown: false,
                     headerTransparent: true,
                      headerStyle: {
                        backgroundColor: 'black',
                       
                      },
                      
                  tabBarLabel: 'Movie',
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-film" color={color} size={size} />
                  ),
                }} />
                  <Tab.Screen name="Weather" component={DialogsContainer} options={{
                  tabBarLabel: 'Weather',
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="partly-sunny" color={color} size={size} />
                  ),
                }} />
                 <Tab.Screen name="Music" component={PeopleContainer} options={{
                  tabBarLabel: 'Music',
                  tabBarIcon: ({ color, size }) => (
                   
                    <Ionicons name="musical-notes-sharp" size={size}   color={color} />
                  ),
                }} />
               
                </Tab.Navigator>
    )
     
}
const styles = StyleSheet.create({
    nav: {
      backgroundColor: "black"


    }
})
export default Nav
