import React from "react";
import { View, StyleSheet } from "react-native";
import CardShoe from "./CardShoe";
import { shoes } from "../data/shoes";

export default function OutdoorShoes() {
  const shoesFiltered = shoes.filter((item) => item.category === "Outdoor");

  return (
    <View style={styles.containerCard}>
      {shoesFiltered.map((item) => (
        <CardShoe key={item.id} shoe={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
