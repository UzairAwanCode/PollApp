import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {loginStyles} from '../all-screen-styles/LoginScreen';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.heading}>Login</Text>
      <CustomTextInput
        mt={50}
        error=""
        placeholder={'Enter Email'}
        value={email}
      />
      <CustomTextInput
        error=""
        placeholder={'Enter Password'}
        value={password}
      />
      <Text style={loginStyles.forgot}>forgot password?</Text>
      <CustomButton title={'Login'} onClick={() => {navigation.navigate('Home')}} />
      <Text style={loginStyles.signup}>
        {'New User ? '}{' '}
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default Login;
