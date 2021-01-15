import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';
import Functions from '../../Functions';

const OrderItem = ({ route, navigation }) => {
    const [count, setCount] = useState(1);
    const { item, price, cart } = route.params;
    const func = new Functions();

    const foodItem =
        {
            item: item,
            price: func.decimRound(price*count),
            count: count,
        }

    return (
        <SafeAreaView>
            <Text>Order Item Screen</Text>
            <Text>Item name: {foodItem.item}</Text>
            <Text>Count: {foodItem.count}</Text>
            <Text>Item price: ${foodItem.price}</Text>
            <Button
                onPress = {() => setCount(count + 1)}
                title = '+'
            />
            <Button
                onPress = {() => setCount(count - 1)}
                title = '-'
            />
            <Button
                onPress = {() => {func.pushArray(cart, foodItem); navigation.navigate("Order Menu", {cartNew: cart})}}
                title = 'Add to Cart'
            />
            
        </SafeAreaView>
    );
}

export default OrderItem;