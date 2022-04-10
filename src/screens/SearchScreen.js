import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={(newText) => setSearchText(newText)}
      />
      <Text>We Have found {searchResults.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
});
