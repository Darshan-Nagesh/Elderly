import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
const Jobcard = ({data}) => {
    const requestService=()=>{
        // service request code should come here
        console.log("setrvice requested");
    }
  return (
    <View className="bg-slate-300 mt-4 py-4">
        <View className="flex-row justify-around">

    {/* data part */}
        <View>
            <Text className="font-bold text-lg">{data.jobtitle}</Text>  
            <Text className="font-bold">{data.address}</Text>
            <Text>Workling hours:{data.available_time}</Text>
            <View className="flex-row justify-center mt-3 space-x-6 items-center">

            {
                
            (data.status==="Busy")?(
                <View className="flex-row gap-4 align-bottom ">
                <Octicons name="dot-fill" size={24} color='red' />
                    <Text className="text-red-600 font-extrabold ">Busy</Text>
                </View>
            ):(
                <View className="flex-row gap-4 align-bottom">
                <Octicons name="dot-fill" size={24} color='green' />
                    <Text className="text-green-600 font-extrabold">Available</Text>
                </View>
            )
            }
            <View className="bg-green-500 px-2 py-2 rounded-md">

            <Pressable className="" android_ripple={{color:"gray"}} onPress={requestService}>
                        <Text className="text-center text-white">Request Now</Text>
            </Pressable>
            </View>
            </View>
        </View>
        {/* image part */}
        <View>
            <Image source={{uri:data.url}} className="h-24 w-24 rounded-full "></Image>
        </View>
        </View>
    </View>
  )
}

export default Jobcard

const styles = StyleSheet.create({})