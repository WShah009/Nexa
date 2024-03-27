import React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = ({route}) => {
  // Extract username from navigation params
  // const {username} = route.params;

  return (
    <View>
      <Text style={{color: 'black'}}>Welcome, test!</Text>
      {/* Other content of the Home screen */}
    </View>
  );
};

export default HomeScreen;
