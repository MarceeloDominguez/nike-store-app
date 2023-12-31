import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Shoe } from "../interface/interfaceShoe";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";

const { width } = Dimensions.get("window");

type Prop = {
  shoe: Shoe;
};

export default function CardShoe({ shoe }: Prop) {
  const { image, title, price } = shoe;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.bestSeller}>best seller</Text>
      <View style={styles.wrapNameShoe}>
        <Text style={styles.nameShoe} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={styles.footerCardShoe}>
        <Text style={styles.price}>$ {price}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.containerBtnFooterCardShoe}
          onPress={() => navigation.navigate("DetailsScreen", shoe)}
        >
          <Text style={styles.iconMore}>+</Text>
        </TouchableOpacity>
      </View>
      <Ionicons
        style={styles.iconHeart}
        name="heart-outline"
        size={24}
        color={Color.textSecondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    elevation: 1,
    overflow: "hidden",
  },
  image: {
    width: width * 0.48 - 22,
    height: 120,
    resizeMode: "contain",
    borderRadius: 16,
    marginTop: 15,
  },
  bestSeller: {
    textTransform: "uppercase",
    fontSize: 13,
    color: Color.primary,
    paddingHorizontal: 10,
    marginBottom: 5,
    fontWeight: "bold",
    letterSpacing: 0.4,
  },
  wrapNameShoe: {
    maxWidth: width * 0.48 - 22,
  },
  nameShoe: {
    fontSize: 16,
    color: Color.textPrimary,
    paddingHorizontal: 10,
    marginBottom: 5,
    letterSpacing: 0.4,
  },
  price: {
    paddingHorizontal: 10,
    marginVertical: 5,
    color: Color.textSecondary,
    fontWeight: "bold",
    fontSize: 15,
  },
  footerCardShoe: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerBtnFooterCardShoe: {
    height: 45,
    width: 45,
    backgroundColor: Color.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 16,
  },
  iconMore: {
    fontSize: 30,
    color: "#fff",
  },
  iconHeart: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});
