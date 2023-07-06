import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { Color } from "../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import { useShoeStore } from "../store/shoeStore";
import CardShoeInCart from "../components/cart/CardShoeInCart";
import Checkout from "../components/cart/Checkout";
import ButtonsSwipe from "../components/cart/ButtonsSwipe";

type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  "CartScreen"
>;

type Prop = {
  navigation: CartScreenNavigationProp;
};

export default function CartScreen({ navigation }: Prop) {
  const { shoeInCart } = useShoeStore();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "My Cart",
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: Color.screen },
      headerShadowVisible: false,
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: Color.textSecondary,
      },

      headerLeft: () => {
        return (
          <TouchableOpacity
            style={styles.contentIcon}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons
              name="arrow-back-ios"
              size={20}
              color={Color.textSecondary}
              style={{ left: 3 }}
            />
          </TouchableOpacity>
        );
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <SwipeListView
        data={shoeInCart}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 250 }}
        ListHeaderComponent={() => (
          <View style={styles.contentHeaderTitleList}>
            <Text style={styles.titleHeaderList}>
              Shoe ({shoeInCart.length})
            </Text>
          </View>
        )}
        renderItem={({ item }) => {
          return <CardShoeInCart shoe={item} />;
        }}
        //botones que se muestran al desplazar horizontalmente los card item
        renderHiddenItem={({ item }) => {
          return <ButtonsSwipe item={item} />;
        }}
        rightOpenValue={-70}
        stopRightSwipe={-70}
        leftOpenValue={70}
        stopLeftSwipe={70}
      />
      <Checkout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.screen,
    flex: 1,
  },
  contentIcon: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  //header list
  contentHeaderTitleList: {
    marginTop: 10,
    marginBottom: 8,
    paddingHorizontal: 22,
  },
  titleHeaderList: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: Color.textSecondary,
  },
});
