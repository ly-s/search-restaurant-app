import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from '../../Styles';

const options = [
    {
        type: 'Compliment',
        key: 1,
    },
    {
        type: 'Issue',
        key: 2,
    },
    {
        type: 'Question',
        key: 3,
    },
    {
        type: 'Suggestion',
        key: 4,
    },
]

const FeedBackScreen2 = ({ route, navigation }) => {
    const { category } = route.params;
    return(
        <SafeAreaView style = {{marginTop: 10}}>
            <Text style = {styles.title}>What's on your mind?</Text>
            <FlatList
                data = {options}
                scrollEnabled = {false}
                // keyExtractor = {item => item.key}
                renderItem = {({item}) =>
                    <View>
                        <TouchableOpacity onPress = {()=> navigation.navigate("Feedback3", {type: item.type, category: category})}>
                            <Text style = {styles.rowListText}>{item.type}</Text>
                        </TouchableOpacity>
                        <View style = {styles.rowList}/>
                    </View>

                }
            />
        </SafeAreaView>
    );
}

export default FeedBackScreen2;