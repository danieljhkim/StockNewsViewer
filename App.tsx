import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './components/Stack';
import { useState } from 'react';
import UserContext from './context/UserContext';

export default function App() {
  const [url, setUrl] = useState<string>("");

  return (
    <UserContext.Provider value={{ url, setUrl}}>
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
   </UserContext.Provider>
  );
}
