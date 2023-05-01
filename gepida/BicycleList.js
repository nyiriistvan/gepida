import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const BicycleList = () => {
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/bikes')
      .then(response => response.json())
      .then(data => {
        setBicycles(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.model}</Text>
      <Text style={styles.price}>{item.price} Ft</Text>
    </View>
  );

  return (
    <FlatList
      data={bicycles}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BicycleList;