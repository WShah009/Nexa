import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({text, height}) => {
  return (
    <View style={[styles.container, {height: height}]}>
      <Icon
        name="arrow-back-outline" // Another example icon name from FontAwesome
        size={35}
        color="black"
        style={{padding: 10}}
        onPress={
          {
            // Handle back button press
          }
        }
      />
      <Text style={styles.headerText}>{text}</Text>

      <Icon
        name="search-outline" // Another example icon name from FontAwesome
        size={35}
        color="black"
        style={{padding: 10}}
        onPress={() => {
          //sasasa
        }}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center', // Changed to alignItems
    justifyContent: 'space-between', // Adjusted to space items evenly
  },
  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
  },
});
