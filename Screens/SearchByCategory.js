import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import Jobcard from '../Components/Jobcard';

const SearchByCategory = () => {
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
      navigation.navigate("PostJob");
    }
    const dummyData=[
      {
        "name": "John",
        "jobtitle": "Plumber",
        "address": "2nd cross Jangar, Bangalore",
        "available_time": "10-6",
        "status": "Busy",
        "charges": "1000",
        "rating": 4.5,
        "url":"https://static.vecteezy.com/system/resources/previews/002/461/744/original/plumber-man-with-tool-and-box-of-equipment-free-vector.jpg"
      },
      {
        "name": "Thomas",
        "jobtitle": "Electrician",
        "address": "3rd cross Jangar, Bangalore",
        "available_time": "10-6",
        "status": "Available",
        "charges": "500",
        "rating": 5,
        "url":"https://thumbs.dreamstime.com/b/cartoon-electrician-holding-oversized-screw-driver-lightbulb-vector-clip-art-illustration-simple-gradients-some-132691621.jpg"
      },
      {
        "name": "Edward",
        "jobtitle": "Carpenter",
        "address": "4th cross Jangar, Bangalore",
        "available_time": "9-5",
        "status": "Busy",
        "charges": "1500",
        "rating": 3.5,
        "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8cV3F6nkDPu1m1o20gdYIlpLHDkXCUEZ5eCdfMMNzbEacaQnJ1q6BdE_-IvIGmJaL_Y&usqp=CAU"
      },
      {
        "name": "Andrew",
        "jobtitle": "Painter",
        "address": "5th cross Jangar, Bangalore",
        "available_time": "10-6",
        "status": "Available",
        "charges": "1000",
        "rating": 4,
        "url":"https://media.istockphoto.com/id/472419742/vector/painter.jpg?s=612x612&w=0&k=20&c=athu6PfatSRt5RtUIHCkKUXeOIPDkB3-mSPNvR-ki-c="
      },
      {
        "name": "Jerry",
        "jobtitle": "Mason",
        "address": "6th cross Jangar, Bangalore",
        "available_time": "11-12",
        "status": "Busy",
        "charges": "2000",
        "rating": 4.5,
        "url":"https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
      }
    ]
  return (
    <SafeAreaView>
      <View className="flex-row bg-[#312B66] mb-2 justify-between">
          <View className=" my-2  border-white border-2 rounded-lg ">

          <Pressable className="" android_ripple={{color:'#f0ede6',borderless:true
          }} onPress={postNewJob}>
              <Text className="text-white font-bold   rounded-md px-2 text-lg">Post Job</Text>
          </Pressable>
          </View>
          <View className=" my-2  border-white border-2 rounded-lg ">

          <Pressable className="" android_ripple={{color:'#f0ede6',borderless:true
          }}>
              <Text className="text-white font-bold   rounded-md px-2 text-lg">Avalaiblity</Text>
          </Pressable>
          </View>
          <View className="my-2  border-white border-2 rounded-lg ">

          <Pressable className="" android_ripple={{color:'#f0ede6',borderless:true
          }}>
              <Text className="text-white font-bold   rounded-md px-2 text-lg">Your Bookings</Text>
          </Pressable>
          </View>
      </View>
      {/* card of jobs */}
      <View>
          {

            dummyData.map((data,index)=>(
              <Jobcard data={data} key={index}/>
            ))
          }

      </View>
      <Text>SearchByCategory</Text>
    </SafeAreaView>
  )
}

export default SearchByCategory

const styles = StyleSheet.create({})