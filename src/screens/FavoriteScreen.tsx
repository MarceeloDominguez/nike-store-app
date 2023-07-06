import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonFloating from "../components/ButtonFloating";
import { Color } from "../constants/theme";

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <ButtonFloating />
      <Text>FavoriteScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.screen,
  },
});
