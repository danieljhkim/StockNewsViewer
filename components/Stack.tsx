import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeScreen';
import News from './NewsScreen';
import Article from './ArticleScreen';
import { StackParamList } from '../navigation/types'

export default function Stack() {
  const Stack = createStackNavigator<StackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}
