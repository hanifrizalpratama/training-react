import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { gql, useQuery } from '@apollo/client';


const ProductList = ({ navigation, route }) => {
  const { id } = route.params;

  const CATEGORY_LIST = gql`
    query Category {
        categoryList(filters: { ids: { eq: "${id}" } }){
            id
            name
            products{
                items{
                    id
                    name
                    sale
                    sku
                    price_range{
                        maximum_price{
                          final_price {
                            value
                            currency
                          }
                        }
                    }
                    thumbnail{
                        url
                    }
                }
            }
        }
    }
    `;


  const { loading, error, data } = useQuery(CATEGORY_LIST, {
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error :(</Text>;
  }
  const product = data.categoryList[0].products.items;
  const categoryName = data.categoryList[0].name;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{categoryName} </Text>
          </View>
          <View style={styles.productList}>
            {product.map((val, index) => {
              return (
                <View key={index} style={styles.productItem}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductDetail', { sku: val.sku })
                    }>
                    <Image style={styles.imgProductList} source={{uri: val.thumbnail.url}} />
                    <View style={styles.productInfo}>
                      <Text style={styles.productItemName}>{val.name}</Text>
                      <Text style={styles.productItemPrice}>{`${
                        val.price_range.maximum_price.final_price.currency
                      } ${parseInt(
                        val.price_range.maximum_price.final_price.value,
                        10,
                      ).toFixed(2)}`}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })}
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
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  section: {
    marginVertical: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productItem: {
    width: `${100 / 2}%`,
    marginBottom: 20,
  },
  productInfo: {
    alignItems: 'center',
  },
  productItemName: {
    fontSize: 12,
  },
  productItemPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  imgProductList: {
    width: 145,
    height: 145,
    marginBottom: 10,
  },
});

export default ProductList;