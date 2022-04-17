import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../../api/yelp";

const ReviewList = ({ restaurantId }) => {
  const [reviews, setReviews] = useState([]);

  const getRestaurantReviews = async (id) => {
    try {
      const res = await yelp.get(`businesses/${id}/reviews`);
      setReviews(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => getRestaurantReviews(restaurantId), []);

  return (
    <View>
      <Text style={styles.heading}>What people Say ...</Text>
      <Text style={styles.secondaryHeading}>Stars, total reviews</Text>
      <FlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "800",
  },
  secondaryHeading: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: "400",
    color: "grey",
  },
});
export default ReviewList;
