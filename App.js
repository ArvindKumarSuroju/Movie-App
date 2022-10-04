import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import Header from "./components/layout/Header";
import AppStack from "./components/Stacks/AppStack";

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Header /> */}
      <AppStack />
    </NativeBaseProvider>
  );
}
