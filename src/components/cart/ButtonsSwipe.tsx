import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Color } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { useShoeStore } from "../../store/shoeStore";
import { Shoe } from "../../interface/interfaceShoe";

type Prop = {
  item: Shoe;
};

export default function ButtonsSwipe({ item }: Prop) {
  const { addShoeToCart, removeShoeProductOneFromCart, removeShoeFromCart } =
    useShoeStore();

  return (
    <View style={styles.containerSwipe}>
      <View style={styles.contentSwipeAddCart}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.wrapIconSwipe}
          onPress={() => addShoeToCart(item)}
        >
          <Text style={styles.addShoeSwipe}>+</Text>
        </TouchableOpacity>
        <Text style={styles.amount}>{item.quantity}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.wrapIconSwipe}
          onPress={() => removeShoeProductOneFromCart(item.id)}
        >
          <Text style={styles.deleteShoeSwipe}>_</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.contentSwipeDeleteCart}
        onPress={() => removeShoeFromCart(item.id)}
      >
        <AntDesign name="delete" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerSwipe: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    height: 60,
    marginHorizontal: 22,
    flex: 1,
    marginBottom: 12,
  },
  contentSwipeAddCart: {
    backgroundColor: Color.primary,
    width: 60,
    height: "100%",
    borderRadius: 12,
    justifyContent: "space-around",
    alignItems: "center",
  },
  contentSwipeDeleteCart: {
    backgroundColor: "#FF1900",
    width: 60,
    height: "100%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapIconSwipe: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  amount: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  addShoeSwipe: {
    fontSize: 22,
    color: "#fff",
  },
  deleteShoeSwipe: {
    fontSize: 22,
    color: "#fff",
    top: -10,
  },
});
