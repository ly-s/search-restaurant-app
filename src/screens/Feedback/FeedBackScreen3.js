import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from '../../Styles';

const FeedBackScreen3 = ({ route, navigation }) => {
    const { category, type } = route.params;
    return(
        <SafeAreaView>
            <Text style = {styles.title}>Is this about a specific location?</Text>
                <View>
                    <TouchableOpacity onPress = {()=> navigation.navigate("General Feedback", {type: type, category: category})}>
                        <Text style = {styles.rowListText}>General Feedback</Text>
                    </TouchableOpacity>
                    <View style = {styles.rowList}/>
                    <TouchableOpacity>
                        <Text style = {styles.rowListText}>Specific Location</Text>
                    </TouchableOpacity>
                    <View style = {styles.rowList}/>
                </View>
        </SafeAreaView>
    );
}

export default FeedBackScreen3;