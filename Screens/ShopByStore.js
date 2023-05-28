import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const ShopByStore = () => {
    const navigation=useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: "Nearby Stores",
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#312B66",
          height: 80,
          borderBottomColor: "transparent",
          shadowColor: "transparent",
        },
      });
    },[]);
  return (
    <View>
      <Text>ShopByStore</Text>
    </View>
  )
}

export default ShopByStore

const styles = StyleSheet.create({})