import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import {styles1} from '../style/style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {StackParamList } from '../navigation/types';

type ScreenNavigationProp = StackNavigationProp<StackParamList,'News'>;

const HomeScreen: React.FC<unknown> = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const showNews = () => {
    navigation.navigate('News');
  }
  return (
    <ImageBackground source={require('../assets/background2.png')} style={styles.image}>
      <Text style={styles.text}>Wall Street News!</Text>
      <View style={styles1.cont}>
        <Text style={styles1.title}>“The journey of a thousand miles begins with a single step.”</Text>
        <Text style={styles1.right}> - Lao Tzu </Text>
      </View>
      <View style={styles1.centeredView}>
        <Button
          onPress={showNews}
          title="Show News!"
          color="#00BFFF"
        />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "#00BFFF",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFD700c0"
  },
  button: {
    color: "#00BFFF",
  }
});

export default HomeScreen;
