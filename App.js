import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import LocationsScreen from './src/screens/LocationsScreen';


const Drawer = createDrawerNavigator();

function App() {
  return (
    //'BottomTab' can be interchanged with 'Stack' or 'Drawer' to display the other Navigator types if desired
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={HomeScreen}>
        <Drawer.Screen name="Home" component = {HomeScreen}/>
        <Drawer.Screen name="About" component = {AboutScreen} options = {{ title: 'About', headerStyle:{ backgroundColor: '#f4511e'}}}/>
        <Drawer.Screen name="Contact Us" component = {ContactUsScreen}/>
        <Drawer.Screen name="Locations" component = {LocationsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;