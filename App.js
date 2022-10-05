import { NativeBaseProvider, Text } from "native-base";
import AppStack from "./components/Stacks/AppStack";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppStack />
    </NativeBaseProvider>
  );
}
