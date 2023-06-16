import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data
import AccountDetails from '../Components/AccountDetails';
import EditAdress from '../Components/EditAdress';
import OrderHistory from '../Components/OrderHistory';

const Profile = () => {
  const navigation = useNavigation(); 
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user,setUser]=useState([]);
  //initally the user is set to empty array
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigation.navigate("Login");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigation.navigate("Login");
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
  
  const fetchUserDetails = async () => {
    if(user.length===0){
      // Fetching the user data by using the user ID
      let id = "wTURNjP62fuXRm3qPkJlYb"; // This can be your dynamic user ID
      // After introducing Redux, you can change the ID dynamically
      let query = `*[_type == "user" && _id == $id] {
          ...,
          items[]->{
            name,
            image,
            shop[]->{
              name
            }
          }
      }`;
      const params = { id }; // Define the parameter object
    
      const response = await client.fetch(query, params); // Pass the query and params to the fetch function
      // console.log(response);
      setUser(response);
      //can also use response[0] but not using bcz if we combinde 2 user into family in future thsi code might give error
    }
    else{
      console.log("alredy have data no need to call the api")
    }
  }
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

  console.log(user);

  return (
    <View className="bg-slate-200 flex">
          {/* basic info part */}
           <View className="bg-slate-300">
                  {
                    user.map((person,index)=>(
                     <AccountDetails email={person.email} mobile={person.mobilenum} name={person.name} key={index}/>
                    )
                  )
                  }
           </View>

          {/* Edit address part */}
          <View className="mt-2">
                    {
                        user.map((person,index)=>(
                          
                          <EditAdress person={person} key={index} />
                        )
                        )
                    }
    
          </View>
        {/*perious  oder part */}
        
         <View className="mt-2">
                    {
                      user.map((person,index)=>(
                          <OrderHistory orders={person.items} key={index}/>
                      ))
                    }

         </View>           
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Profile;