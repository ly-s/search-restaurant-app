import React, { useState } from 'react';
import styles from '../Styles';
import { FlatList, SafeAreaView, Text, View, Button } from 'react-native';
import APIManager from '../APIManager';



const HomeScreen = props =>{
    const [result , setResults]  = useState([]);
    const getPost = async () => {
        const response = await APIManager.get('/posts');
        setResults(response.data);
    };
    getPost();
    return(
        <SafeAreaView style = {styles.container}>
            <FlatList
                style = {{marginBottom: 10}}
                data = {result}
                keyExtractor = {item => item.id}
                renderItem = {({ item }) => (
                    <View style = {styles.curvedBox}>
                           <Text style = {styles.title}>{item.title}</Text>
                            <Text>{item.body}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

export default HomeScreen;