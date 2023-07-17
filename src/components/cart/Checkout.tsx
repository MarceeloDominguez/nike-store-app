import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Color } from "../../constants/theme";

type Prop = {
  priceTotalShoe: number;
};

export default function Checkout({ priceTotalShoe }: Prop) {
  const delivery = 50;
  const total = priceTotalShoe + delivery;

  return (
    <View style={styles.containerCheckout}>
      <View style={styles.contentCheckout}>
        <Text style={styles.title}>Subtotal</Text>
        <Text style={styles.price}>$ {priceTotalShoe}</Text>
      </View>
      <View style={styles.contentCheckout}>
        <Text style={styles.title}>Delivery</Text>
        <Text style={styles.price}>$ {delivery}</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Image
          source={require("../../../assets/Vector-line.png")}
          style={styles.lineDivider}
        />
      </View>
      <View>
        <View style={styles.contentTotalCost}>
          <Text style={styles.titlePriceTotal}>Total Cost</Text>
          <Text style={styles.priceTotal}>$ {total}</Text>
        </View>
        <TouchableOpacity style={styles.containerButton} activeOpacity={0.8}>
          <Text style={styles.titleButton}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCheckout: {
    backgroundColor: "#fff",
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    paddingHorizontal: 22,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentCheckout: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    color: Color.textPrimary,
    letterSpacing: 0.4,
    fontSize: 18,
  },
  price: {
    color: Color.textSecondary,
    fontWeight: "bold",
    fontSize: 18,
  },
  lineDivider: {
    width: "100%",
    height: 2,
  },
  contentTotalCost: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  containerButton: {
    backgroundColor: Color.primary,
    height: 45,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  titleButton: {
    color: "#fff",
    letterSpacing: 0.4,
    fontSize: 14,
    fontWeight: "bold",
  },
  priceTotal: {
    color: Color.primary,
    fontWeight: "bold",
    fontSize: 18,
  },
  titlePriceTotal: {
    color: Color.textSecondary,
    letterSpacing: 0.4,
    fontSize: 18,
  },
});
