import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  useWindowDimensions,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';
import {gql, useMutation, useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';

var width = Dimensions.get('window').width;

const ProductDetail = ({navigation, route}) => {
  const {sku} = route.params;
  const [qtyInput, setQty] = useState('1');
  const PRODUCT_DATA = gql`
  {
      products (filter: {sku: {eq: "${sku}"}}) {
        items {
            id
            name
            sku
            url_key
            description {
              html
            }
            small_image  {
              url
            }
            price_range {
              maximum_price {
                regular_price {
                  value
                  currency
                }
                final_price {
                  value
                  currency
                }
                discount {
                  amount_off
                  percent_off
                }
              }
            }
        }
      }
    }
  `;

  const ADD_TO_CART = gql`
  mutation {
    addSimpleProductsToCart(
      input: {
        cart_id: "0lSa8zacpq39JvhTvmRyFaR1h8mDWMTo"
        cart_items: [
          {
            data: {
              quantity: ${qtyInput}
              sku: "${sku}"
            }
          }
        ]
      }
    ) {
      cart {
        items {
          id
          product {
            name
            sku
          }
          quantity
        }
      }
    }
  }
`;

  const {loading, error, data} = useQuery(PRODUCT_DATA, {});
  const [addToCart] = useMutation(ADD_TO_CART);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }
  
  const val = data.products.items[0];
  const description = val.description.html;
  const handleQty = (val) => {
    setQty(val);
  };
  const handleCart = async () => {

    addToCart({
    })
      .then((res) => {
        ToastAndroid.show('success add to cart', ToastAndroid.LONG);
      })
      .catch((e) => {
        ToastAndroid.show(
          e.message,
          ToastAndroid.LONG,
        );
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.productArea}>
          <View>
            <Image style={styles.imgProduct} source={{uri: val.small_image.url}} />
          </View>
          <View>
            <Text style={styles.productTitle}>{val.name}</Text>
            <Text style={styles.productPrice}>{`${
                        val.price_range.maximum_price.final_price.currency
                      } ${parseInt(
                        val.price_range.maximum_price.final_price.value,
                        10,
                      ).toFixed(2)}`}</Text>
            <HTML html={description} />
          </View>
          <View style={styles.formArea}>
            <TextInput
              style={styles.inputCart}
              value={qtyInput}
              keyboardType="numeric"
              onChangeText={(val) => handleQty(val)}
            />
            <TouchableOpacity
              style={styles.buttonCart}
              onPress={() => handleCart()}>
              <Text style={styles.textCart}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  productArea: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  formArea: {
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxQty: {
    flexDirection: 'row',
  },
  buttonCart: {
    backgroundColor: 'black',
    padding: 10,
    width: 150,
    height: 40,
    alignItems: 'center',
    marginLeft: 20,
  },
  inputCart: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 50,
    height: 40,
    textAlign: 'center',
    color: 'black',
  },
  textCart: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  imgProduct: {
    alignSelf: 'center',
    width: 250,
    height: 230,
    marginBottom: 20,
  },
});
export default ProductDetail;