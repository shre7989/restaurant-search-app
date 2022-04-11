import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ searchText, onSearchTextChange, onSearchSubmit }) => {
  const [searchFocus, setSearchFocus] = useState(false);
  return (
    <View style={styles.container}>
      <View style={[styles.searchInput, { flex: `${searchFocus ? 0.92 : 1}` }]}>
        <TextInput
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Food Nearby"
          style={styles.input}
          value={searchText}
          onChangeText={(newTerm) => onSearchTextChange(newTerm)}
          onSubmitEditing={() => {
            onSearchSubmit(searchText);
            setSearchFocus(false);
          }}
          clearButtonMode="always"
          onFocus={() => setSearchFocus(true)}
        />

        <Ionicons name="search" style={styles.icon} />
      </View>
      {searchFocus ? (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Keyboard.dismiss();
            setSearchFocus(false);
          }}
        >
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    height: 45,
    borderRadius: 30,
    padding: 10,
    width: "100%",
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
  btn: {
    flex: 0.2,
  },
  btnText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
  },
});
