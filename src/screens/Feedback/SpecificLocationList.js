import React from 'react';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../../Styles';

const list = [
    {
        name: 'Ten Lads',
        street: '1234 Fake Street',
        delivery: 'In-store Pickup, Delivery',
    },
    {
        name: 'Fifteen Gals',
        street: '5678 Fake Street',
        delivery: 'In-store Pickup, Delivery',
    },
]


const SpecificLocationList = ({ route, navigation }) => {
    const { type, category } = route.params;
    
    return(
        <SafeAreaView>
            <FlatList
                data = {list}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress = {() => navigation.navigate("Specific Location Submit", { type: type, category: category, location: item.name})}>
                        <View style = {{margin: 10}}>
                            <Text style = {{fontWeight: 'bold', marginBottom: 5}}>{item.name}</Text>
                            <Text style = {{marginBottom: 5}}>{item.street}</Text>
                            <Text style = {{marginBottom: 5}}>{item.delivery}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            {/* <Text style = {styles.header}>List Screen</Text> */}
        </SafeAreaView>
    );
}

export default SpecificLocationList;