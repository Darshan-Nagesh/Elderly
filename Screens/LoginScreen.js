import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Pressable, Alert, SafeAreaView } from "react-native";
import {auth, db} from "../FireBase.js";
import {  doc, setDoc } from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
    const [email,setEmail]=useState("");
    const [Password,setPassword]=useState();
    const navigation=useNavigation();
    const login=()=>{
        // let temp="vinbhat333@gmail.com"
            signInWithEmailAndPassword(email, Password).then(user => {
  console.log("User signed in successfully!");
}, error => {
  console.log("Error signing in: " + error.message);
})
    }
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((authUSer)=>{
            try{
                if(authUSer){
                    navigation.navigate("Main");
                }
            }catch(e){
                console.log(e);
            }
            return unsubscribe;
        })
    },[])
  return (
    <SafeAreaView>

    <KeyboardAvoidingView>
    <View style={styles.container}>
      <Text style={styles.signIn}>WellCome back Senior</Text>
      <Text style={styles.email}>Email</Text>
      <TextInput value={email} onChangeText={(text)=>setEmail(text)}
        placeholder="dev@elderly.com" keyboardType="default"
        style={styles.textInput}
      ></TextInput>
      <Text style={styles.email}>Password</Text>
      <TextInput value={Password} onChangeText={(text)=>setPassword(text)}
        placeholder="Enter your Password" keyboardType="default" secureTextEntry={true}
        style={styles.textInput}
      ></TextInput>

      <Pressable style={styles.button} onPress={login} >
        <Text style={styles.butoonText}>Log in</Text>
      </Pressable>
      <Pressable style={styles.login} onPress={()=>navigation.navigate("Register")}>

      <Text style={styles.loginText}>Dont have account? Sign in</Text>
      </Pressable>
      <Pressable style={styles.login}>

      <Text style={styles.forgotText}>Forgot password?</Text>
      </Pressable>
      
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginLeft:25,
        justifyContent:'center',
        alignItems:'center',
        gap:10,
      },
      signIn: {
        color: "rgba(35,93,201,1)",
        fontSize: 20,
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
        color:"gray"
      },
      forgotText:{
        textAlign:'center',
        color:"blue",
      }


})
export default LoginScreen;