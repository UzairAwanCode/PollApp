import {StyleSheet} from 'react-native';

export const addPollStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cationArea: {
    width: '90%',
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9e9e9e',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 10,
  },
  addOptionBtn: {
    padding: 10,
    borderWidth: 1,
    width: 100,
    marginLeft: 20,
    marginTop: 20,
    color: 'black'
  },
});
