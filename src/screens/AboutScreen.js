import React from 'react';
import styles from '../../src/Styles';
import { Text, SafeAreaView, Button } from 'react-native';
import WebView from 'react-native-webview';

const AboutScreen = props =>{
    return(
        // <View style = {styles.container}>
        //     <Text style = {styles.header}>Welcome to the About Screen</Text>
        // </View>
        <SafeAreaView
            style = {{flex: 1}}>
            <WebView
                source = {{uri: 'https://about.fb.com'}}
            />
        </SafeAreaView>
    );
}

export default AboutScreen;