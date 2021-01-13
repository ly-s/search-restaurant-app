import React from 'react';
import { TextInput, Text, View, SafeAreaView, Button } from 'react-native';
import styles from '../../src/Styles';


const LoginScreen = ({navigation}) => {
    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.titleHeader}>Login to Search Restaurant</Text>
            <TextInput
                style = {styles.textField}
                placeholder = 'Username'
            />
            <TextInput
                style = {styles.textField}
                placeholder = 'Password'
            />
            <View style = {styles.boxButton}>
                <Button
                    title = 'Login'
                    onPress = {() => navigation.navigate("Home")}
                />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;