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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../constants/theme";

export type RootStackParamsList = {
  OnboardingScreen: undefined;
  TabNavigation: undefined;
  FavoriteScreen: undefined;
  NotificationsScreen: undefined;
  AccountScreen: undefined;
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
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabBackground = ({ children }: { children: JSX.Element }) => {
  return (
    <ImageBackground
      source={require("../../assets/tab-image.png")}
      style={{ flex: 1 }}
    >
      {children}
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
          return (
            <TabBackground>
              <View style={styles.containerButtonFloating}>
                <View style={styles.buttonFloating}>
                  <MaterialCommunityIcons
                    name="shopping-outline"
                    size={24}
                    color="#fff"
                  />
                </View>
              </View>
            </TabBackground>
          );
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
  containerButtonFloating: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFloating: {
    backgroundColor: Color.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  tabBarItem: {
    height: 30,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 60,
  },
  tabBar: {
    height: 120,
    position: "absolute",
    borderTopWidth: 0,
    elevation: 0,
  },
});
