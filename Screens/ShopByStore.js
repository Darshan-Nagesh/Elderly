import React, { useLayoutEffect, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import client, { urlFor } from '../sanity';

const ShopByStore = () => {
  const [stores, setStores] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await client.fetch(`*[_type == "store"]{
        name,
        _id,
        desc,
        address,
        image{asset{_ref}}
      }`);
      setStores(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const navigation = useNavigation();
  const redirect=(item)=>
  {
    
    let id=item._id;
    navigation.navigate("Products",{shopid:id});
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Nearby Stores",
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
  }, [navigation]);

  const renderStoreItem = ({ item }) => (
    <View >
      <Pressable style={styles.storeItem} onPress={()=>redirect(item)}>

      {item.image && (
        <Image
          source={{ uri: urlFor(item.image.asset._ref).url() }}
          style={styles.storeImage}
        />
      )}
      <View style={styles.storeInfo}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.storeAddress}>{item.address}</Text>
      </View>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={stores}
        keyExtractor={(item) => item._id}
        renderItem={renderStoreItem}
      />
    </View>
  );
};

export default ShopByStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  storeImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  storeAddress: {
    fontSize: 14,
    color: '#888888',
  },
});
