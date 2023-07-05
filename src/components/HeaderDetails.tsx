import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Color } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

export default function HeaderDetails() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentIcon}>
        <MaterialIcons
          name="arrow-back-ios"
          size={20}
          color={Color.textSecondary}
          style={{ left: 3 }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text style={styles.title}>Sneaker Shop</Text>
      <View style={styles.contentIcon}>
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
  container: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
  },
  contentIcon: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    letterSpacing: 0.4,
    fontWeight: "bold",
    color: Color.textSecondary,
  },
});
