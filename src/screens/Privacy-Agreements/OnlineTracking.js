import React from 'react';
import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

const OnlineTracking = () => {
    return(
        <SafeAreaView
            style = {{flex: 1}}>
            <WebView
                source = {{uri: 'https://www.olo.com/on-line-tracking-opt-out-guide'}}
            />
        </SafeAreaView>
    );
}

export default OnlineTracking;