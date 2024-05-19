import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomTextInput = ({mt, error, placeholder, value, onChangeText}) => {
  return (
    <View style={{marginTop: mt? mt : 20}}>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={text => onChangeText(text)}
          style={styles.input}
        />
      </View>
      {error!='' ? <Text style={styles.error}>{error}</Text>: null}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#9e9e9e',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 10,
  },
  input: {
    width: '80%',
    color: 'black',
    fontSize: 16,
    height: 50,
  },
  error:{
    marginTop: 10,
    color: 'red',
    marginLeft: 20
  }
});
