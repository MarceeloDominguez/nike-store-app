import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import AccountScreen from "../screens/AccountScreen";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../constants/theme";
import DetailsScreen from "../screens/DetailsScreen";
import { Shoe } from "../interface/interfaceShoe";
import CartScreen from "../screens/CartScreen";

export type RootStackParamsList = {
  OnboardingScreen: undefined;
  TabNavigation: undefined;
  HomeScreen: undefined;
  FavoriteScreen: undefined;
  NotificationsScreen: undefined;
  AccountScreen: undefined;
  DetailsScreen: Shoe;
  CartScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "fade" }}>
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabBackground = () => {
  return (
    <ImageBackground
      source={require("../../assets/tab-image.png")}
      //style={{ flex: 1 }}
      style={{
        width: "100%",
        height: 120,
        position: "absolute",
        top: -120,
      }}
    >
      {/* {children} */}
    </ImageBackground>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: styles.tabBarItem,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarBackground() {
          return <TabBackground />;
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ top: -15, right: 12 }}>
              <Ionicons
                name="md-home-outline"
                size={24}
                color={focused ? Color.primary : "#6A6A6A"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ top: -15, right: 35 }}>
              <Ionicons
                name="heart-outline"
                size={24}
                color={focused ? Color.primary : "#6A6A6A"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ top: -15, left: 35 }}>
              <Ionicons
                name="ios-notifications-outline"
                size={24}
                color={focused ? Color.primary : "#6A6A6A"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ top: -15, left: 12 }}>
              <Ionicons
                name="person-outline"
                size={24}
                color={focused ? Color.primary : "#6A6A6A"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    height: 30,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: -60,
  },
  tabBar: {
    //height: 120,
    position: "absolute",
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: "green",
    zIndex: 0,
    height: 0,
  },
});
