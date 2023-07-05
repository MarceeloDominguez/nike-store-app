import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Color } from "../constants/theme";

export default function HeaderHome() {
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
      <View style={styles.contentIconShopping}>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={24}
          color={Color.textSecondary}
        />
      </View>
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
});
