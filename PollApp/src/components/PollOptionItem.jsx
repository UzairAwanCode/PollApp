import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PollOptionItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.value}</Text>
    </View>
  );
}

export default PollOptionItem;
const styles = StyleSheet.create({
  container:{
    width:'90%',
    height: 50,
    borderWidth: 1,
    borderColor: "#9e9e9e",
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  }
})