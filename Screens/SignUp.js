import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Pressable, Alert, SafeAreaView } from "react-native";
import {auth, db} from "../FireBase.js";
import {  doc, setDoc } from 'firebase/firestore';

const SignUp=()=> {
const [name,setName]=useState();
const [email,setEmail]=useState();
const [Password,setPassword]=useState();
const [phone,setPhone]=useState();
const register=()=>{
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
        createUserWithEmailAndPassword(auth,email,Password).then((userCredentials)=>{
            const user=userCredentials._tokenResponse.email;
            const uid=auth.currentUser.uid;  
            setDoc(doc(db,"users",`${uid}`),{
                email:user,
                phone:phone,
                name:name
            })
        })
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

      <Pressable style={styles.button} onPress={register}>
        <Text style={styles.butoonText}>Register</Text>
      </Pressable>
      <Pressable style={styles.login}>

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
