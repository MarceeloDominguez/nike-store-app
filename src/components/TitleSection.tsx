import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../constants/theme";

type Prop = {
  title: string;
  textNavigate: string;
};

export default function TitleSection({ textNavigate, title }: Prop) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.textNavigate}>{textNavigate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    color: Color.textSecondary,
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  textNavigate: {
    fontSize: 13,
    color: Color.primary,
    fontWeight: "bold",
    letterSpacing: 0.4,
  },
});
