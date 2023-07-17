import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Color } from "../../constants/theme";
import { Shoe } from "../../interface/interfaceShoe";

type Prop = {
  shoe: Shoe;
};

export default function CardShoeInCart({ shoe }: Prop) {
  const shoeTotalPrice = shoe.quantity * Number(shoe.price);

  return (
    <View style={styles.cardItem}>
      <View style={styles.contentImage}>
        <Image source={shoe.image} style={styles.image} />
      </View>
      <View style={styles.wrapInfoShoe}>
        <Text style={styles.nameShoe} numberOfLines={2}>
          {shoe.title}
        </Text>
        <Text style={styles.priceShoe}>
          $ {shoeTotalPrice.toFixed(2)} X ({shoe.quantity})
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: "#fff",
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: "row",
    gap: 12,
    marginHorizontal: 22,
  },
  contentImage: {
    backgroundColor: Color.screen,
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 12,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  wrapInfoShoe: {
    flex: 1,
    justifyContent: "center",
  },
  nameShoe: {
    fontSize: 16,
    color: Color.textPrimary,
    paddingHorizontal: 10,
    marginBottom: 5,
    letterSpacing: 0.4,
  },
  priceShoe: {
    paddingHorizontal: 10,
    marginVertical: 5,
    color: Color.textSecondary,
    fontWeight: "bold",
    fontSize: 15,
  },
});
