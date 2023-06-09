import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import OldOrderCard from './OldOrderCard'
import client, { urlFor } from '../sanity';//importing client from sanity file, used for fetching data
const OrderHistory = ({orders}) => {
   // console.log(`inside the componet of order history ${orders}`);
    const shop="amar";
    //hard coded shop till the query output become correct
  return (
    <ScrollView>

    <View className="bg-slate-300  pt-2">
        <View className=" ">
            <Text className="ml-4 font-bold text-base">Previous Orders :</Text>
        </View>

        {/* scroll feature is introduced */}
            {
                orders.map((item,index)=>(
                    <OldOrderCard name={item.name} image={item.image.asset._ref} shop={item.shop.name} key={index} />
                ))
            }
    </View>
    </ScrollView>
  )
}

export default OrderHistory;