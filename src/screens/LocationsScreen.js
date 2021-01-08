import React from 'react';
import styles from '../Styles';
import { Text, View, Button } from 'react-native';

const LocationsScreen = props =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Welcome to the Locations Screen</Text>
        </View>
    );
}

export default LocationsScreen;