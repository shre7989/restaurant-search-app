import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const QuickLinks = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="directions" size={30} color="black" />
      <FontAwesome5 name="store" size={24} color="black" />
      <Entypo name="phone" size={24} color="black" />
      <FontAwesome5 name="map-marker-alt" size={24} color="black" />
      <Entypo name="menu" size={30} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 0.7,
    borderColor: "lightgrey",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    marginTop: 0,
  },
});

export default QuickLinks;
