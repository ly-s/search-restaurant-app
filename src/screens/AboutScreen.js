import React from 'react';
import styles from '../../src/Styles';
import { Text, View, Button } from 'react-native';

const AboutScreen = props =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Welcome to the About Screen</Text>
        </View>
    );
}

export default AboutScreen;