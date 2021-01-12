import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import LocationsScreen from '../screens/LocationsScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FeedBackScreen1 from '../screens/Feedback/FeedBackScreen1';
import FeedBackScreen2 from '../screens/Feedback/FeedBackScreen2';
import FeedBackScreen3 from '../screens/Feedback/FeedBackScreen3';
import GeneralFeedbackScreen from '../screens/Feedback/GeneralFeedbackScreen';

import { MainStackNavigator, FeedbackStackNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name = "Home" component = {MainStackNavigator}/>
                <Drawer.Screen name = "Login" component ={LoginScreen}/>
                <Drawer.Screen name = "About" component = {AboutScreen}/>
                <Drawer.Screen name = "Contact Us" component = {ContactUsScreen}/>
                <Drawer.Screen name = "Locations" component = {LocationsScreen}/>
                <Drawer.Screen name = "Feedback" component = {FeedbackStackNavigator}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerNavigator;