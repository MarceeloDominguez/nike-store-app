import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function BannerHome() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/oferta.png")}
        style={styles.imageOferta}
      />
      <Image
        source={require("../../assets/nike-banner.png")}
        style={styles.imageNikeBanner}
      />
      <Image
        source={require("../../assets/vector-banner.png")}
        style={styles.vectorBanner}
      />
      <Image
        source={require("../../assets/Vector-banner-2.png")}
        style={styles.vectorBannerDos}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 150,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  imageOferta: {
    width: 110,
    height: 70,
    resizeMode: "contain",
  },
  imageNikeBanner: {
    width: 120,
    height: 100,
    resizeMode: "contain",
    transform: [{ translateY: -16 }],
  },
  vectorBanner: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    position: "absolute",
    right: 120,
    top: 20,
  },
  vectorBannerDos: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    position: "absolute",
    bottom: 22,
    left: 4,
  },
});
