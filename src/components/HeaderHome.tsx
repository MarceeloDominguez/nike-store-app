import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Color } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RootStackParamsList } from "../navigation/Navigation";
import DotRed from "./DotRed";

export default function HeaderHome() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/Hamburger.png")}
        style={styles.hamburger}
      />
      <View>
        <Image
          source={require("../../assets/Explore.png")}
          style={styles.title}
        />
        <Image
          source={require("../../assets/vector-title-home.png")}
          style={styles.vectorTitle}
        />
      </View>
      <TouchableOpacity
        style={styles.contentIconShopping}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("CartScreen")}
      >
        <MaterialCommunityIcons
          name="shopping-outline"
          size={24}
          color={Color.textSecondary}
        />
        <DotRed />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  hamburger: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  title: {
    width: 120,
    height: 60,
    resizeMode: "contain",
  },
  vectorTitle: {
    width: 20,
    height: 20,
    position: "absolute",
    left: -15,
    top: -2,
  },
  contentIconShopping: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  // dotRedInIconShopping: {
  //   width: 8,
  //   height: 8,
  //   backgroundColor: "#FF1900",
  //   position: "absolute",
  //   borderRadius: 4,
  //   top: 3,
  //   right: 5,
  // },
});
