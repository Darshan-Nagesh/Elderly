import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const SearchByCategory = () => {
    const navigation=useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: "Shop by Categories",
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
      <Text>SearchByCategory</Text>
    </View>
  )
}

export default SearchByCategory

const styles = StyleSheet.create({})