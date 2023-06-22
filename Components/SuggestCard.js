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
    <View className="ml-2 border-2 border-gray-500 rounded-lg">
        <Image source={{uri:urlFor(url).url()}} className="h-24 w-32">

        </Image>
        <Text className="text-center text-blue-900">{title}</Text>
        
    </View>
  )
}

export default SuggestCard

const styles = StyleSheet.create({})