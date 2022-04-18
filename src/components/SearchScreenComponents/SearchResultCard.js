import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import RestaurantDetails from "./RestaurantDetails";
import OrderTypeDetails from "./OrderTypeDetails";
import { withNavigation } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

const SearchResultCard = ({ business, navigation }) => {
  const hasDelivery =
    business.transactions.filter((item) => item === "delivery").length > 0;
  const hasPickup =
    business.transactions.filter((item) => item === "pickup").length > 0;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("RestaurantScreen", { id: business.id })
      }
    >
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: business.image_url }} />
        {/* Details Container */}
        <RestaurantDetails business={business} />
        <OrderTypeDetails hasDelivery={hasDelivery} hasPickup={hasPickup} />
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(SearchResultCard);

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  img: {
    height: 160,
    width: 350,
    borderRadius: 5,
  },
});
