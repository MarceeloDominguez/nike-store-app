import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../constants/theme";

export default function CustomInput() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapTextInput}>
        <TextInput
          placeholder="Looking for shoes"
          style={styles.textInput}
          placeholderTextColor="#6A6A6A"
        />
        <Ionicons
          name="search"
          size={22}
          color="#6A6A6A"
          style={styles.iconSearch}
        />
      </View>
      <View style={styles.contentIconShare}>
        <Ionicons name="options-sharp" size={24} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    gap: 14,
  },
  wrapTextInput: {
    height: 53,
    flex: 1,
  },
  textInput: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 50,
    elevation: 3,
  },
  contentIconShare: {
    width: 50,
    height: 50,
    backgroundColor: Color.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 12,
  },
  iconSearch: {
    position: "absolute",
    top: 13,
    left: 15,
  },
});
