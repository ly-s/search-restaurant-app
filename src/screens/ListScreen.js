import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator, Image, TextInput, TouchableOpacity, } from 'react-native';
import styles from '../Styles';
import filter from 'lodash.filter';

const API_ENDPOINT = 'https://randomuser.me/api/?seed=1&page=1&results=100';

const ListScreen = ({ route, navigation}) => {
  const { order, when } = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, user => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  }

  const contains = ({name, email}, query) => {
    const { first, last } = name;

    if (first.includes(query) || last.includes(query) || email.includes(query)) {
      return true;
    }
    return false;
  }

  function renderHeader() {
    return (
      <View
        style = {{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
        }}  
      >
        <TextInput
          autoCapitalize = 'none'
          autoCorrect = {false}
          clearButtonMode = 'always'
          value = {query}
          onChangeText = {queryText => handleSearch(queryText)}
          placeholder = 'Search'
          style = {{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />

      </View>
    );
  }

  useEffect(() => {
    setIsLoading(true);

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(results => {
        setData(results.results);
        setFullData(results.results);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18}}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style = {{fontWeight: 'bold', alignSelf: 'baseline', marginLeft: 10, marginTop: 10}}>Order Type: {order}</Text>
      <Text style = {{fontWeight: 'bold', alignSelf: 'baseline', marginLeft: 10, marginBottom: 10}}>When: {when}</Text>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={data}
        keyExtractor={item => item.first}
        renderItem={({ item }) => (
            <TouchableOpacity onPress = {()=> navigation.navigate("Details", {
                title: item.name.title,
                first: item.name.first,
                last: item.name.last,
                country: item.location.country,
                email: item.email,
                thumbnail: item.picture.large,
            })}>
                <View style={styles.listItem}>
                    <Image
                    source={{ uri: item.picture.large }}
                    style={styles.coverImage}
                    />
                    <View style={styles.metaInfo}>
                        <Text style={styles.title}>{item.name.first} {item.name.last}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default ListScreen;