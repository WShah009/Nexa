import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import React from 'react';

const SaleCollectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer}>
        <ImageBackground
          source={require('../../assets/images/red.png')}
          style={{flex: 1}}>
          <Text style={styles.redText}>Street Clothes</Text>
        </ImageBackground>
      </View>
      <View style={styles.multipleContainer}>
        <View style={styles.firstHalf}>
          <View style={styles.summerContainer}>
            <Text style={styles.summerText}>Summer</Text>
            <Text
              style={{
                marginLeft: 30,
                color: '#DB3022',
                fontSize: 34,
                fontWeight: 'bold',
              }}>
              Sale
            </Text>
          </View>
          <View style={styles.blackContainer}>
            <ImageBackground
              source={require('../../assets/images/black.png')}
              style={{flex: 1}}>
              <Text style={styles.blackText}>Black</Text>
            </ImageBackground>
          </View>
        </View>
        <View style={{width: '50%'}}>
          <ImageBackground
            source={require('../../assets/images/hoodie.png')}
            style={{flex: 1}}>
            {/* <Text style={styles.blackText}>Black</Text> */}
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default SaleCollectionScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  redContainer: {height: '55%', width: '100%', backgroundColor: 'orange'},
  redText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 320,
    marginLeft: 120,
    color: '#fff',
  },
  multipleContainer: {
    flexDirection: 'row',
  },
  firstHalf: {width: '50%', backgroundColor: 'yellow'},
  summerContainer: {
    height: '40%',
    width: '100%',
    backgroundColor: '#fff',
  },
  summerText: {
    marginTop: 80,
    marginLeft: 30,
    color: '#DB3022',
    fontSize: 34,
    fontWeight: 'bold',
  },
  blackContainer: {height: 155, width: '100%', backgroundColor: 'black'},
  blackText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 80,
    marginLeft: 10,
  },
});
