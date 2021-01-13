import React from 'react';
import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

const UserAgreement = () => {
    return(
        <SafeAreaView
            style = {{flex: 1}}>
            <WebView
                source = {{uri: 'https://www.fiveguys.com/terms-of-use-website'}}
            />
        </SafeAreaView>
    );
}

export default UserAgreement;