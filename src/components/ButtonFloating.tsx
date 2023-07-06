import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Color } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";

export default function ButtonFloating() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <View style={styles.containerButtonFloating}>
      <TouchableOpacity
        style={styles.buttonFloating}
        onPress={() => navigation.navigate("CartScreen")}
        activeOpacity={0.8}
      >
        <MaterialCommunityIcons
          name="shopping-outline"
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtonFloating: {
    position: "absolute",
    alignSelf: "center",
    bottom: 60,
    zIndex: 1,
  },
  buttonFloating: {
    backgroundColor: Color.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
});
