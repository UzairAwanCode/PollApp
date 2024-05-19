import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'purple',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  logo: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  addBtn: {
    backgroundColor: 'purple',
    borderRadius: 30,
    position: 'absolute',
    bottom: 50,
    right: 20,
    padding: 20,
  },
  addBtnText: {
    fontSize: 16,
    fontWeight: "600",
    color: 'white',
  },
});
