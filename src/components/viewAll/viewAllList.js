import {View, Text, FlatList, StyleSheet, Image, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';

const ViewAllList = () => {
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      console.log('entered');
      const resp = await fetch('https://fakestoreapi.com/products');
      const data = await resp.json();
      setProduct(data);
      console.log('view data', data);
    } catch (error) {
      console.log('our error:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: item.image}} style={styles.img} />
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.title}>
          {item.title.split(' ').slice(0, 1).join(' ')}
        </Text>
      </View>
    );
  };

  const scaleValue = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default ViewAllList;

const styles = StyleSheet.create({
  img: {
    height: 90,
    width: 80,
    marginTop: 8,
    borderRadius: 8,
  },
  price: {
    color: 'green',
    marginTop: 5,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 2,
  },

  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 170,
    width: 140,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: 'white',
    elevation: 5, // Android shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 10,
    marginTop: 6,
  },
  listContainer: {
    paddingHorizontal: 9,
  },
});
