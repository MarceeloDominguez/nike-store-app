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
import BannerHome from "../components/BannerHome";
import { Color } from "../constants/theme";

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
                    selectedCategory === index ? Color.primary : "#fff",
                },
              ]}
              onPress={() => setSelectedCategory(index)}
            >
              <Text
                style={[
                  styles.textCategory,
                  {
                    color:
                      selectedCategory === index ? "#fff" : Color.textPrimary,
                  },
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
        <BannerHome />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.screen,
    flex: 1,
    paddingHorizontal: 22,
  },
  titleCategory: {
    color: Color.textSecondary,
    fontWeight: "bold",
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
