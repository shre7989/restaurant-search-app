import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import SearchResultList from "../components/SearchResultList";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchYelpApi = async () => {
    try {
      const res = await yelp.get("businesses/search", {
        params: {
          limit: 10,
          term: searchText,
          location: "san jose",
        },
      });
      setSearchResults(res.data.businesses);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onSearchSubmit={searchYelpApi}
      />
      {searchResults.length !== 0 ? (
        <View style={styles.resultlistsContainer}>
          <SearchResultList list={searchResults} type="distance" />
          <SearchResultList list={searchResults} type="rating" />
          <SearchResultList list={searchResults} type="price" />
        </View>
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
