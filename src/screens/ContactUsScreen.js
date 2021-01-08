import React from 'react';
import styles from '../Styles';
import { Text, View, Button } from 'react-native';

const ContactUsScreen = props =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Welcome to the Contact Us Screen</Text>
        </View>
    );
}

export default ContactUsScreen;