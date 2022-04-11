import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchResultCard from "./SearchResultCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const SearchResultList = ({ list, type }) => {
  const itemList = filterListByType(list, type);
  return (
    <View style={styles.container}>
      <View style={styles.listHeaderContainer}>
        <Text style={styles.title}>
          {getHeadingByType(type)} {getIconByType(type)}
        </Text>
      </View>
      <FlatList
        data={itemList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <SearchResultCard business={item} key={index} />
        )}
        style={styles.list}
      />
    </View>
  );
};

export default SearchResultList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    borderTopWidth: 0.7,
    borderColor: "#cdcdcd",
  },
  title: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
  },
  list: {
    padding: 20,
    paddingTop: 0,
  },
  listHeaderContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

function filterListByType(list, type) {
  switch (type) {
    case "distance":
      let sortedByDistance = list.sort(
        (business1, business2) => business1.distance - business2.distance
      );
      return sortedByDistance;
    case "rating":
      let sortedByRating = list.sort(
        (business1, business2) => business2.rating - business1.rating
      );
      return sortedByRating;
    case "price":
      let sortedByPrice = list.sort(
        (business1, business2) =>
          business1.price?.length - business2.price?.length
      );
      return sortedByPrice;
    default:
      return list;
  }
}

function getIconByType(type) {
  switch (type) {
    case "distance":
      return (
        <MaterialCommunityIcons
          name="map-marker-radius"
          size={20}
          color="black"
        />
      );
    case "rating":
      return <MaterialIcons name="stars" size={20} color="black" />;
    case "price":
      return <Ionicons name="pricetags" size={20} color="black" />;
    default:
      return null;
  }
}

function getHeadingByType(type) {
  switch (type) {
    case "distance":
      return "Fastest near you";
    case "rating":
      return "Highly rated";
    case "price":
      return "Save your budget";
    default:
      return "";
  }
}
