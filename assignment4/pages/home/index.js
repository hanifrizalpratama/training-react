import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyProducts} from '../../data';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageScreenTitle}>
        <Text style={styles.Title}>Home</Text>
      </View>
      <ScrollView>
        <Image
          style={styles.imgBanner}
          source={{
            uri: 'https://b2cdemo.getswift.asia/media/weltpixel/owlcarouselslider/images/s/c/screen_shot_2019-07-30_at_9.27.20_am.png',
          }}
        />
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.Title}>Top Product</Text>
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
  imgBanner: {
    width: win.width,
    height: 350,
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

export default Home;
