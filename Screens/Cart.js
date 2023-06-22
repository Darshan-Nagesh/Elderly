import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import client, { urlFor } from "../sanity"; //importing client from sanity file, used for fetching data

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(cart.cartItem);
  }, [cart]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Cart",
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

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const checkout = () => {
    let order = [];
    cartItems.map((ele) => {
      order.push(ele.product._id);
    });
    //Update the document using patch
    let id = cart.userId;
    client
      .patch(id) // Document ID to patch
      .set({ items: order }) // array of id's refering to products
      .commit() // Perform the patch and return a promise
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        ) : (
          cartItems.map((item) => (
            <View key={item.product._id} style={styles.cartItem}>
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.product.name}</Text>
                <Text style={styles.itemPrice}>₹ {item.product.price}</Text>
              </View>
              <View style={styles.itemActions}>
                <Pressable className="bg-red-300 rounded-sm">
                  <Text
                    className="font-semibold py-0.5 px-2 text-xl"
                    onPress={() => handleRemoveFromCart(item.product)}
                  >
                    -
                  </Text>
                </Pressable>
                <Text style={styles.itemQuantity}>{item.quantity}</Text>
                <Pressable className="bg-emerald-300 rounded-sm">
                  <Text
                    className="font-semibold py-0.5 px-2 text-xl"
                    onPress={() => handleAddToCart(item.product)}
                  >
                    +
                  </Text>
                </Pressable>
              </View>
            </View>
          ))
        )}
      </ScrollView>
      {cartItems.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ₹ {cart.cartTotalAmount}</Text>
          <Button title="Place Order" onPress={checkout} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  emptyCartText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
  },
  itemActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemQuantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cart;
