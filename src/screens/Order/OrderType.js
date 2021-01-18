import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../../Styles';


const OrderType = ({ navigation }) => {
    const [order, setOrder] = useState('In-Store Pickup');
    const [when, setWhen] = useState('ASAP');
    const [street, setStreet] = useState('123 Main Street');
    const [apt, setApt] = useState('Apt. 123');

    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };


    return (
        <SafeAreaView style = {{flex: 1, margin: 10}}>
            <Text style = {styles.header1}>How do you want to order?</Text>
            <View style = {{marginBottom: 5}}/>
            <Text style = {styles.header2}>Order Type</Text>
            <View style = {{zIndex: 10, margin: 5}}>
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
            <Text style = {styles.header2}>When</Text>
            <View style = {{zIndex: 9, margin: 5}}>
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
            { order == 'Delivery' ? (
                <View style = {{margin: 10}}>
                    <Text style = {styles.header1}>Delivery Location</Text>
                    <View style = {{margin: 10}}>
                        <Text style = {styles.header2}>Street Address</Text>
                        <TextInput
                            style = {styles.boxInput}
                            placeholder = '123 Main Street'
                            onChangeText = {street => setStreet(street)}
                        />
                    </View>

                    <View style = {{margin: 10}}>
                        <Text style = {styles.header2}>Apt #.</Text>
                        <TextInput
                            style = {styles.boxInput}
                            placeholder = 'Apt. 123'
                            onChangeText = {apt => setApt(apt)}
                        />
                    </View>

                </View>
                
            ) : null }

            { when == 'Later' ? (
                <View style = {{margin: 10, flexDirection: 'row'}}>
                    <View style = {{flex: 1}}>
                        <Text style = {styles.header2SubText}>Date:</Text>
                        <DateTimePicker
                            style = {{margin: 2}}
                            testID = "datePicker"
                            value = {date}
                            mode = {'date'}
                            is24Hour = {true}
                            display = "default"
                            onChange = {onChange}
                        />
                    </View>
                    <View style = {{flex: 1}}>
                        <Text style = {styles.header2SubText}>Time:</Text>
                        <DateTimePicker
                            style = {{margin: 2}}
                            testID = "timePicker"
                            value = {date}
                            mode = {'time'}
                            is24Hour = {true}
                            display = "default"
                            onChange = {onChange}
                        />
                        
                    </View>
                </View>
            ) : null }
            <View style = {styles.bottom}>
                <Button
                    onPress = {() => navigation.navigate("Restaurant List", {order: order, when: when, street: street, apt: apt})}
                    title = 'Search for locations'
                />    
            </View>
        </SafeAreaView>
    );
}

export default OrderType;