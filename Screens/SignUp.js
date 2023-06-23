import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Pressable, Alert, SafeAreaView } from "react-native";
import {auth, db} from "../FireBase.js";
import {  doc, setDoc } from 'firebase/firestore';
import * as Crypto from "expo-crypto";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import {useDispatch,useSelector} from 'react-redux';
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data
import { setuserid } from "../features/cartSlice.js";


const SignUp=()=> {
  const dispatch=useDispatch();
  const user=useSelector(state=>state.cart);
const [name,setName]=useState();
const [email,setEmail]=useState();
const [Password,setPassword]=useState();
const [phone,setPhone]=useState();
const navigation=useNavigation();
const [latitude, setlatitude] = useState('');
const [longitude,setlongitude]= useState('');
//Also take location here

//taking the coordinates or address of user
const handleLocationInput = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Please grant location permission');
      return;
    }

    const locationData = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = locationData.coords;
    setlatitude(latitude);
    setlongitude(longitude);
    //console.log(latitude);
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};

const login=()=>
{
  navigation.navigate("Login");
}
const register=async()=>{
  
    if(email==="" || Password=== "" || phone===""  || name===""){
        Alert.alert(
            "Invalid Details",
            "Please enter all the Credentials correctly",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
    }
    else{
      //using expo-crypto module to encrypt the password
      const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        Password
      );
      const doc={_type:'user',name:name,address: {
        _type: 'geopoint',
        lat: Number(latitude),
        lng: Number(longitude),
        alt:0
      },items:[],mobilenum:Number(phone),password:digest,
    email:email}
    console.log(client.config());
    client.create(doc).then((res)=>{
      //Setting id of the user in redux
      dispatch(setuserid(res._id));
    })

        createUserWithEmailAndPassword(auth,email,Password).then((userCredentials)=>{
            const user=userCredentials._tokenResponse.email;
            const uid=auth.currentUser.uid;  
            setDoc(doc(db,"users",`${uid}`),{
                email:user,
                phone:phone,
                name:name
            })
        })
        navigation.navigate("Main");
    }
}
  return (
    <SafeAreaView>

    <KeyboardAvoidingView>

    <View style={styles.container}>
      <Text style={styles.signIn}>Sign In</Text>
      <Text style={styles.email}>Email</Text>
      <TextInput value={email} onChangeText={(text)=>setEmail(text)}
        placeholder="dev@elderly.com" keyboardType="default"
        style={styles.textInput}
      ></TextInput>
      <Text style={styles.email}>Phone number</Text>
      <TextInput value={phone} onChangeText={(text)=>setPhone(text)}
        placeholder="Enter Phone number" keyboardType="default"
        style={styles.textInput}
      ></TextInput>
      <Text style={styles.email}>Full Name</Text>
      <TextInput value={name} onChangeText={(text)=>setName(text)}
        placeholder="Full name" keyboardType="default"
        style={styles.textInput}
      ></TextInput>
      <Text style={styles.email}>Password</Text>
      <TextInput value={Password} onChangeText={(text)=>setPassword(text)}
        placeholder="Enter your Password" keyboardType="default" secureTextEntry={true}
        style={styles.textInput}
      ></TextInput>
      <Text style={styles.email}>Location</Text>
      <Pressable   placeholder="location" keyboardType="default" style={styles.textInput} onPress={handleLocationInput} >
      <Ionicons   name="locate-outline" size={24} color="black" />
      </Pressable>

      <Pressable style={styles.button} onPress={register}>
        <Text style={styles.butoonText}>Register</Text>
      </Pressable>
      <Pressable style={styles.login} onPress={login}>

      <Text style={styles.loginText}>Alredy have account? Log in</Text>
      </Pressable>
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    justifyContent:'center',
    marginLeft:20,
    alignItems:'center',
  },
  signIn: {
    color: "rgba(35,93,201,1)",
    fontSize: 20,
    fontWeight:'700',
    textAlign: "center",
    marginTop: 120,
  },
  email: {
    color: "#121212",
    fontSize: 16,
    marginTop: 20,
    fontWeight:"bold"
  },
  textInput: {
    color: "#121212",
    height: 40,
    width: 300,
    textAlign: "center",
    paddingLeft:3,
    borderWidth: 0,
    borderRadius: 4,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    marginTop: 6,
  },
  button:{
    marginTop:30,
    padding:12,
    backgroundColor:"#4895ef",
    width:100,
    alignSelf:'center'
  },
  butoonText:{
    textAlign:'center',
  },
  login:{
    marginTop:10,
  },
  loginText:{
    textAlign:'center',
    color:"gray",
    fontWeight:'600',
  }
});

export default SignUp;
