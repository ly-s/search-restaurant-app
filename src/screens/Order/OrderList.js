import React from 'react';

import { SafeAreaView, View, Text, FlatList, TouchableOpacity, TouchableOpacityComponent } from 'react-native';
import styles from '../../Styles';

const restaurantList = [
  {
      name: 'Ten Lads',
      street: '1234 Fake Street',
      delivery: 'In-store Pickup, Delivery',
      menu: 'sample-api-link1',
  },
  {
      name: 'Fifteen Gals',
      street: '5678 Fake Street',
      delivery: 'In-store Pickup, Delivery',
      menu: 'sample-api-link2',
  },
  {
      name: 'Twenty Gentlemen',
      street: '1357 Fake Street',
      delivery: 'In-Store Pickup',
      menu: 'sample-api-link3',
  },
  {
      name: 'Twenty-five Ladies',
      street: '2468 Fake Street',
      delivery: 'In-Store Pickup',
      menu: 'sample-api-link4',
  },
]


const OrderList = ({ route, navigation }) => {
    const { order, when } = route.params;
    return (
      <SafeAreaView>
        <Text style = {{fontWeight: 'bold'}}>Order Type: {order}</Text>
        <Text style = {{fontWeight: 'bold'}}>When: {when}</Text>
        <FlatList
          data = {restaurantList}
          keyExtractor = {(item) => item.key}
          renderItem = {({item}) => (
            <TouchableOpacity
              onPress = {() => navigation.navigate("Order Menu", {order: order, when: when, name: item.name, street: item.street, delivery: item.delivery, menu: item.menu})}
              style = {styles.restList}
            >
              <Text style = {{fontWeight: 'bold'}}>{item.name}</Text>
              <Text>{item.street}</Text>
              <Text>{item.delivery}</Text>
            </TouchableOpacity>
          )} 
        />
      </SafeAreaView>
    );
}

export default OrderList;