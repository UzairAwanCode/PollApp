import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import PollOptionItem from './PollOptionItem';
const PollItem = ({name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.topLeftView}>
          <EvilIcons
            style={styles.userImage}
            name="user"
            color={'gray'}
            size={50}
          />
          <Text style={styles.username}>{'Uzair'}</Text>
        </View>
      </View>
      <Text style={styles.question}>{'Which mobile brand you use?'}</Text>
      <FlatList
        data={[
          {value: 'Option 1', key: 0},
          {value: 'Option 2', key: 1},
        ]}
        renderItem={({item,index}) => {
          return <PollOptionItem item={item}/>;
        }}
      />
    </View>
  );
};

export default PollItem;
const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingBottom: 20,
    backgroundColor: '#f2f2f2',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  topView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  topLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
  },
  username: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  question: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
});
