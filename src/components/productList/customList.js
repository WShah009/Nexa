import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

const CustomList = () => {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch('https://fakestoreapi.com/products');
      const data = await resp.json();
      setProduct(data);
      // console.log('api data', data);
    } catch (error) {
      console.error('Error fetching products: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItems = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.title}>
          {item.title.split(' ').slice(0, 1).join(' ')}
        </Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={product}
        renderItem={renderItems}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        style={{marginLeft: 10}}
      />
    </View>
  );
};

export default CustomList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,

    fontWeight: 'bold',
    marginTop: 0,
    color: 'black',
  },
  price: {
    fontSize: 14,
    marginTop: 0,
    color: 'green',
  },
});
