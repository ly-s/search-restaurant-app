import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

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
import OrderMain from '../screens/Order/OrderMain';
import OrderType from '../screens/Order/OrderType';
import ListScreen from '../screens/ListScreen';
import OrderList from '../screens/Order/OrderList';
import OrderMenu from '../screens/Order/OrderMenu';
import OrderCart from '../screens/Order/OrderCart';
import OrderItem from '../screens/Order/OrderItem';

const Stack = createStackNavigator();

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

const OrderStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions = {{headerBackTitle: 'Back'}}>
            <Stack.Screen name = "Order Main" component = {OrderMain} options = {{headerTitle: 'Welcome!'}}/>
            <Stack.Screen name = "Order Type" component = {OrderType}/>
            <Stack.Screen name = "Restaurant List" component = {OrderList}/>
            <Stack.Screen name = "Order Menu" component = {OrderMenu}/>
            <Stack.Screen name = "Order Item" component = {OrderItem}/>
            <Stack.Screen name = "Order Cart" component = {OrderCart}/>
            <Stack.Screen name = "Details" component = {DetailsScreen}/>
        </Stack.Navigator>
    );
}

export { FeedbackStackNavigator, PrivacyStackNavigator, OrderStackNavigator };