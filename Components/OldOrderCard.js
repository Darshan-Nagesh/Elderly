import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data
const OldOrderCard = ({name,image,shop}) => {
    //console.log(`inside the order card ${image}`)
  return (
    <ScrollView>

    <View className="border-2 ml-2 mr-2 border-gray-500 mt-3 ">
    <View className="flex-row justify-between ml-4 mt-3 mb-6 ">
        <View >
            <View className="mt-4">
                <View className="flex-row items-center">
                <Text className="text-base font-bold">Item Name : </Text>
                <Text className="font-extrabold text-base text-purple-700">{name}</Text>
                </View>
                <View className=" items-center">
                <Text className="text-base font-bold">Purchased From : </Text>
                <Text className="font-extrabold text-base text-purple-700">{shop}</Text>
                </View>
            </View>

        </View>
        <View className="mr-5 border-2 border-gray-600 rounded-xl">
            <Image source={{uri:urlFor(image).url()}} className="w-36 h-32 rounded-xl" />
        </View>
    </View>
</View>
    </ScrollView>
  )
}

export default OldOrderCard