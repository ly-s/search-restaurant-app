import React from 'react';

import { SafeAreaView, View, Text, FlatList, Button } from 'react-native';

import Functions from '../../Functions';

const OrderCart = ({ route, navigation }) => {
    const { cart } = route.params;
    
    const func = new Functions();

    var total = func.totalPrice(cart);

    return(
        <SafeAreaView>
            <FlatList
                style = {{margin: 10}}
                data = {cart}
                renderItem = {({item}) => (
                    <View style = {{margin: 10}}>
                        <Text>Item Name: {item.item}</Text>
                        <Text>Price: ${item.price}</Text>
                        <Text>Count: {item.count}</Text>
                        <Button
                            onPress = {() => {cart.splice(cart.indexOf(item), 1); navigation.pop()}}
                            title = 'Remove'
                        />
                    </View>
                )}
            />
            <Text style = {{margin: 20}}>Grand total: ${func.decimRound(total)}</Text>
            <Button
                title = 'Checkout'
            />
        </SafeAreaView>
    );
}

export default OrderCart;