import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import Functions from '../../Functions';

const UpdateCartItem = ({ route, navigation }) => {
    const { cart, index } = route.params;

    const [count, setCount] = useState(cart[index].count);
    const [price, setPrice] = useState(cart[index].price);

    const func = new Functions();

    cart[index].count = count;
    cart[index].price = count*cart[index].basePrice;

    return (
        <SafeAreaView style = {{margin: 10, alignItems: 'center'}}>
            {/* <Text style = {{fontWeight: 'bold', fontSize: 17}}>Order Item Screen</Text> */}
            <Text style = {{fontWeight: 'bold', fontSize: 17}}>Item name: {cart[index].item}</Text>
            <Text style = {{fontWeight: 'bold', fontSize: 17}}>Count: {count}</Text>
            <Text style = {{fontWeight: 'bold', fontSize: 17}}>Total price: ${func.decimRound(cart[index].price)}</Text>
            <View style = {{flexDirection: 'row', margin: 10}}>
                <View style = {{paddingHorizontal: 5}}>
                    <Button
                        onPress = {() => setCount(count - 1)}
                        title = '-'
                    />
                </View>
                <View>
                    <Button
                        onPress = {() => {setCount(count); navigation.navigate("Order Cart", {cart: cart})}}
                        title = 'Update Item'
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

export default UpdateCartItem;