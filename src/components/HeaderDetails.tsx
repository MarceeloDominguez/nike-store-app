import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Color } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import DotRed from "./DotRed";

export default function HeaderDetails() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentIcon}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <MaterialIcons
          name="arrow-back-ios"
          size={20}
          color={Color.textSecondary}
          style={{ left: 3 }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Sneaker Shop</Text>
      <TouchableOpacity
        style={styles.contentIcon}
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
