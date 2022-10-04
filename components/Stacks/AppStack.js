import React from "react";
import Movies from "../screens/Movies";
import SearchResults from "../screens/SearchResults";
import TVShows from "../screens/TVShows";
import Details from "../screens/Details";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const TabNavigator = createMaterialTopTabNavigator();

function Home() {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name="Movies" component={Movies} />
      <TabNavigator.Screen name="Search Results" component={SearchResults} />
      <TabNavigator.Screen name="TV Shows" component={TVShows} />
    </TabNavigator.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Movies App"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: route.params.original_title,
            headerBackTitle: "Back",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
