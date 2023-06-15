import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data

const ShopByStore = () => {
   //query to fetch details of all stores refer docs for better understanding
   let query=`*[_type == "store"]
   {
     name,_id,desc,image{asset{_ref}}
   }
   `
   //uncomment this when needed
   async function fetchdata(){
    //const response = await client.fetch(query);
   }
   

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
      <Text>ShopByStor</Text>
    </View>
  )
}

export default ShopByStore

const styles = StyleSheet.create({})