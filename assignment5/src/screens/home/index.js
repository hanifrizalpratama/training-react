import React, {useEffect, useState} from 'react';
import { gql, useQuery } from '@apollo/client';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';

const topProduct = gql`
query Category {
    categoryList(filters: { ids: { eq: "45" } }){
        id
        name
        description
        products{
            items{
                id
                name
                sku
                sale
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

const homeBanner = gql`
  {
    getHomepageSlider {
      images {
        image_id
        image_url
      }
      slider_id
    }
  }
`;

const Home = ({ navigation }) => {
  const query = useQuery(topProduct, {});
  const sliderResponse =  useQuery(homeBanner, {});
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    if (sliderResponse.data !== undefined) {
      setSlider(sliderResponse.data.getHomepageSlider.images);
    }
  }, [sliderResponse.data]);

  if (query.loading || sliderResponse.loading) {
    return <Text>Loading...</Text>;
  }
  if (query.error || sliderResponse.error) {
    return <Text>Error</Text>;
  }

  const categoryProductList = query.data.categoryList[0].products.items;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageScreenTitle}>
      <Text style={styles.pageTitle}>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.cart}>Cart</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
      <Banner images={slider} />
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Top Product</Text>
          </View>
          <ScrollView horizontal>
            <View style={styles.productList}>
              {categoryProductList.map((val, index) => (
                  <View key={index} style={styles.productItem}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('ProductDetail', {
                          sku: val.sku,
                        })
                      }>
                      <Image style={styles.imgProductList} source={{uri: val.thumbnail.url}} />
                      <View style={styles.productInfo}>
                        <Text style={styles.productItemName}>{val.name} </Text>
                        <Text style={styles.productItemPrice}>{`${
                        val.price_range.maximum_price.final_price.currency
                      } ${parseInt(
                        val.price_range.maximum_price.final_price.value,
                        10,
                      ).toFixed(2)}`}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
            </View>
          </ScrollView>


        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const Banner = (props) => {
  const bannr = props.images;
  let sourceImage = [];
  bannr.map((val) => {
    sourceImage.push(val.mobile_image_url);
  });
  return <SliderBox images={sourceImage} />;
};

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  pageScreenTitle: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  cart: {
    fontSize: 16,
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
  imgBanner: {
    width: win.width,
    height: 350 * (win.width / 700),
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productItem: {
    width: 130,
    marginBottom: 20,
    margin: 10,
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
    width: 130,
    height: 130,
    marginBottom: 10,
  },
});

export default Home;