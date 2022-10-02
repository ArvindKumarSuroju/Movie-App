import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Movies from "../screens/Movies";
import SearchResults from "../screens/SearchResults";
import TVShows from "../screens/TVShows";

const TabNavigator = createMaterialTopTabNavigator(
  {
    Movies: {
      screen: Movies,
      navigationOptions: {
        tabBarLabel: "Movies",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
      },
    },
    SearchResults: {
      screen: SearchResults,
      navigationOptions: {
        tabBarLabel: "Search Results",
      },
    },
    TVShows: {
      screen: TVShows,
      navigationOptions: {
        tabBarLabel: "TV Shows",
      },
    },
  },
  {
    // tabBarOptions: {
    //   style: {
    //     backgroundColor: "#ffffff",
    //   },
    // },
    // tabBarLabel: {
    //   style: {
    //     color: "#FD7F20",
    //   },
    // },
  }
);

const Navigator = createAppContainer(TabNavigator);

const AppStack = () => {
  return (
    <Navigator>
      <Movies />
    </Navigator>
  );
};

export default AppStack;
