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
const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.63.161:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      const {token, userData} = data;
      // Log the token
      console.log('Received token:', token);
      console.log('Received Name=:', userData.username);
      // Store token locally (e.g., using AsyncStorage)
      await AsyncStorage.setItem('token', token);
      navigation.navigate('Home', {username: userData.username});
      Alert.alert('Login Successful', 'You have successfully logged in!');
      // Navigate to the next screen or perform any other action upon successful login
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Login Failed', 'Failed to log in. Please try again later.');
    }
  };

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
          Login
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

        <CustomInput
          placeholder="Password"
          keyboardType="default"
          validator={text => text.length >= 8}
          onTextChange={setPassword}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={{color: 'black', marginLeft: 140}}>
              Forgot your password?
            </Text>
            <Image source={require('../../assets/images/arrow.png')} />
          </TouchableOpacity>
        </View>

        <CustomButton
          width={320}
          text={'LOGIN'}
          onpress={() => handleLogin()}
        />

        <View style={{marginTop: 160}}>
          <Text style={{color: 'black'}}>or login with social account</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 8, marginBottom: 10}}>
          <TouchableOpacity style={styles.google}>
            <Image source={require('../../assets/images/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebook}>
            <Image source={require('../../assets/images/facebook.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
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
