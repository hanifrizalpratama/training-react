import React from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DummyCategory} from '../../data';

const Category = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageScreenTitle}>
        <Text style={styles.Title}>Category List</Text>
      </View>
      <ScrollView>
        {DummyCategory.map((val, index) => (
          <View key={index} style={styles.listItem}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductList', {
                  categoryName: val.name,
                })
              }>
              <Text style={styles.categoryName}>{val.name}</Text>
            </TouchableOpacity>
            {val.child.length > 0 &&
              val.child.map((valchild) => (
                <View key={valchild.id}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductList', {
                        categoryName: valchild.name,
                      })
                    }>
                    <Text style={styles.categoryChildName}>{valchild.name}</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        ))}
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
  categoryName: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
    padding: 15,
  },
  categoryChildName: {
    marginHorizontal: 20,
    padding: 15,
    paddingHorizontal: 50,
  },
});
export default Category;
