// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home"  options={{title: 'Home',headerShown:false}}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Home',headerShown:false}}/>
      <Stack.Screen name="Signin" component={Signin}  screenOptions={{headerShown:false}}  options={{title: 'Sigin' }}/>
      <Stack.Screen name="Signup" component={Signup}  screenOptions={{headerShown:false}} options={{title: 'Signup' }}/>
      <Stack.Screen name="Dashboard" component={Dashboard}  screenOptions={{headerShown:false}} options={{title: 'Dashboard' }}/>
      </Stack.Navigator>
      
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
