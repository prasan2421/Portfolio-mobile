/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator
} from 'react-native';
import { WebView } from 'react-native-webview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {styles} from './Styles.js';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const [visible,setVisible]=React.useState(true)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const hideSpinner=() =>{

    setVisible(false)
  }


  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{flex:1, color:'inherit',backgroundColor:'black'}}>
      {/* <Text style={[styles.innerText,{fontFamily:'LaBelleAurore'}]}>Prasanna Tuladhar</Text> */}
    
      <WebView  onLoadEnd={() => hideSpinner()} forceDarkOn={isDarkMode ?true:false} source={{ uri: 'http://www.prasannat.com' }} />

      {visible? (
       
        <View style={[loadingStyles.container]}>
     
        <ActivityIndicator size="large" color="red" />
        <Text style={[styles.baseText,{color:'black'}]}>
      Loading ...
      </Text>
      <Text style={styles.innerText}>Prasanna Tuladhar</Text>
    
      </View>
      ):null}
       </View>
    </>

  );
};
const loadingStyles = StyleSheet.create({
  container: {
   
    position: "absolute", left: '30%', top:'40%', alignItems:'center',zIndex:10000, color:'inherit'
  }
});



export default App;
