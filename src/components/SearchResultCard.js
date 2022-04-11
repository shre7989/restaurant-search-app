import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantDetails from "./RestaurantDetails";

const SearchResultCard = ({ business }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: business.image_url }} />
      {/* Details Container */}
      <RestaurantDetails business={business} />
    </View>
  );
};

export default SearchResultCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  img: {
    height: 120,
    width: 300,
    borderRadius: 5,
  },
});
