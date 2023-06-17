import { SafeAreaView, StyleSheet, Text, View,Image,FlatList,Pressable } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SuggestCard from '../Components/SuggestCard';
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data

const HomeScreen = () => {
  const navigation=useNavigation();
  const [photos,setPhotos]=useState([]);
  const [suggest,setSuggest]=useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: ()=>(
        <Image
      source={{uri:"https://i.ibb.co/bNK01DQ/logo.png"}}
      style={{width:100,height:38}}
      />
      ),
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#312B66",
        height: 94,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  },[]);
  useEffect(() => {
    fetchDataCat();
  }, [photos]);
  useEffect(()=>{
      fetchDatasuggest();
  },[suggest])
  //Updates the photos state which is used to list the categories in the home page
  const fetchDataCat = async () => {
    try {
      //GROQ query to select the categories
      const query= `*[_type=="category"]
      {
        name,photo{asset{_ref}}
      }
      `
      if(photos.length===0){
        //fetching data from sanity
        const response = await client.fetch(query);
       
        //assigning the response to photos using setPhotos
        //photos has all the data now
        setPhotos(response);
       
      }
      else{
        console.log("alredy have data");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const fetchDatasuggest = async () => {
    try {
      if(suggest.length===0){
        //This query is used to fetch last orders
        let query = `*[_type=="user" && name=="Kishan"] 
        {
          items[]->
        }
        
        `
       let response = await client.fetch(query);
        //console.log(response[0].items);
        setSuggest(response[0].items);

      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const pressedOnCategory=(item)=>{
    //function has to be writeen hear to go to product showing page
    //using navigation.naviagate method
    let cat=item.name;
    console.log(cat);
    navigation.navigate("Products",{category:cat})

  
  }
  //Render Category 
  const renderItem = ({ item }) => (
    <Pressable className="ml-2 bg-slate-200 borderwidth border-2 mx-2 rounded-md  border-gray-400" onPress={()=>{pressedOnCategory(item)}}
      style={({ pressed }) => [
        { backgroundColor: pressed ? 'lightgray' : 'white' },
        styles.item,
      ]}
    >
      
      <Image source={{uri:urlFor(item.photo.asset._ref).url()}} className="h-[88] w-40 " />
      <Text className="text-blue-900 text-center py-1">{item.name}</Text>
    </Pressable>
  );
//   console.log(`from photos ${photos}`)
//   console.log(photos.length)
// console.log(`From suggest ${suggest}`);
  return (

    <SafeAreaView>
    <View className="bg-slate-200">
      <Image source={{uri:"https://img.freepik.com/free-vector/flat-black-friday-twitch-banner_23-2149122298.jpg?w=1380&t=st=1685274119~exp=1685274719~hmac=5909b2c4de69ca967e7747365502bdffc09c3a9ed13b342f0482ea7134d1e530"}} className="h-20 w-full">
      </Image>
    </View>
    <View className=" bg-slate-200">
    <View className="mt-1 bg-slate-200">
    <View className="flex-row gap-4 ml-[2px] align-baseline">
    <Entypo name="shopping-bag" size={24} color="#FFA68A" />
      <Text className="mb-2 font-extrabold text-lg">Shop By category</Text>
    </View>
        <FlatList 
      data={photos}
      renderItem={renderItem}
      numColumns={2}
      contentContainerStyle={{justifyContent:'space-evenly',alignItems:'center',gap:10}}
    />
    </View>

    {/* reapeat order section */}
    <View className="bg-slate-300 mt-4">
        <View className="flex-row gap-4 ml-[2px] align-baseline">
        <MaterialCommunityIcons name="repeat-once" size={30} color="#FFA68A" />
        <Text className="mb-3 font-extrabold  text-lg"> Repeat Last Order</Text>
        </View>
    </View>
      <ScrollView horizontal={true}>
            {
              suggest.map((data,index)=>(
                <SuggestCard url={data.image.asset._ref} title={data.name} price={20} key={index} />
              ))
            }
      </ScrollView>
      
    </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})