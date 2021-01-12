import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

import DrawerNavigator from './src/navigation/DrawerNavigator';

function App() {
  return (
      <DrawerNavigator/>
  );
}

export default App;