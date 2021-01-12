import React from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import styles from '../../Styles';

const GeneralFeedbackScreen = ({route, navigation}) => {
    const { category, type } = route.params;
    return(
        <SafeAreaView>
            <Text style = {{fontSize: 15, marginLeft: 10}}>What     {category}</Text>
            <Text style = {{fontSize: 15, marginLeft: 10, marginBottom: 20}}>Why      {type}</Text>
            <View style = {{marginVertical: 10}}/>
            <TextInput
                style = {(styles.textInput)}
                placeholder = 'Full Name'
            />
            <View style = {{marginVertical: 10}}/>
            <TextInput
                style = {(styles.textInput)}
                placeholder = 'Email'
            />
            <View style = {{marginVertical: 10}}/>
            <Text style = {styles.title}>Feedback</Text>
            <TextInput
                style = {(styles.textInput)}
                placeholder = "What's on your mind?"
            />
            <Button
                title = 'Submit'
                style = {{marginTop: 50}}
            />
        </SafeAreaView>
    );
}

export default GeneralFeedbackScreen