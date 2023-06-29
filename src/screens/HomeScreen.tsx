import React from "react";
import { View, StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "#F7F7F9", flex: 1 }}>
      <StatusBar backgroundColor="#F7F7F9" barStyle="dark-content" />
    </View>
  );
}
