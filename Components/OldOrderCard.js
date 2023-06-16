import { View, Text,Image } from 'react-native'
import React from 'react'

const OldOrderCard = ({name,image,shop}) => {
  return (
    <View className="border-2 ml-1 mr-1 border-gray-500 mt-3">
    <View className="flex-row justify-between ml-4 mt-3 w-11/12">
        <View >
            <View className="mt-4">
                <View className="flex-row items-center">
                <Text className="text-base font-bold">Item Name : </Text>
                <Text className="font-extrabold text-base text-purple-700">{name}</Text>
                </View>
                <View className="flex-row items-center">
                <Text className="text-base font-bold">Purchased From : </Text>
                <Text className="font-extrabold text-base text-purple-700">{shop}</Text>
                </View>
            </View>

        </View>
        <View>
            <Image source={{uri:image}} className="w-30 h-40 rounded-md" />
        </View>
    </View>
</View>
  )
}

export default OldOrderCard