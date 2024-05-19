import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { splashStyle } from '../all-screen-styles/SplashScreen';

const Splash = () => {
  const navigation = useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("Login")
    },2000)
  },[])
  return (
    <View style={splashStyle.container}>
      <StatusBar backgroundColor={'purple'} barStyle={'light-content'}/>
      <Text style={splashStyle.logo}>PollPro</Text>
      <Text style={splashStyle.tagline}>post poll and receive inam's ass</Text>
    </View>
  );
}

export default Splash;
