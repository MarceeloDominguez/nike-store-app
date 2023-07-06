import React from "react";
import { View, StyleSheet } from "react-native";
import { shoes } from "../data/shoes";
import CardShoe from "./CardShoe";

export default function TennisShoes() {
  const shoesFiltered = shoes.filter((item) => item.category === "Tennis");

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
