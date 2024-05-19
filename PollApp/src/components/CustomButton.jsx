import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = ({title, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn:{
    width: "90%",
    height: 50,
    backgroundColor: 'purple',
    alignSelf: 'center',
    marginTop: 30,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  btnText:{
    color:'white',
    fontSize: 16,
    fontWeight: '600'
  }
})
