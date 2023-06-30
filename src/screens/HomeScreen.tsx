import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import HeaderHome from "../components/HeaderHome";
import CustomInput from "../components/CustomInput";
import AllShoes from "../components/AllShoes";
import OutdoorShoes from "../components/OutdoorShoes";
import TennisShoes from "../components/TennisShoes";
import TitleSection from "../components/TitleSection";

const category = ["All Shoes", "Outdoor", "Tennis"];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#F7F7F9" barStyle="dark-content" />
      <HeaderHome />
      <CustomInput />
      <View style={{ marginTop: 25 }}>
        <Text style={styles.titleCategory}>Select Category</Text>
        <View style={styles.containerCategories}>
          {category.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              style={[
                styles.wrapCategory,
                {
                  backgroundColor:
                    selectedCategory === index ? "#0D6EFD" : "#fff",
                },
              ]}
              onPress={() => setSelectedCategory(index)}
            >
              <Text
                style={[
                  styles.textCategory,
                  { color: selectedCategory === index ? "#fff" : "#6A6A6A" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TitleSection title="Popular Shoes" textNavigate="See all" />
        {selectedCategory === 0 && <AllShoes />}
        {selectedCategory === 1 && <OutdoorShoes />}
        {selectedCategory === 2 && <TennisShoes />}
        <TitleSection title="New Arrivals" textNavigate="See all" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F9",
    flex: 1,
    paddingHorizontal: 22,
  },
  titleCategory: {
    color: "#2B2B2B",
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  containerCategories: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 14,
  },
  wrapCategory: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 8,
  },
  textCategory: {
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
