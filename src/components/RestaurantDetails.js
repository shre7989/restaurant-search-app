import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const RestaurantDetails = ({ business }) => {
  const [favourite, setFavourite] = useState(false);

  const distance = (business.distance / 1000).toPrecision(2);
  const price = business.price ? getStarIcons(business.price.length) : "";
  const rating = business.rating;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {business.is_closed ? "⛔" : ""} {business.name}
        </Text>
        <Text style={styles.secondaryTitle}>
          {distance} mi / {rating}{" "}
          <Ionicons name="star" size={14} color="gold" /> / {price}
        </Text>
      </View>
      <View>
        <Ionicons
          name="heart"
          size={24}
          color={favourite ? "black" : "lightgrey"}
          onPress={() => setFavourite(!favourite)}
        />
      </View>
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "700",
  },
  secondaryTitle: {
    display: "flex",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 5,
    marginBottom: 10,
    color: "#bcbcbc",
  },
});

function getStarIcons(length) {
  let arr = [];
  for (let index = 0; index < length; index++) {
    arr.push(
      <Foundation
        name="dollar"
        size={16}
        color="green"
        key={index}
        style={{ paddingTop: 20 }}
      />
    );
  }
  return arr;
}
