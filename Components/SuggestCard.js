import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Pressable } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import client, { urlFor } from '../sanity';
const SuggestCard = ({url,price,title}) => {
    const addtoCart=()=>{
        console.log("clicked add to cart button in suggest cart component")
    }
  return (
    <View className="ml-2 border-2 border-gray-500">
        <Image source={{uri:urlFor(url).url()}} className="h-24 w-32">

        </Image>
        <Text className="text-center text-blue-900">{title.slice(0,10)}...</Text>
        <Pressable onPress={addtoCart} className="">
                <View className="bg-green-600 flex-row align-middle justify-center space-x-2">
                <EvilIcons name="cart" size={23} color="white" />
                <Text className="text-slate-100 text-lg">Add</Text>
                </View>
        </Pressable>
    </View>
  )
}

export default SuggestCard

const styles = StyleSheet.create({})