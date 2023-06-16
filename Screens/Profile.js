import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data
import AccountDetails from '../Components/AccountDetails';

const Profile = () => {
  const navigation = useNavigation();
  //API request to sanity
  let query=`*[_type == "user" && _id=="id of user"]`
  //replace id of user with actual id
  //const response = await client.fetch(query); 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "My Account",
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#312B66",
        height: 80,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigation.navigate("Login");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View>
          {/* <Text style={styles.loggedInText}>Welcome to Elderly!</Text>
          <Button title="Logout" onPress={handleLogout} /> */}
            <AccountDetails />
        </View>
      ) : (
        <View>
          <Text style={styles.loggedOutText}>Please login to access your account</Text>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  loggedInText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loggedOutText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#312B66',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;