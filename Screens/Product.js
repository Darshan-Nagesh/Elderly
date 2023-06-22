import { StyleSheet, Text, View,FlatList, SafeAreaView,Image, Pressable } from 'react-native'
import React, { useEffect, useState,useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../features/cartSlice';
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data

const Product = () => {
	//redux logic
	const dispatch=useDispatch();
	const cart=useSelector(state=>state.cart);
	const navigation=useNavigation();
	const [product,setproduct]=useState('');
	const route = useRoute();
  const  {category,shopid}  = route.params;
  //console.log(category);
	useEffect(()=>
	{
		fetchdata();
		
	},[])

	const fetchdata=async()=>
	{
		if(shopid)
		{
			try {
				let query=`*[_type=="products"&&shop._ref=="${shopid}"]
				{_id,image{asset{_ref}},price,name,description}`
				let responce=await client.fetch(query);
				setproduct(responce);
				
			} catch (error) {
				
			}
		}
		else
		{

			try {
				let query=`*[_type=="products"&&category=="${category}"]
				{_id,image{asset{_ref}},price,name,description}
				`
			let responce=await client.fetch(query);
			// responce=[{"description": "Cavendish Banana, 12 pcs","_id":"22324d44-f990-4fef-ac51-078f6a14c2b0", "image": {"asset": {"_ref":"image-0759590bb97976ec0d6d74bc571ddc0b7066f946-722x406-jpg"}}, "name": "Banana", "price": 60}, {"description": "Mallika mango, 1pcs","_id":"22324d44-f990-4fef-ac51-078f6a14c2b1", "image": {"asset": {"_ref":"image-0759590bb97976ec0d6d74bc571ddc0b7066f946-722x406-jpg"}}, "name": "Mango", "price": 90}]
			console.log(responce);
			setproduct(responce);
			} catch (error) {
			console.log(error);	
			}
		}
	}
	useLayoutEffect(() => {
		navigation.setOptions({
		  headerShown: true,
		  title: category,
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
	  //Updating Redux
	  const handleAddToCart = (item) => {
		dispatch(addToCart( item ));
	
	  };
	
	  const handleRemoveFromCart = (item) => {
		 dispatch(removeFromCart( item ));
	
	  };
	  const getProductQuantityInCart = (id) => {
		const item = cart.cartItem.find(item => item.product._id === id);
		//console.log(id);
		return item ? item.quantity : 0;
	  };
	const renderItem = (item ) => (
	
		<View className="flex-row   mt-1 mr-3 ml-3 mb-1 rounded-2xl bg-slate-100  shadow-xl shadow-black space-x-5  overflow-hidden ">
			<View className="rounded-2xl  p-0.5">

			<Image source={{uri:urlFor(item.image.asset._ref).url()}} style={{width:150,height:125}} className="rounded-l-2xl  " />
			</View>
			<View className="flex-col ">
			<Text className="text-zinc-950 font-bold break-all tracking-widest  text-xl py-1  ">{item.name}</Text>
			<Text className="">
			{item.description}
			</Text>
			<View className="flex-row pt-4 ">

			<Text className="font-semibold text-lg " >₹
			{item.price}
			</Text>
			<View className="ml-20 mt-3 absolute ">
				{getProductQuantityInCart(item._id)==0? (
				<Pressable className="rounded-xl bg-emerald-500" onPress={()=>handleAddToCart(item)}>
					<Text className="font-semibold py-2 px-7  text-2xl">
						Add
					</Text>
				</Pressable>
				)
				:
				(<View className="flex-row space-x-3 bg-zinc-200">

					 <Pressable className="bg-red-300 rounded-sm">
					 <Text className="font-semibold py-0.5 px-2 text-xl" onPress={()=>handleRemoveFromCart(item)}>-</Text>
					 </Pressable> 
					 <Text className="font-semibold py-0.5  text-xl">{getProductQuantityInCart(item._id)}</Text>
					 <Pressable className="bg-emerald-300 rounded-sm">
					 <Text className="font-semibold py-0.5 px-2 text-xl" onPress={()=>handleAddToCart(item)}>+</Text>
					 </Pressable> 
				
				</View>)}
			</View>
			</View>
			</View>
		</View>
		  
		
	  );
  return (
	
	<SafeAreaView >


	    <FlatList 
		
      data={product}
      renderItem={renderItem}
		contentContainerStyle={{justifyContent:'space-evenly',gap:10}}
	  />
	  {/* //   numColumns={1} */}
	
	</SafeAreaView>
  )
}

export default Product

const styles = StyleSheet.create({})