import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    SearchScreen: SearchScreen,
    RestaurantScreen: RestaurantScreen,
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: "Foodie 🍟",
    },
  }
);

export default createAppContainer(navigator);
