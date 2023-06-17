import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './Screens/SignUp';
import LoginScreen from './Screens/LoginScreen';
import StackNavigator from './StackNavigator';
import 'react-native-url-polyfill/auto';
import { configureStore } from '@reduxjs/toolkit';
import cartreducer from './features/cartSlice';
import { Provider } from 'react-redux';

const store=configureStore({
reducer:
{
  cart: cartreducer
}
});

export default function App() {
  return (
    <>
    <Provider store={store}>
        <StackNavigator />

    </Provider>
  

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
