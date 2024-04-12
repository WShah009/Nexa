import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomButton, CustomInput} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1086741753261-6ajoqcj25paa7uq1l17n4dh0p2e61nt4.apps.googleusercontent.com ',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      console.log('dialogue up');
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      console.log('Google Sign-In Response:', idToken);
      console.log('myToken', idToken);
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('This is our error', error);
    }
  }
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
      navigation.navigate('BottomTabs');
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
              navigation.navigate('ForgetPassword');
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
          onpress={() => navigation.navigate('BottomTabs')}
        />

        <View style={{marginTop: 160}}>
          <Text style={{color: 'black'}}>or login with social account</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 8, marginBottom: 10}}>
          <TouchableOpacity style={styles.google} onPress={onGoogleButtonPress}>
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
