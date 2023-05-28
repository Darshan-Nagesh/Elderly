import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation=useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Elderly",
      headerTitleStyle: {
        fontSize: 20,
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
    <SafeAreaView>
        <View>
            <Text className="font-bold">YOu are in home page</Text>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})