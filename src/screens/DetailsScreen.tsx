import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { Color } from "../constants/theme";
import HeaderDetails from "../components/HeaderDetails";
import ImagesDetailsScreen from "../components/ImagesDetailsScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Prop
  extends NativeStackScreenProps<RootStackParamsList, "DetailsScreen"> {}

export default function DetailsScreen({ route }: Prop) {
  const shoe = route.params;

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <HeaderDetails />
        <View style={styles.containerInfo}>
          <Text style={styles.info}>{shoe.title}</Text>
          <Text style={styles.subtitle}>Men's Shoes</Text>
          <Text style={styles.info}>${shoe.price}</Text>
        </View>
        <ImagesDetailsScreen shoe={shoe} />
        <View style={styles.contentDescription}>
          <Text style={styles.description}>{shoe.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.contentFooter}>
        <View style={styles.contentIconHeart}>
          <View style={styles.wrapIconHeart}>
            <Ionicons
              name="heart-outline"
              size={24}
              color={Color.textSecondary}
            />
          </View>
        </View>
        <Pressable style={styles.containerButton}>
          <View style={styles.wrapTextButton}>
            <MaterialCommunityIcons
              name="shopping-outline"
              size={20}
              color="#fff"
            />
            <Text style={styles.textButton}>Add to cart</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.screen,
  },
  containerInfo: {
    paddingHorizontal: 22,
    marginTop: 30,
  },
  info: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: Color.textSecondary,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 8,
    color: Color.textPrimary,
    letterSpacing: 0.4,
    marginBottom: 7,
  },
  contentDescription: {
    paddingHorizontal: 22,
    marginTop: 20,
    marginBottom: 140,
  },
  description: {
    color: Color.textPrimary,
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 20,
  },
  contentFooter: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 22,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.7)",
    height: 120,
    alignItems: "center",
  },
  contentIconHeart: {
    width: "30%",
    alignItems: "center",
  },
  wrapIconHeart: {
    backgroundColor: "#D9D9D9",
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerButton: {
    backgroundColor: Color.primary,
    width: "65%",
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapTextButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.4,
    fontSize: 14,
  },
});
