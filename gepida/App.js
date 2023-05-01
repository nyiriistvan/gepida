import React from 'react';
import { StyleSheet, View } from 'react-native';
import BicycleList from './BicycleList';

const App = () => {
  return (
    <View style={styles.container}>
      <BicycleList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default App;
