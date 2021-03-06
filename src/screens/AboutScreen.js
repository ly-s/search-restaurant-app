import React from 'react';
import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

const AboutScreen = props =>{
    return(
        <SafeAreaView
            style = {{flex: 1}}>
            <WebView
                source = {{uri: 'https://about.fb.com'}}
            />
        </SafeAreaView>
    );
}

export default AboutScreen;