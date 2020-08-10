import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
//import { StyleSheet, Text, View } from 'react-native';
//import Landing from './src/pages/Landing';

import { Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoad] = useFonts({
    Archivo_400Regular, Archivo_700Bold,
    Poppins_400Regular, Poppins_600SemiBold,
  });

  if (!fontsLoad) {
    return <AppLoading />;
  } else {
    return (
        <>
         <AppStack />       
         <StatusBar style="light" />
        </>
    );
  }
}









// -----------------
/*  
//Exemplo Main
export default function App() {
  return (
      <View style={styles.container}>
      <Text style={styles.title}> Hello</Text>
      <Text style={styles.title}> NLW</Text>
      <StatusBar style="auto" />
    </View> 
    );
  }
//Exemplos de style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row', // padrao web
    //flexDirection: 'column', //padrao mobile
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold'
   // ,transform: [
   //   { rotateZ: '30deg'}
   // ]
  },
}); */
