import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../constants/theme";
import ButtonFloating from "../components/ButtonFloating";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>NotificationsScreen</Text>
      <ButtonFloating />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.screen,
  },
});
