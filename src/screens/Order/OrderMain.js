import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';


import styles from '../../Styles';

const OrderMain = ({navigation}) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style = {styles.rowList}
                onPress = {() => navigation.navigate("Order Type")}
            >
                <Text style = {styles.rowListText}>Start New Order</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
}

export default OrderMain;