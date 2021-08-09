import React from 'react';
import { WebView } from 'react-native-webview';
import { useContext } from 'react';
import userContext from '../context/UserContext';


const ArticleScreen: React.FC<unknown> = () => {
  const { url } = useContext(userContext);

  return (
    <WebView
    source={{uri: url}}
    style={{marginTop: 20}}
    />
  );
}

export default ArticleScreen;
