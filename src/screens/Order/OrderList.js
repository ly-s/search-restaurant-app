import React from 'react';

import { SafeAreaView, View, Text, FlatList, TouchableOpacity, TouchableOpacityComponent } from 'react-native';
import styles from '../../Styles';

const restaurantList = [
  {
      name: 'Ten Lads',
      street: '1234 Fake Street',
      delivery: 'Delivery',
      instore: 'In-Store Pickup',
      menu: 'sample-api-link1',
  },
  {
      name: 'Fifteen Gals',
      street: '5678 Fake Street',
      delivery: 'Delivery',
      instore: 'In-Store Pickup',
      menu: 'sample-api-link2',
  },
  {
      name: 'Twenty Gentlemen',
      street: '1357 Fake Street',
      delivery: 'Delivery',
      instore: 'In-Store Pickup',
      menu: 'sample-api-link3',
  },
  {
      name: 'Twenty-five Ladies',
      street: '2468 Fake Street',
      delivery: 'Delivery',
      instore: 'In-Store Pickup',
      menu: 'sample-api-link4',
  },
]


const OrderList = ({ route, navigation }) => {
    const { order, when, street, apt, delDate} = route.params;
    return (
      <SafeAreaView style = {{margin: 10}}>
        <Text style = {styles.header1}>Order Type: {order}</Text>
        <Text style = {styles.header1}>When: {when}</Text>
        { order == 'Delivery' ? (
          <View style = {{margin: 5}}>
              <Text style = {styles.header1Subtext}>Delivery Details</Text>
              <Text style = {styles.header2SubText}>Street: {street}, Apt #: {apt}</Text>
          </View>
        ) : null }
        { when == 'Later' ? (
          <View style = {{margin: 5}}>
            <Text style = {styles.header2SubText}>Date/Time: {JSON.stringify(delDate)}</Text>
          </View>
        ) : null}
        <View style = {{marginTop: 20}}>
          <View style = {{alignSelf: 'center'}}>
            <Text style = {styles.header1}>Restaurant List</Text>
          </View>
          <FlatList
            data = {restaurantList}
            keyExtractor = {(item) => item.key}
            renderItem = {({item}) => (
              <View style = {styles.curvedBox}>
                <TouchableOpacity
                  onPress = {() => navigation.navigate("Order Menu", {order: order, when: when, delStreet: street, apt: apt, name: item.name, street: item.street, delivery: item.delivery, menu: item.menu, delDate: delDate})}
                  style = {styles.restList}
                >
                  <Text style = {{fontWeight: 'bold', fontSize: 17, marginBottom: 5}}>{item.name}</Text>
                  <Text>{item.street}</Text>
                  <Text>{item.instore}, {item.delivery}</Text>
                </TouchableOpacity>
              </View>
            )} 
          />
        </View>
      </SafeAreaView>
    );
}

export default OrderList;