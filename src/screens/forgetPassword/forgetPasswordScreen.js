import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomButton, CustomInput} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ForgetPasswordScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {};

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <View style={{width: '100%'}}>
        <Icon
          name="arrow-back-outline" // Another example icon name from FontAwesome
          size={35}
          color="black"
          style={{padding: 10}}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text
          style={{
            color: 'black',
            padding: 15,
            fontSize: 29,
            fontWeight: 'bold',
          }}>
          Forget Password
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <CustomInput
          placeholder="Email"
          keyboardType="email-address"
          validator={text => /\S+@\S+\.\S+/.test(text)}
          onTextChange={setEmail}
        />

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginBottom: 20,
          }}></View>

        <CustomButton width={320} text={'SEND'} onpress={() => handleLogin()} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ForgetPasswordScreen;
const styles = StyleSheet.create({
  google: {
    backgroundColor: '#fff',
    width: 92,
    height: 64,
    borderRadius: 100,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebook: {
    backgroundColor: '#fff',
    width: 92,
    height: 64,
    borderRadius: 100,
    elevation: 2,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
