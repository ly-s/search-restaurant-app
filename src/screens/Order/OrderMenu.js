import React, { useState } from 'react';

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
    const { order, when, delStreet, apt, name, street, menu, delivery, count, cartNew, delDate } = route.params;
    
    var show = true;
    
    const cartEmpty = (cartNew) => {
        if (cartNew === undefined || cartNew.length == 0)
            return true;
        else
            return false;
    }

    if (cartEmpty(cartNew)){
        show = false;
    }
    else show = true;
    
    return (
        <SafeAreaView style = {{margin: 10}}>
            <Text style = {styles.header1Subtext}>Restaurant Name: {name}</Text>
            <Text style = {styles.header1Subtext}>Street Address: {street}</Text>
            <Text style = {styles.header1Subtext}>Order Type: {order}</Text>
            <Text style = {styles.header1Subtext}>When: {when}</Text>
            {/* <Text style = {{fontWeight: 'bold'}}>Menu Link: {menu}</Text> */}
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
            
            { show ? (
                <Button
                    title = 'Cart'
                    onPress = {() => navigation.navigate("Order Cart",
                    {
                        cart: cartNew,
                        when: when,
                        delivery: delivery,
                        delStreet: delStreet,
                        apt: apt,
                        delDate: delDate
                    })}
                />
            ) : null}
        </SafeAreaView>
    );
}

export default OrderMenu;