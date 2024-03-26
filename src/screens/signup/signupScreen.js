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
const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const handleSignup = async () => {
    try {
      console.log('wow');
      const response = await fetch('http://192.168.159.161:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, email, password}),
      });
      if (!response.ok) {
        throw new Error('Sign up failed');
      }
      const data = await response.json();
      console.log('User signed up:', data);
      Alert.alert('Sign Up Successful', 'You have successfully signed up!');
    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert(
        'Sign Up Failed',
        'Failed to sign up. Please try again later.',
      );
    }
  };
  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: '#F9F9F9', height: '100%'}}>
      <View style={{width: '100%'}}>
        <Icon
          name="arrow-back-outline" // Another example icon name from FontAwesome
          size={35}
          color="black"
          style={{padding: 10}}
          onPress={() => {
            // Handle your navigation here
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
          Sign up
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <CustomInput
          placeholder="Name"
          keyboardType="default"
          validator={text => text.trim().length > 0}
          onTextChange={setUserName}
        />
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
              navigation.navigate('Login');
            }}>
            <Text style={{color: 'black', marginLeft: 140}}>
              Already have an account?
            </Text>
            <Image source={require('../../assets/images/arrow.png')} />
          </TouchableOpacity>
        </View>
        <CustomButton
          width={320}
          text={'SIGN UP'}
          onpress={() => handleSignup()}
        />
        <View style={{marginTop: 70}}>
          <Text style={{color: 'black'}}>or sign up with social account</Text>
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

export default SignupScreen;
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
