import React from 'react';
import { WebView } from 'react-native-webview';
import { useContext } from 'react';
import userContext from '../context/UserContext';
import { Platform } from 'react-native';
import Iframe from 'react-iframe'

const ArticleScreen: React.FC<unknown> = () => {
  const { url } = useContext(userContext);
  const os = Platform.OS;
  return (
    <>
    { (os == 'android' || os == 'ios') &&
      <WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        source={{uri: url}}
        style={{marginTop: 20}}
        automaticallyAdjustContentInsets={false}
      />
    } 
    { os == 'web' &&
      <Iframe url={url}
        position="absolute"
        width="100%"
        height="100%"
        allowFullScreen
      />
    }
    </>
  );
}

export default ArticleScreen;
