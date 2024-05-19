import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {homeStyles} from '../all-screen-styles/HomeScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigaion = useNavigation();
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <Text style={homeStyles.logo}>PollPro</Text>
      </View>

      <Pressable
        style={homeStyles.addBtn}
        onPress={() => navigaion.navigate('AddPoll')}>
        <Text style={homeStyles.addBtnText}>Add New Poll</Text>
      </Pressable>
    </View>
  );
};

export default Home;
