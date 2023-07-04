import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Animated,
} from "react-native";
import { onboarding } from "../constants/onboarding";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/Navigation";
import { Color } from "../constants/theme";

type OnboardingScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  "OnboardingScreen"
>;

type Prop = {
  navigation: OnboardingScreenProp;
};

const { width, height } = Dimensions.get("screen");

export default function OnboardingScreen({ navigation }: Prop) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref = useRef<FlatList | null>(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.screenOnboarding} />
      <Image
        source={require("../../assets/onboarding/logo-nike.png")}
        style={styles.logoNike}
      />
      <FlatList
        data={onboarding}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={width}
        contentContainerStyle={{
          alignItems: "center",
        }}
        ref={ref}
        //para sacar el index
        onMomentumScrollEnd={(e) => {
          setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / width));
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => {
          return (
            <>
              {item.imageBackground !== null && (
                <View style={styles.containerImageBackground}>
                  <Image
                    source={item.imageBackground}
                    style={styles.imageBackground}
                  />
                </View>
              )}
              <View style={{ marginBottom: 80 }}>
                <Image source={item.faceImage} style={styles.faceImage} />
                {item.titleImage !== null && (
                  <View style={styles.contentImageTitle}>
                    <View style={styles.containerVectorTitle}>
                      <Image
                        source={require("../../assets/onboarding/vector-title-1.png")}
                        style={styles.vector1}
                      />
                      <Image
                        source={require("../../assets/onboarding/vector-title-2.png")}
                        style={styles.vector2}
                      />
                      <Image
                        source={item.titleImage}
                        style={styles.imageTitle}
                      />
                    </View>
                  </View>
                )}
                <View style={{ zIndex: 2 }}>
                  <Image
                    source={require("../../assets/onboarding/ellipse-1.png")}
                    style={[
                      styles.ellipse,
                      {
                        bottom: currentIndex === 0 ? 5 : -4,
                        width: currentIndex === 0 ? 195 : 290,
                      },
                    ]}
                  />
                  <View style={styles.contentImage}>
                    <Image
                      source={item.image}
                      style={[
                        styles.image,
                        {
                          height:
                            currentIndex === 0 ? height * 0.4 : height * 0.36,
                        },
                      ]}
                    />
                  </View>
                </View>
                <View style={styles.contentTitleSubtitle}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
              </View>
            </>
          );
        }}
      />
      {/* puntos indicadores  */}
      <View style={styles.paginationSlide}>
        {onboarding.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex == index && {
                  width: 50,
                },
              ]}
            />
          );
        })}
        <Animated.View
          style={[
            styles.dotIndicator,
            {
              transform: [
                {
                  translateX: Animated.divide(scrollX, width).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 34], //4px mas por el gap
                  }),
                },
              ],
            },
          ]}
        />
      </View>
      {/* boton next */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.containerButton}
        onPress={() => {
          ref?.current?.scrollToOffset({
            offset: (currentIndex + 1) * width,
            animated: true,
          });
          setCurrentIndex(currentIndex + 1);
          currentIndex === onboarding.length - 1 &&
            navigation.navigate("TabNavigation");

          currentIndex === onboarding.length - 1 &&
            setCurrentIndex(onboarding.length - 1);
        }}
      >
        <Text style={styles.titleButton}>
          {currentIndex === onboarding.length - 1 ? "Go Home" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.screenOnboarding,
  },
  contentImageTitle: {
    alignItems: "center",
  },
  imageTitle: {
    width: width * 0.6,
    height: 150,
    resizeMode: "contain",
  },
  contentImage: {
    width: width,
  },
  image: {
    width: width,
    zIndex: 2,
  },
  containerVectorTitle: {
    alignItems: "center",
  },
  vector1: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    position: "absolute",
    left: -20,
    top: 20,
  },
  vector2: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    position: "absolute",
    bottom: -60,
  },
  logoNike: {
    width,
    height: height * 0.22,
    position: "absolute",
    bottom: 160,
    zIndex: 0,
    overflow: "hidden",
    resizeMode: "contain",
  },
  containerButton: {
    marginHorizontal: 22,
    backgroundColor: "#ECECEC",
    height: 45,
    borderRadius: 10,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  titleButton: {
    fontWeight: "600",
    color: "#2B2B2B",
    fontSize: 14,
  },
  ellipse: {
    position: "absolute",
    left: 40,
    height: 40,
    resizeMode: "contain",
  },
  containerImageBackground: {
    width,
    height,
    position: "absolute",
    alignItems: "center",
    top: 120,
  },
  imageBackground: {
    width: width * 0.8,
    height: height * 0.6,
  },
  contentTitleSubtitle: {
    bottom: -70,
    zIndex: 2,
    alignItems: "center",
  },
  title: {
    fontSize: width <= 360 ? 20 : 34,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
    textAlign: "center",
    marginBottom: 12,
    width: width * 0.7,
  },
  subtitle: {
    fontSize: width <= 360 ? 14 : 19,
    fontWeight: "500",
    color: "#fff",
    textTransform: "capitalize",
    opacity: 0.7,
    textAlign: "center",
    lineHeight: 28,
    width: width * 0.85,
  },
  faceImage: {
    position: "absolute",
    width: 80,
    height: 80,
    left: 50,
  },
  //styles dot
  paginationSlide: {
    position: "absolute",
    bottom: 100,
    flexDirection: "row",
    alignSelf: "center",
    gap: 4,
  },
  dot: {
    width: 30,
    height: 5,
    backgroundColor: "#FFB21A",
    borderRadius: 2.5,
  },
  dotIndicator: {
    width: 50,
    height: 5,
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 2.5,
  },
});
