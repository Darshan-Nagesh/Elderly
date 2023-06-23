import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data
import { FontAwesome } from '@expo/vector-icons';
const AccountDetails = ({user,email,mobile,name,address}) => {
  //console.log(email);
  //console.log(mobile);
  return (
	<View className="mt-4 py-3 flex-row space-x-8 justify-between align-baseline ">
  {/* left part of the details */}
        <View className="ml-4">
        
        <View className="flex-row items-center">
          <Text className="text-base font-semibold">Name : </Text>
          <Text className="text-purple-700 font-extrabold text-base">{name}</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-base font-semibold">Email : </Text>
          <Text className="text-purple-700 font-extrabold text-base">{email}</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-base font-semibold">Mobile number : </Text>
          <Text className="text-purple-700 font-extrabold text-base">{mobile}</Text>
        </View>
        </View>
        <View className="mr-5">
        <FontAwesome name="user-circle" size={95} color="gray" />
        </View>
	</View>
  )
}

export default AccountDetails