import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const OptionItem = ({item, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Value" value={item.value} onChangeText={(text)=>onChangeText(text)}/>
    </View>
  );
}

export default OptionItem;
const styles = StyleSheet.create({
    container:{
        width:"90%",
        height: 50,
        alignSelf: 'center',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center'
    }
})
