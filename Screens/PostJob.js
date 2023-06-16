import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';
import * as Location from 'expo-location'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data

const PostJob = () => {
  //Query to fetch services
  let query=`*[_type=="service"]
  {
    name,datetime,location
  }
  `
  //Query to post the service request

//   const doc={_type:'service',name:name,address: {
//     _type: 'geopoint',
//     lat: Number(latitude),
//     lng: Number(longitude),
//     alt:0
//   },items:[],mobilenum:Number(phone),password:digest,
// email:email}
// console.log(client.config());
// client.create(doc).then((res)=>{
//   console.log(res);
// })

  // client
  // .patch('id') // Document ID to patch
  // .set({items: []}) // array of id's refering to products
  // .commit() // Perform the patch and return a promise
  // .then((data) => {
  //   console.log(data)
  // })
  // .catch((err) => {
  //   console.error(err.message);
  // })
  
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigation=useNavigation();  const [selected, setSelected] = useState(undefined);
    const [userAddress,setUserAddress]=useState('');
    const [phone,setPhone]=useState();
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [getMap,setGetMap]=useState(false);
    const data = [
      { label: 'Plumber', value: 'plumber' },
      { label: 'Electrician', value: 'electrician' },
      { label: 'Medical', value: 'medical' },
      { label: 'Worker', value: 'worker' },
      { label: 'Carpenter', value: 'carpenter' },
      {
        label:'Painter',value:'painter'
      }
    ];
 
    const handleDateChange = (event, date) => {
      setShowDatePicker(false);
      if (date !== undefined) {
        setSelectedDate(date.toISOString().split('T')[0]);
      }
    };
  
    const showDatePickerModal = () => {
      setShowDatePicker(true);
    };
    //hadnlling location
    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
          let text = 'Waiting..';
          if (errorMsg) {
            text = errorMsg;
          } else if (location) {
            text = JSON.stringify(location);
            setUserAddress(text);
          }
        })();
      }, []);

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: "Newjob Posting",
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

    const bookJob=()=>{
        //need to save the data to the database
        console.log("YOu clicked book JOb button");
        navigation.navigate("Bookings");
    }
  return (
    <View>
      <View className="mx-4 mt-11 py-2">

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Type of the servive' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon} 
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
      <View className="border-gray-400 border-2 shadow-md justify-center mt-4 ml-4 mr-4 rounded-lg">
            <View className="flex-row border-gray-400  justify-evenly  items-center  ">
            <Pressable>
                <Text className="font-bold text-base">Select date of booking</Text>
            </Pressable>
            <View className="mt-2">
            <Button onPress={showDatePickerModal} title="Calender" color="#312B66"  />
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate ? new Date(selectedDate) : new Date()}
          mode="date"
          display="default"
          placeholder="please select the date"
          onChange={handleDateChange}
        />
      )}
    </View>
            </View>
    
      <Text className="text-base font-semibold text-blue-900 ml-10 mt-2 mb-4">Date selected : {selectedDate}</Text>
    </View>
        <View className="border-gray-400 mt-4 ml-4 border-2 rounded-2xl py-2 mr-4">
        <Text className="font-bold ml-5"> Address:</Text>
        <View className="flex-row justify-around items-center mr-5">
             
             <TextInput className="ml-9 mr-16" placeholder={getMap?`${userAddress}`:`We fetched your location!! if you want you can edit here. `}  multiline={true} editable={true} numberOfLines={5} keyboardType='default' onChangeText={(text)=>setUserAddress(text)}  />
             <Pressable onPress={()=>setGetMap(!getMap)} className="mr-4">

             <Ionicons name="locate-outline" size={24} color="black" />
             </Pressable>
        </View>
        </View>
        {/* contact number */}
        <View className="border-gray-400 mt-4 ml-4 border-2 rounded-2xl py-3 mr-4">
            <View className="flex-row justify-start ml-4 space-x-5">
            <Feather name="phone" size={24} color="black" />
            <TextInput placeholder='Enter your phone number' onChange={(text)=>setPhone(text)} value={phone} keyboardType='number-pad' />
            </View>
        </View>
        <View className="flex-row justify-center mt-7">
            <Pressable className=" bg-[#312B66] rounded-lg" onPress={bookJob}>
                <Text className="text-white px-10 py-2 font-extrabold text-base">Post</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default PostJob
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 10,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });