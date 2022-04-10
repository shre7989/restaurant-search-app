import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ searchText, onSearchTextChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Food Nearby"
        style={styles.input}
        value={searchText}
        onChangeText={(newTerm) => onSearchTextChange(newTerm)}
      />
      <Ionicons name="search" style={styles.icon} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    alignSelf: "stretch",
    height: 45,
    borderRadius: 30,
    padding: 10,
  },
  icon: {
    flex: 1,
    fontSize: 25,
    textAlign: "center",
  },
  input: {
    flex: 9,
    fontSize: 20,
    marginLeft: 15,
  },
});
