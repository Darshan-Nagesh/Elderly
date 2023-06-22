import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import PostJob from '../Components/PostJob';
import Jobcard from '../Components/Jobcard';
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data

const SearchByCategory = () => {
    //Same as in HomePage
    const [request,setreq]=useState(true);
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
          height: 69,
          borderBottomColor: "transparent",
          shadowColor: "transparent",
        },
      });
    },[]);
    const postNewJob=()=>{
      
      setreq(true);
    }
    const findjob= async()=>
    {
      
      setreq(false);
    }
    

  return (
    <SafeAreaView>
      <View className="flex-row bg-[#ffffff]  h-16 justify-evenly">
          <View className=" my-2  rounded-lg ">

          <Pressable className=""  >
              <Text className={request ?"text-blue-600 font-bold text-2xl  rounded-md px-2 ":"text-black font-bold text-2xl  rounded-md px-2 "} onPress={postNewJob}>Request</Text>
          </Pressable>
          </View>
          <View className=" my-2  rounded-lg ">

          <Pressable className=""  >
              <Text className={request ?"text-black font-bold text-2xl  rounded-md px-2 ":"text-blue-600 font-bold text-2xl  rounded-md px-2 "} onPress={findjob}>Search</Text>
          </Pressable>
          </View>
          
      </View>
      {/* card of jobs */}
      <View>
        {request? <PostJob></PostJob>:  <Jobcard  ></Jobcard>}
        

      </View>
      
    </SafeAreaView>
  )
}

export default SearchByCategory

const styles = StyleSheet.create({})