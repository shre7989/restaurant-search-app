import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const OrderTypeDetails = ({ hasDelivery, hasPickup }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="drive-eta"
        size={18}
        color={hasDelivery ? "black" : "lightgrey"}
      />
      <FontAwesome5
        style={styles.item}
        name="walking"
        size={18}
        color={hasPickup ? "black" : "lightgrey"}
      />
    </View>
  );
};

export default OrderTypeDetails;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    marginLeft: 10,
  },
});
