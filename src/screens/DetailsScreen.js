import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../src/Styles';

const DetailsScreen = props => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Welcome to the Details Screen</Text>
        </View>
    );
}

export default DetailsScreen