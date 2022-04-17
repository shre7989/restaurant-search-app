import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import RestaurantInfo from "../components/RestaurantScreenComponents/RestaurantInfo";
import QuickLinks from "../components/RestaurantScreenComponents/QuickLinks";
import ReviewList from "../components/RestaurantScreenComponents/ReviewList";

const RestaurantScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState("");
  const restaurantId = navigation.getParam("id");

  console.log(restaurant);

  const getRestaurantDetails = async (id) => {
    try {
      const res = await yelp.get(`businesses/${id}`);
      setRestaurant(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => getRestaurantDetails(restaurantId), []); //get restaurant details when Restaurant screen is rendered for the first time
  getRestaurantDetails();
  console.log(restaurantId);
  return (
    <View>
      <FlatList
        data={restaurant.photos}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Image style={styles.img} key={index} source={{ uri: item }} />
        )}
      />
      <ScrollView style={styles.container}>
        {/* Heading*/}
        <Text style={styles.heading}>{restaurant.name}</Text>
        {/* Details */}
        <RestaurantInfo restaurant={restaurant} />
        {/* Quick Links === contains icon links for directions, phone, store hours */}
        <QuickLinks />
        {/* Business Reviews */}
        <ReviewList restaurantId={restaurant.id} />
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  heading: {
    margin: 20,
    fontSize: 20,
    fontWeight: "800",
  },
  img: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
  },
});
