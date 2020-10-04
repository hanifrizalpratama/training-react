import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyProducts} from '../../data';

const ProductList = ({navigation, route}) => {
  const {categoryName} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{categoryName} </Text>
          </View>
          <View style={styles.productList}>
              {DummyProducts.map((val, index) => (
                <View key={index} style={styles.productItem}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductDetail', {
                        productId: val.id,
                      })
                    }>
                    <Image style={styles.productImg} source={{
                      uri: val.img,
                    }} />
                    <View style={styles.productInfo}>
                      <Text style={styles.productName}>{val.name}</Text>
                      <Text style={styles.productPrice}>{val.price}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
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
  pageScreenTitle: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  section: {
    marginVertical: 20,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  productList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  productItem: {
    width: 150,
    margin: 10,
  },
  productInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productPrice: {
    fontWeight: 'bold',
  },
  productImg: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});

export default ProductList;
