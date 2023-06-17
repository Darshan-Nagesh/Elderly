import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './Screens/LoginScreen';
import SignUp from './Screens/SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchByCategory from './Screens/SearchByCategory';
import ShopByStore from './Screens/ShopByStore';
import Cart from './Screens/Cart';
import Profile from './Screens/Profile';
import PostJob from './Screens/PostJob';
import Bookings from './Screens/Bookings';
import Product from './Screens/Product';
const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const stack=createNativeStackNavigator();
    function  Bottomtabs(){
      return (
          <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel:"Home",headerShown:false,tabBarIcon:({focused})=>focused?(
                  <Entypo name="home" size={30} color="black" />
              ):(
                <Feather name="home" size={24} color="black" />
              )}} />
              <Tab.Screen name="SearchByCategory" component={SearchByCategory} options={{tabBarLabel:"Category",headerShown:false,tabBarIcon:({focused})=>focused?(
                 <MaterialCommunityIcons name="view-grid" size={30} color="black" />
              ):(
                <MaterialIcons name="grid-view" size={24} color="black" />
              )}} />
              <Tab.Screen name="Cart" component={Cart} options={{tabBarLabel:"Cart",headerShown:false,tabBarIcon:({focused})=>focused?(
                  <MaterialCommunityIcons name="cart" size={30} color="black" />
              ):(
                <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
              )}} />
              <Tab.Screen name="ShopByStore" component={ShopByStore} options={{tabBarLabel:"Store",headerShown:false,tabBarIcon:({focused})=>focused?(
                  <MaterialCommunityIcons name="store" size={30} color="black" />
              ):(
                <MaterialCommunityIcons name="store-outline" size={24} color="black" />
              )}} />
              <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel:"Account",headerShown:false,tabBarIcon:({focused})=>focused?(
                  <MaterialCommunityIcons name="account" size={30} color="black" />
              ):(
                <MaterialCommunityIcons name="account-outline" size={24} color="black" />
              )}} />
          </Tab.Navigator>
      )
  }
  //Main is the home screen of the our app where bottom tab navigation is defined 
  //in the Main route home is displayed because of the First component in Tab naviagtion is HomeSceen Component
  return (
        <NavigationContainer>
        <stack.Navigator>
        
            <stack.Screen name="Main" component={Bottomtabs} options={{headerShown:false}} />
        <stack.Screen name="Register" component={SignUp} options={{headerShown:false}} />
        
            <stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}  />
          
            <stack.Screen name="PostJob" component={PostJob} options={{headerShown:false}} />
            <stack.Screen name="Bookings" component={Bookings} options={{headerShown:false}} />
            <stack.Screen name="Products" component={Product} options={{headerShown:false}} />
        </stack.Navigator>
        </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})