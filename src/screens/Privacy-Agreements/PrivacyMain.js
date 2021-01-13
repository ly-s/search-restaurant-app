import React from 'react';

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../Styles';

const PrivacyMain = ({navigation}) => {
    return (
        <SafeAreaView style = {{flex: 1}}>
            <TouchableOpacity onPress = {() => navigation.navigate("User Agreement")}>
                <Text style = {styles.rowListText}>User Agreement</Text>
            </TouchableOpacity>
            <View style = {styles.rowList}/>
            <TouchableOpacity onPress = {() => navigation.navigate("Privacy Policy")}>
                <Text style = {styles.rowListText}>Privacy Policy</Text>
            </TouchableOpacity>
            <View style = {styles.rowList}/>
            <TouchableOpacity onPress = {() => navigation.navigate("Online Tracking")}>
                <Text style = {styles.rowListText}>Online Tracking Opt Out Guide</Text>
            </TouchableOpacity>
            <View style = {styles.rowList}/>
            <TouchableOpacity onPress = {() => navigation.navigate("Open Source Licenses")}>
                <Text style = {styles.rowListText}>Open Source Licenses</Text>
            </TouchableOpacity>
            <View style = {styles.rowList}/>
        </SafeAreaView>
    );
}

export default PrivacyMain;