import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from '../../Styles';

const options = [
    {
        category: 'App',
        key: 1,
    },
    {
        category: 'Food',
        key: 2,
    },
    {
        category: 'Service',
        key: 3,
    },
    {
        category: 'Other',
        key: 4
    },
]

const FeedBackScreen1 = ({navigation}) => {
    return(
        <SafeAreaView style = {{marginTop: 10}}>
            <Text style = {styles.title}>What is this regarding?</Text>
            <FlatList
                data = {options}
                // keyExtractor = {item => item.key}
                renderItem = {({item}) =>
                    <View>
                        <TouchableOpacity onPress = {()=> navigation.navigate("Feedback2", {category: item.category})}>
                            <Text style = {styles.rowListText}>{item.category}</Text>
                        </TouchableOpacity>
                        <View style = {styles.rowList}/>
                    </View>

                }
            />
        </SafeAreaView>
    );
}

export default FeedBackScreen1;