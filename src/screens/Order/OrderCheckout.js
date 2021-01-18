import React, { useState } from 'react';

import styles from '../../Styles';
import Functions from '../../Functions';

import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView, SafeAreaView, Text, View, Button, TextInput, Platform, Alert } from 'react-native'; 

const OrderCheckout = ({route, navigation}) => {
    const { total, when, delivery, delStreet, apt, delDate } = route.params;

    const [payMethod, setPayMethod] = useState("Cash");
    
    const [date, setDate] = useState(new Date());

    var showCredit = false;
    if (payMethod == "Credit Card"){
        showCredit = true;
    }
    else showCredit = false;
    return(
        <SafeAreaView style = {{flex: 1, margin: 10}}>
            <ScrollView>

                <Text style = {styles.header1}>Order Type: {delivery}</Text>
                { delivery == 'Delivery' ? (
                    <View style = {{margin: 5}}>
                        <Text style = {styles.header1Subtext}>Delivery Details:</Text>
                        <Text style = {styles.header2SubText}>Street Address: {delStreet}, Apt #: {apt}</Text>
                    </View>
                    
                ) : null}
                {
                    when == "Later" ? (
                        <View style = {{margin: 2}}>
                            <Text style = {styles.header1Subtext}>Order Details:</Text>
                            <Text style = {styles.header2SubText}>Date/Time: {delDate}</Text>
                        </View>
                        
                    ) : null
                }
                <Text style = {styles.header1}>Estimated Total: ${total}</Text>
                <Text style = {{fontSize: 15, margin: 5, fontWeight: 'bold'}}>How would you like to pay?</Text>
                <DropDownPicker
                        items = {[
                            { label: 'Cash', value: 'cash' },
                            { label: 'Credit Card', value: 'creditcard' },
                        ]}
                        defaultValue = "cash"
                        containerStyle = {{height: 50}}
                        onChangeItem = { item => setPayMethod(item.label)}
                    />
                { showCredit ? (
                    <View style = {{margin: 10}}>
                        <Text style = {styles.header1}>Credit Card Information</Text>
                        <View style = {{flexDirection: 'row', margin: 10}}>
                            <View style = {{marginRight: 30, flex: 1}}>
                                <Text style = {styles.header2}>First Name</Text>
                                <TextInput
                                    style = {styles.boxInput}
                                    placeholder = 'First Name'
                                />
                            </View>
                            <View style = {{flex: 1}}>
                                <Text style = {styles.header2}>Last Name</Text>
                                <TextInput
                                    style = {styles.boxInput}
                                    placeholder = 'Last Name'
                                />
                            </View>
                        </View>
                        <View style = {{margin: 10}}>
                            <Text style = {styles.header2}>Credit Card Number</Text>
                            <TextInput
                                style = {styles.boxInput}
                                placeholder = 'Credit Card Number'
                            />
                            <View style = {{margin: 2}}/>
                            <Text style = {styles.header2}>CVV</Text>
                            <TextInput
                                style = {styles.boxInput}
                                placeholder = 'CVV'
                            />
                        </View>

                        <View style = {{margin: 10}}>
                            <Text style = {styles.header2}>Expiration Date</Text>
                            <View style = {{flexDirection: 'row', margin: 2}}>
                                <TextInput
                                    style = {styles.boxInput}
                                    placeholder = 'MM'
                                />
                                <View style = {{margin: 2}}/>
                                <TextInput
                                    style = {styles.boxInput}
                                    placeholder = 'YYYY'
                                />
                            </View>
                        </View>

                        <Text style = {styles.header1}>Billing Address</Text>
                        <View style = {{margin: 10}}>
                            <Text style = {styles.header2}>Address 1</Text>
                            <TextInput
                                style = {styles.boxInput}
                                placeholder = '123 Main Street'
                            />
                        </View>
                        
                        <View style = {{margin: 10}}>
                            <Text style = {styles.header2}>Address 2 (optional)</Text>
                            <TextInput
                                style = {styles.boxInput}
                                placeholder = 'Apt, Office, Suite'
                            />
                        </View>
                        
                        <View style = {{margin: 10}}>
                            <Text style = {styles.header2}>City</Text>
                            <TextInput
                                style = {styles.boxInput}
                                placeholder = 'City'
                            />
                        </View>
                        <Button
                            onPress = {() => {Alert.alert('Order Submitted', 'Thank you for choosing us!'), navigation.popToTop()}}
                            title = 'Submit Order'
                        />
                    </View>
                    
                ) : (
                    <Button
                        onPress = {() => navigation.popToTop()}
                        title = 'Submit Order'
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

export default OrderCheckout;