import React from 'react';
import { SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';


import styles from '../../Styles';

const OrderMain = ({navigation}) => {
    return (
        <SafeAreaView>
            <Image
                style = {{width: '100%', height: 430, resizeMode: 'contain'}}
                source = {require('../../../assets/FoodImage.png')}
            />
            <TouchableOpacity style = {styles.rowList}
                onPress = {() => navigation.navigate("Order Type")}
            >
                <Text style = {styles.rowListText}>Start New Order</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
}

export default OrderMain;