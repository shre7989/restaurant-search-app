import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchScreenComponents/SearchBar";
import SearchResultList from "../components/SearchScreenComponents/SearchResultList";
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
        <ScrollView style={styles.resultlistsContainer}>
          <SearchResultList
            list={sortListByDistance(searchResults)}
            title="Fastest Near You"
            icon={
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={20}
                color="black"
              />
            }
          />
          <SearchResultList
            list={sortListByRating(searchResults)}
            title="Top Rated"
            icon={<MaterialIcons name="stars" size={20} color="black" />}
          />
          <SearchResultList
            list={sortListByPrice(searchResults)}
            title="Save Budget"
            icon={<Ionicons name="pricetags" size={20} color="black" />}
          />
        </ScrollView>
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
function sortListByDistance(list) {
  let sortedByDistance = [...list].sort(
    (business1, business2) => business1.distance - business2.distance
  );
  return sortedByDistance;
}

function sortListByRating(list) {
  let sortedByRating = [...list].sort(
    (business1, business2) => business2.rating - business1.rating
  );
  return sortedByRating;
}

function sortListByPrice(list) {
  let sortedByPrice = [...list].sort(
    (business1, business2) => business1.price?.length - business2.price?.length
  );
  return sortedByPrice;
}
