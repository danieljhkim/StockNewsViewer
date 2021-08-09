import React from 'react';
import { Text, View, Image } from 'react-native';
import {styles1} from '../style/style';
import Article from '../models/article'
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {StackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext } from 'react';
import userContext from '../context/UserContext';

const Data: Article[] = require('../data/news.json');
type ScreenNavigationProp = StackNavigationProp<StackParamList,'Article'>;

const NewsScreen: React.FC<unknown> = (): JSX.Element => {
  const { setUrl } = useContext(userContext);
  const navigation = useNavigation<ScreenNavigationProp>();
  const renderItem = ({item}:{item:Article}) => (
    <>
      <Item article={item} />
    </>
  );

  const viewArticle = (url:string) => {
    setUrl(url)
    navigation.navigate('Article');
  }

  const Item = ({article}:{article:Article}) => (
    <View style={styles1.item}>
      <TouchableOpacity onPress= {() => viewArticle(article.url)}>
        <Text style={styles1.title}>{article.title}</Text>
        <Text style={styles1.ctxt}>By {article.author}</Text>
        <Image
          style={styles1.img}
          source={ { uri: article.urlToImage }}
        />
        <Text style={styles1.txt}>{article.description}</Text>
        <Text style={styles1.rtxt}>{article.publishedAt}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles1.cont2}>
    <FlatList
      data={Data}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />
    </SafeAreaView>
  )
};

export default NewsScreen;