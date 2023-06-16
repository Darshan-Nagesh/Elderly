import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data

const Bookings =() => {
  let query=`*[_type=="service"]
  {
    name,datetime,location
  }
  `
  //enclose this inside a function
  //const response = await client.fetch(query);
    const navigation=useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          title: "Newjob Posting",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#312B66",
            height: 69,
            borderBottomColor: "transparent",
            shadowColor: "transparent",
          },
        });
      },[]);
  return (
    <View>
      <Text>Bookings</Text>
    </View>
  )
}

export default Bookings

const styles = StyleSheet.create({})