import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResultList from "../components/SearchResultList";
import useResults from "../hooks/useResults";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchYelpApi, searchResults] = useResults();

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onSearchSubmit={searchYelpApi}
      />
      {searchResults.length !== 0 ? (
        <FlatList
          data={sortListByType(searchResults)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <SearchResultList
              list={item.list}
              key={index}
              icon={item.icon}
              title={item.title}
            />
          )}
        />
      ) : (
        <View style={styles.resultlistsContainer}>
          <Image
            source={require("../assets/images/noodle.gif")}
            style={styles.img}
          />
          <Text style={styles.text}>Let's get some food...</Text>
        </View>
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
    alignSelf: "stretch",
  },
  resultlistsContainer: {
    flex: 1,
  },
  img: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 8,
    resizeMode: "contain",
    height: 150,
    width: 200,
  },
  text: {
    flex: 2,
    fontSize: 20,
    fontWeight: "900",
    color: "lightgrey",
    alignSelf: "flex-start",
    transform: [{ translateY: -170 }],
  },
});
//functions
function sortListByType(list) {
  let sortedByDistance, sortedByRating, sortedByPrice;

  sortedByDistance = [...list].sort(
    (business1, business2) => business1.distance - business2.distance
  );
  sortedByRating = [...list].sort(
    (business1, business2) => business2.rating - business1.rating
  );
  sortedByPrice = [...list].sort(
    (business1, business2) => business1.price?.length - business2.price?.length
  );
  return [
    {
      list: sortedByDistance,
      title: "Fastest near you",
      icon: (
        <MaterialCommunityIcons
          name="map-marker-radius"
          size={20}
          color="black"
        />
      ),
    },
    {
      list: sortedByRating,
      title: "Top rated",
      icon: <MaterialIcons name="stars" size={20} color="black" />,
    },
    {
      list: sortedByPrice,
      title: "Save budget",
      icon: <Ionicons name="pricetags" size={20} color="black" />,
    },
  ];
}
