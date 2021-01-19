import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
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
            basePrice: price,
        }

    return (
        <SafeAreaView style = {{margin: 10, alignItems: 'center'}}>
            {/* <Text style = {{fontWeight: 'bold', fontSize: 17}}>Order Item Screen</Text> */}
            <Text style = {{fontWeight: 'bold', fontSize: 17}}>Item name: {foodItem.item}</Text>
            <Text style = {{fontWeight: 'bold', fontSize: 17}}>Count: {foodItem.count}</Text>
            <Text style = {{fontWeight: 'bold', fontSize: 17}}>Total price: ${foodItem.price}</Text>
            <View style = {{flexDirection: 'row', margin: 10}}>
                <View style = {{paddingHorizontal: 5}}>
                    <Button
                        onPress = {() => setCount(count - 1)}
                        title = '-'
                    />
                </View>
                <View>
                    <Button
                        onPress = {() => {func.pushArray(cart, foodItem); navigation.navigate("Order Menu", {cartNew: cart})}}
                        title = 'Add to Cart'
                    />

                </View>
                <View style = {{paddingHorizontal: 5}}>
                    <Button
                        onPress = {() => setCount(count + 1)}
                        title = '+'
                    />
                </View>
            </View>
            
        </SafeAreaView>
    );
}

export default OrderItem;