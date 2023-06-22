import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import client from "../sanity";

const Jobcard = () => {
  //console.log(data);
  const [services, setdata] = useState("");
  useEffect(() => {
    fetchdata();
  }, [services]);

  const fetchdata = async () => {
    let response;
    if (services.length == 0) {
      try {
        const query = `*[_type == "service"]
                {accepter{_ref},requester{_ref},datetime,name,location,workhour}`;
        response = await client.fetch(query);
        setdata(response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const requestService = () => {
    // service request code should come here
    console.log("setrvice requested");
  };
  const renderpage = (data) => {
    return (
      <View className="bg-stone-200 rounded-xl mx-2 flex-row py-5 justify-between space-x-10">
        
            <View className="ml-5">

          <Text className="font-bold  text-lg">{data.item.name}</Text>
          <Text className="font-bold">Location: {data.item.location.lng},{data.item.location.lat}</Text>
          
          <Text>Working hours: {data.item.workhour}</Text>
          
            </View>
            <View className="flex-row justify-center  space-x-6 items-center">
            <View className="bg-green-500 px-2 py-2 rounded-md mr-5">
              <Pressable
                className=""
                android_ripple={{ color: "gray" }}
                onPress={requestService}
              >
                <Text className="text-center text-white">Request Now</Text>
              </Pressable>
            </View>
          </View>
        
        
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={services}
        renderItem={renderpage}
        contentContainerStyle={{ justifyContent: "space-evenly", gap: 10 }}
      />
    </SafeAreaView>
  );
};

export default Jobcard;

const styles = StyleSheet.create({});
