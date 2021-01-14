import React from 'react';

import { SafeAreaView, View, Text, FlatList, Button } from 'react-native';

const OrderCart = ({ route, navigation }) => {
    const { cart } = route.params;

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
        </SafeAreaView>
    );
}

export default OrderCart;