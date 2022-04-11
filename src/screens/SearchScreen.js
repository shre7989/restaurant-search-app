import { StyleSheet, Text, View } from "react-native";
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
        <Text>No Results Found</Text>
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
});
