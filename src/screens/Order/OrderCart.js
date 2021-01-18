import React from 'react';

import { SafeAreaView, View, Text, FlatList, Button, TouchableOpacity } from 'react-native';

import Functions from '../../Functions';
import styles from '../../Styles';

const OrderCart = ({ route, navigation }) => {
    const { cart, when, delivery, delStreet, apt, delDate } = route.params;
    
    const func = new Functions();

    var subtotal = func.decimRound(func.totalPrice(cart));
    var tax = func.decimRound(subtotal*.08);
    var total = func.decimRound(subtotal+tax);
    return(
        <SafeAreaView style = {{margin: 10}}>
            <Text style = {styles.header1}>Tap Item Name to edit:</Text>
            <FlatList
                style = {{margin: 10, height: 500, borderWidth: 2, borderRadius: 20}}
                data = {cart}
                renderItem = {({item}) => (
                    <View style = {styles.curvedBox}>
                        <View style = {{flexDirection: 'row'}}>
                            <Button
                                title = 'Edit'
                                onPress = {() => navigation.navigate("Update Item", {cart: cart, index: cart.indexOf(item)})}
                            />    
                            <View style = {{margin: 10}}>
                                <Text style = {{fontWeight: 'bold', fontSize: 17}}>Item Name: {item.item}</Text>
                                <Text>Count: {item.count}</Text>
                                <Text>Price: ${item.price}</Text>
                            </View>
                        </View>
                        <Button
                            onPress = {() => {cart.splice(cart.indexOf(item), 1); navigation.pop()}}
                            title = 'Remove'
                        />
                    </View>
                )}
            />
            <View style = {{margin: 20}}>
                <Text>Subtotal: ${subtotal}</Text>
                <Text>Tax: ${tax}</Text>
                <Text style = {{fontWeight: 'bold'}}>Estimated Total: ${total}</Text>
            </View>
            { total > 0 ? (
                <Button
                    onPress = {() => navigation.navigate("Order Checkout", {total: total, delivery: delivery, when: when, delStreet: delStreet, apt: apt, delDate: delDate})}
                    title = 'Checkout'
                />
            ) : null}
        </SafeAreaView>
    );
}

export default OrderCart;