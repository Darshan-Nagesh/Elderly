import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
const EditAdress = ({ person }) => {
  console.log(person);
  const [lat, setLat] = useState(String(person.address.lat));
  const [lng, setLng] = useState(String(person.address.lng));
  const [alt, setAlt] = useState(String(person.address.alt));

//@manoj look into this query here all state varibale are strings 
//covert the lat lng and alt input from String to Number before patch query
  //after clicking the upadate now button this one will exicute
  const updateAddressHandler=()=>{
    //we need to do a update request code in this function
  }
  const updateAdress=async ()=>{

  }

  return (
    // here each view has 2 fileds 
    // where it is enough to look at the update now button only
    <View className="bg-slate-300 mb-4 mt-4">
      <View className="flex-row items-center ml-4">
        <Text className="text-base font-bold ">Address of : </Text>
        <Text className="text-base font-bold">{person.name}</Text>
      </View>

      <View className="mt-4 mb-5">
        <View className="ml-4 flex-row items-center space-x-6 mt-2">
          <Text className="text-base font-bold">Latitude : </Text>
          <View className="border-gray-400 border-y-2 border-x-2 w-4/6 flex-row items-center justify-evenly ">
            <TextInput
              style={{ height: 40, width: 170 }}
              value={lat}
              defaultValue={lat}
              onTextInput={(text) => setLat(text)}
            />
            <MaterialIcons name="edit" size={24} color="black" />
          </View>
        </View>
        <View className="mt-4 ml-4 flex-row items-center space-x-2">
          <Text className="text-base font-bold">Longitude  : </Text>
          <View className="border-gray-400 border-y-2 border-x-2 w-4/6 flex-row items-center justify-evenly ">
            <TextInput
              style={{ height: 40, width: 160 }}
              value={lng}
              defaultValue={String(lng)}
              onTextInput={(text) => setLng(text)}
            />
            <MaterialIcons name="edit" size={24} color="black" />
          </View>
        </View>
        <View className="mt-4 ml-4 flex-row items-center space-x-7">
          <Text className="text-base font-bold">Altitude : </Text>
          <View className="border-gray-400 border-y-2 border-x-2 w-4/6 flex-row items-center justify-evenly ">
            <TextInput
              style={{ height: 40, width: 170 }}
              value={String(alt)}
              defaultValue={String(alt)}
              onTextInput={(text) => setAlt(text)}
            />
            <MaterialIcons name="edit" size={24} color="black" />
          </View>
        </View>

            <View className="flex-row justify-end mr-12 mt-4">

                <Pressable onPress={updateAddressHandler} android_ripple={{color:'gray'}} > 
                    <View className="bg-green-500 pt-2 pl-3 pr-3 pb-2 ">
                        <Text className="font-bold">Update now</Text>
                    </View>
                </Pressable>
            </View>
      </View>

      <Text></Text>
    </View>
  );
};

export default EditAdress;
