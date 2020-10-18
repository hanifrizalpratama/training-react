import React from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {gql, useQuery} from '@apollo/client';
const CATEGORY_LIST = gql`
  query Category {
    categoryList(filters: {}){
      id
      name
      image_path
    }
  }
`;

const Category = ({navigation}) => {
  const { loading, error, data } = useQuery(CATEGORY_LIST, {
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error :(</Text>;
  }
  const category = data.categoryList;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <View style={styles.productList}>
            {category.map((val, index) => (
              <View key={index} style={styles.productItem}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductList', {
                      id: val.id,
                    })
                  }>
                  <Text style={styles.categoryName}>{val.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
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
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  categoryName: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
    padding: 15,
  },
});
export default Category;