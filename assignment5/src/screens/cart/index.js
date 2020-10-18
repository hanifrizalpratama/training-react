import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  ToastAndroid,
} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';

const CART_LIST = gql`
query {
  cart(cart_id: "0lSa8zacpq39JvhTvmRyFaR1h8mDWMTo"){
    items {
      id
      quantity
      product{
        name
        sku
        thumbnail {
          url
        }
      }
      prices{
        price{
          value
          currency
        }
      }
    }
    prices {
      grand_total {
        value
        currency
      }
    }
  }
}
`;

const Cart = () => {
  
  const { loading, error, data } = useQuery(CART_LIST, {
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }
  const carts = data.cart.items;
  const totals = data.cart.prices.grand_total;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.listItem}>cart_id : 0lSa8zacpq39JvhTvmRyFaR1h8mDWMTo</Text>
        {carts.map((val, index) => (
          <View key={index} style={styles.listItem}>
            <View>
              <Image
                style={styles.imgProduct}
                source={{uri: val.product.thumbnail.url}}
              />
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productItemName}>{val.product.name}</Text>
              <Text
                style={
                  styles.productItemName
                }>{`SKU : ${val.product.sku}`}</Text>
              <Text style={styles.productItemPrice}>
                {`${val.prices.price.currency} ${parseInt(
                  val.prices.price.value,
                  10,
                ).toFixed(2)}`}
              </Text>
              <Text>Qty : {val.quantity}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View>
      <Text style={styles.textTotal}>
          {`Total : ${totals.currency} ${parseInt(totals.value, 10).toFixed(
            2,
          )}`}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  pageScreenTitle: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  productItemName: {
    fontSize: 12,
  },
  productItemPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  productInfo: {
    marginLeft: 20,
  },
  imgProduct: {
    width: 80,
    height: 80,
  },
  textTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
export default Cart;