import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({text, width, onpress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {width: width}]}
      onPress={onpress}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DB3022',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    elevation: 6,
  },
});
