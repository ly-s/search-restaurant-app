import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../src/Styles';

const DetailsScreen = ({ route, navigation }) => {
    const { title, first, last, country, email, thumbnail } = route.params;
    return(
        <View style = {styles.container}>
            <View style = {styles.listItem}>
                <Image
                    source = {{uri: thumbnail}}
                    style = {styles.coverImage}
                />
                <View>
                    <Text style = {styles.title}>{title} {first} {last}</Text>
                    <Text style = {styles.boxText}>from {country}</Text>
                    <Text style = {styles.boxText}>email: {email}</Text>
                </View>
            </View>
        </View>
    );
}

export default DetailsScreen