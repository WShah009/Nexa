import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ViewAllList} from '../../components';
const ViewAllScreen = () => {
  const {height} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/street.png')}
        style={[styles.imageBackground, {height: height * 0.3}]}>
        <Text style={styles.text}>Street Clothes</Text>
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
          Sale
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ViewAll')}>
          <Text style={{color: 'black', padding: 20}}>View All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color: 'grey', padding: 4, fontSize: 12}}>
          Super Summer Sale
        </Text>
      </View>
      <ViewAllList />
    </View>
  );
};

export default ViewAllScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 140,
    marginLeft: 20,
  },
});
