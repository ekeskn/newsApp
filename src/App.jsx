import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import newsData from './news_data.json';
import NewsCard from './Components/NewsCard';
import Header from './Components/NewsCard/Header'



const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keyExtractor = (item) => item.u_id

  return (
    <View style={styles.container}>
      <Text style = {styles.header_text}>News App</Text>
      <FlatList
        ListHeaderComponent={
          <Header/>
        }
        keyExtractor={keyExtractor}
        data={newsData}
        renderItem={renderNews}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    flex: 1,
  },
  header_text:{
    fontWeight:'bold',
    fontSize:40,
  }
});

export default App;
