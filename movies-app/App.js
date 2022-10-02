import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider,Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import Header from './components/layout/Header';


export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      {/* <StatusBar style="auto" /> */}
      </NativeBaseProvider>
    
  );
}


