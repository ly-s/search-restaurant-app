import React from 'react';
import styles from '../Styles';
import { Text, SafeAreaView, Button } from 'react-native';
import MapView from 'react-native-maps';

const LocationsScreen = props =>{
    return(
        <SafeAreaView style = {styles.container}>
            <MapView style = {styles.map}/>
        </SafeAreaView>
    );
}

export default LocationsScreen;