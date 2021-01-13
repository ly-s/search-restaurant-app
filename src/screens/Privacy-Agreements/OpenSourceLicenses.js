import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import WebView from 'react-native-webview';
import styles from '../../Styles';

const OpenSourceLicenses = () => {
    return(
        <SafeAreaView
            style = {{flex: 1}}>
            <Text style = {styles.titleHeader}>License Screen</Text>
        </SafeAreaView>
    );
}

export default OpenSourceLicenses;