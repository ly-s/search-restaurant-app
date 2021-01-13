import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from '../../Styles';
import MapView from 'react-native-maps';

const SpecificLocationMap = () => {
    return (
        <SafeAreaView>
            <MapView style = {styles.map}/>
        </SafeAreaView>
    );
}

export default SpecificLocationMap;