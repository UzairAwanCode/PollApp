import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {loginStyles} from '../all-screen-styles/LoginScreen';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.heading}>Signup</Text>
      <CustomTextInput
        mt={50}
        error=""
        placeholder={'Enter Name'}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <CustomTextInput
        error=""
        placeholder={'Enter Email'}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <CustomTextInput
        error=""
        placeholder={'Enter Password'}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <CustomButton title={'Login'} onClick={() => {}} />
      <Text style={loginStyles.signup}>
        {'Already have Account ? '}{' '}
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;
