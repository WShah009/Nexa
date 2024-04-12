import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {CustomButton, CustomList} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {ViewAllScreen} from '../screens';
const HomeScreen = ({route}) => {
  const {height} = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Image.png')}
        style={[styles.imageBackground, {height: height * 0.6}]}>
        <Text style={styles.text}>Fashion</Text>
        <Text style={styles.text2}>Sale</Text>
        <View style={{marginLeft: 10}}>
          <CustomButton width={160} text={'Check'} />
        </View>
      </ImageBackground>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 0,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'black',
            padding: 8,
            fontSize: 26,
            fontWeight: 'bold',
          }}>
          New
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ViewAll')}>
          <Text style={{color: 'black', padding: 20}}>View All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color: 'grey', padding: 4, fontSize: 12}}>
          You have never seen it before
        </Text>
      </View>
      <CustomList />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    marginTop: '58%',
  },

  text2: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
});

{
  /* <View
        style={{
          flexDirection: 'row',
          marginBottom: 120,

          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'black',
            padding: 8,
            fontSize: 26,
            fontWeight: 'bold',
          }}>
          New
        </Text>
        <Text style={{color: 'black', padding: 20}}>View All</Text>
      </View>
      <View>
        <Text style={{color: 'black', padding: 4}}>
          You have never seen it before
        </Text>
      </View> */
}
