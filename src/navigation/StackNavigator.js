import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FeedBackScreen1 from '../screens/Feedback/FeedBackScreen1';
import FeedBackScreen2 from '../screens/Feedback/FeedBackScreen2';
import FeedBackScreen3 from '../screens/Feedback/FeedBackScreen3';
import GeneralFeedbackScreen from '../screens/Feedback/GeneralFeedbackScreen';
import PrivacyMain from '../screens/Privacy-Agreements/PrivacyMain';
import UserAgreement from '../screens/Privacy-Agreements/UserAgreement';
import PrivacyPolicy from '../screens/Privacy-Agreements/PrivacyPolicy';
import OnlineTracking from '../screens/Privacy-Agreements/OnlineTracking';
import OpenSourceLicenses from '../screens/Privacy-Agreements/OpenSourceLicenses';
import { MainTabNavigator } from './TopTabNavigator';
import SpecificLocationSubmit from '../screens/Feedback/SpecificLocationSubmit';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {HomeScreen}/>
            <Stack.Screen name = "Details" component = {DetailsScreen}/>
        </Stack.Navigator>
    );
}

const FeedbackStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                headerBackTitleVisible: false,
                title: 'Feedback',
            }}
        >
            <Stack.Screen name = "Feedback1" component = {FeedBackScreen1}/>
            <Stack.Screen name = "Feedback2" component = {FeedBackScreen2}/>
            <Stack.Screen name = "Feedback3" component = {FeedBackScreen3}/>
            <Stack.Screen name = "General Feedback" component = {GeneralFeedbackScreen}/>
            <Stack.Screen name = "Specific Location" component = {MainTabNavigator}/>
            <Stack.Screen name = "Specific Location Submit" component = {SpecificLocationSubmit}/>
        </Stack.Navigator>
    );
}

const PrivacyStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Privacy & Agreements" component = {PrivacyMain}/>
            <Stack.Screen name = "User Agreement" component = {UserAgreement}/>
            <Stack.Screen name = "Privacy Policy" component = {PrivacyPolicy}/>
            <Stack.Screen name = "Online Tracking" component = {OnlineTracking} options = {{headerTitle: 'Online Tracking Opt Out Guide'}}/>
            <Stack.Screen name = "Open Source Licenses" component = {OpenSourceLicenses}/>
        </Stack.Navigator>
    )
}

export { MainStackNavigator, FeedbackStackNavigator, PrivacyStackNavigator };