import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from '../../Styles';
import MapView from 'react-native-maps';

const SpecificLocationMap = () => {
    const [loc, setLoc] = useState({});

    navigator.geolocation.getCurrentPosition(
        position => {
            let region = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: 2,
                longitudeDelta: 2,
            };
            setLoc(region);
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        
    );

    return (
        <SafeAreaView>
            <MapView 
                region = {loc}
                showsUserLocation = {true}
                style = {styles.map}/>
        </SafeAreaView>
    );
}

export default SpecificLocationMap;