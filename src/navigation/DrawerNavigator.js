import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';

import AboutScreen from '../screens/AboutScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import LocationsScreen from '../screens/LocationsScreen';
import LoginScreen from '../screens/LoginScreen';

import { MainStackNavigator, FeedbackStackNavigator, PrivacyStackNavigator, OrderStackNavigator} from './StackNavigator';
import OrderMain from '../screens/Order/OrderMain';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName = "Login" screenOptions = {{headerShown: true}}
                >
                {/* <Drawer.Screen name = "Home" component = {MainStackNavigator} options = {{headerShown: false}}/> */}
                <Drawer.Screen name = "Login" component ={LoginScreen} options = {{headerShown: false, gestureEnabled: false}}/>
                <Drawer.Screen name = "Order" component = {OrderStackNavigator} options = {{headerShown: false}}/>
                <Drawer.Screen name = "About" component = {AboutScreen}/>
                <Drawer.Screen name = "Contact Us" component = {ContactUsScreen}/>
                <Drawer.Screen name = "Locations" component = {LocationsScreen}/>
                <Drawer.Screen name = "Feedback" component = {FeedbackStackNavigator} options = {{headerShown: false}}/>
                <Drawer.Screen name = "Privacy & Agreements" component = {PrivacyStackNavigator} options = {{headerShown: false}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerNavigator;