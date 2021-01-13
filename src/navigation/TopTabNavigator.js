import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SpecificLocationList from '../screens/Feedback/SpecificLocationList';
import SpecificLocationMap from '../screens/Feedback/SpecificLocationMap';

const TopTab = createMaterialTopTabNavigator();

const MainTabNavigator = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name = "List" component = {SpecificLocationList}/>
            <TopTab.Screen name = "Map" component = {SpecificLocationMap}/>
        </TopTab.Navigator>
    );
}

export { MainTabNavigator }