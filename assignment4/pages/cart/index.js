import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {DummyProducts} from '../../data';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {DummyProducts.map((val, index) => (
          <View key={index} style={styles.listItem}>
            <View>
              <Image style={styles.productImg} source={{ uri: val.img,}} />
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{val.name}</Text>
              <Text style={styles.productPrice}>{val.price}</Text>
              <Text>Qty : 1</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View>
        <Text style={styles.Total}>Total : Rp. 2.304.000</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  listItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  productName: {
    fontSize: 12,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  productInfo: {
    marginLeft: 20,
  },
  productImg: {
    width: 80,
    height: 80,
  },
  Total: {
    fontWeight: 'bold',
    marginHorizontal: 20,
    alignContent: 'center',
    textAlign: 'center',
    padding: 15,
  },
});
export default Cart;
