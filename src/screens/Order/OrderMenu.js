import React from 'react';

import { Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import styles from '../../Styles';

const sampleMenu = [
    {
        item: 'Hamburger',
        price: 7.49,
        calories: '840',
    },
    {
        item: 'Hotdog',
        price: 3.99,
        calories: '520',
    },
    {
        item: 'Grilled Cheese Sandwich',
        price: 3.79,
        calories: '420',
    },
    {
        item: 'Little Fries',
        price: 3.29,
        calories: '530',
    },
    {
        item: 'Regular Drink',
        price: 2.49,
        calories: '0-360',
    },
]

const cart = [];

const OrderMenu = ({ route, navigation }) => {
    const { order, when, name, street, menu, delivery, count, cartNew } = route.params;
    return (
        <SafeAreaView>
            <Text>Restaurant Name: {name}</Text>
            <Text>Street Address: {street}</Text>
            <Text>Order Type: {order}</Text>
            <Text>When: {when}</Text>
            <Text>Menu Link: {menu}</Text>
            <FlatList
                style = {{margin: 10}}
                data = {sampleMenu}
                renderItem = {({item}) => (
                    <View style = {{marginBottom: 10}}>
                        <TouchableOpacity
                            onPress = {() => navigation.navigate("Order Item", {item: item.item, price: item.price, cart: cart})}
                        >
                            <Text style = {{fontSize: 15, fontWeight: 'bold'}}>{item.item}</Text>
                            <Text>${item.price}  {item.calories} Calories</Text>
                        </TouchableOpacity>
                        <View style = {{marginTop: 5, borderColor: 'transparent', borderBottomColor: 'gray', borderWidth: 1}}/>
                    </View>
                    
                )}
            />
            
            <Button
                title = 'Cart'
                onPress = {() => navigation.navigate("Order Cart", {cart: cartNew, delivery: delivery})}
            />
        </SafeAreaView>
    );
}

export default OrderMenu;