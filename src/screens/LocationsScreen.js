import React, {useState} from 'react';
import styles from '../Styles';
import { Text, SafeAreaView, View, Button, Alert, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

const LocationsScreen = props =>{
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

    return(
        <SafeAreaView style = {styles.container}>
            <MapView
                region = {loc}
                showsUserLocation = {true}
                style = {styles.map}
            >
                
            </MapView>
        </SafeAreaView>
    );
}

export default LocationsScreen;