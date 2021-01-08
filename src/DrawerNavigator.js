import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="About"/>
        <Drawer.Screen name="Contact Us"/>
        <Drawer.Screen name="Locations"/>
      </Drawer.Navigator>
    </NavigationContainer>

    );
}

export default DrawerNav;