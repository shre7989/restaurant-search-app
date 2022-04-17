import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchResultCard from "./SearchResultCard";

const SearchResultList = ({ list, title, icon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title} {icon}
      </Text>
      <FlatList
        data={list}
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    borderBottomWidth: 0.7,
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
});

export default SearchResultList;
