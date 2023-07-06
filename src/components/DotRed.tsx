import React from "react";
import { View, StyleSheet } from "react-native";
import { useShoeStore } from "../store/shoeStore";

export default function DotRed() {
  const { shoeInCart } = useShoeStore();

  return shoeInCart.length > 0 ? (
    <View style={styles.dotRedInIconShopping} />
  ) : null;
}

const styles = StyleSheet.create({
  dotRedInIconShopping: {
    width: 8,
    height: 8,
    backgroundColor: "#FF1900",
    position: "absolute",
    borderRadius: 4,
    top: 3,
    right: 5,
  },
});
