import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';


const OrderItem = ({ route, navigation }) => {
    const [count, setCount] = useState(1);
    
    const { item, price, cart } = route.params;

    const decimRound = (num) => {
        num = num.toFixed(2);
        return num;
    }
    
    const pushArray = (cart, foodItem) => {
        cart.push(foodItem);
        return cart;
    }

    const foodItem =
        {
            item: item,
            price: decimRound(price*count),
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
                onPress = {() => {pushArray(cart, foodItem); navigation.navigate("Order Menu", {cartNew: cart})}}
                title = 'Add to Cart'
            />
            
        </SafeAreaView>
    );
}

export default OrderItem;