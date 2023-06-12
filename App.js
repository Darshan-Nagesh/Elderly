import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './Screens/SignUp';
import LoginScreen from './Screens/LoginScreen';
import StackNavigator from './StackNavigator';
import 'react-native-url-polyfill/auto';
export default function App() {
  return (
    <>
        <StackNavigator />
  

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
