import React, { useState } from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import {homeStyles} from '../all-screen-styles/HomeScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import PollItem from '../components/PollItem';

const Home = () => {
  const navigaion = useNavigation();
  const [polls, setPolls] = useState([1,1,1,1,1])
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <Text style={homeStyles.logo}>PollPro</Text>
      </View>
      <FlatList data={polls} renderItem={()=>{
        return <PollItem name={polls}/>
      }}/>

      <Pressable
        style={homeStyles.addBtn}
        onPress={() => navigaion.navigate('AddPoll')}>
        <Text style={homeStyles.addBtnText}>Add New Poll</Text>
      </Pressable>
    </View>
  );
};

export default Home;
