import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../Styles';


const OrderType = ({ navigation }) => {
    const [order, setOrder] = useState('In-Store Pickup');
    const [when, setWhen] = useState('ASAP');
    
    return (
        <SafeAreaView style = {{flex: 1, margin: 10}}>
            <Text style = {{fontWeight: 'bold', marginBottom: 20}}>How do you want to order?</Text>
            <Text>Order Type</Text>
            <View style = {{zIndex: 10}}>
                <DropDownPicker
                    items = {[
                        { label: 'In-Store Pickup', value: 'inStorePickup' },
                        { label: 'Mobile Drive-Up Window', value: 'mobileDriveUp' },
                        { label: 'Curbside', value: 'curbside' },
                        { label: 'Delivery', value: 'delivery' },
                    ]}
                    defaultValue = "inStorePickup"
                    containerStyle = {{height: 50}}
                    onChangeItem = { item => setOrder(item.label)}
                />
            </View>
            <Text style = {{marginTop: 10}}>When</Text>
            <View style = {{zIndex: 9}}>
                <DropDownPicker
                    items = {[
                        { label: 'ASAP', value: 'asap' },
                        { label: 'Later', value: 'later'},
                    ]}
                    defaultValue = 'asap'
                    containerStyle = {{height: 50}}
                    onChangeItem = { item => setWhen(item.label)}
                />
            </View>
            <View style = {styles.bottom}>
                <Button
                    onPress = {() => navigation.navigate("Restaurant List", {order: order, when: when})}
                    title = 'Search for locations'
                />    
            </View>
        </SafeAreaView>
    );
}

export default OrderType;