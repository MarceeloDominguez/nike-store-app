import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { onboarding } from "../constants/onboarding";

const { width, height } = Dimensions.get("screen");

export default function OnboardingScreen() {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1483C2" />
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
        contentContainerStyle={{
          alignItems: "center",
        }}
        onMomentumScrollEnd={(e) => {
          setIndex(Math.round(e.nativeEvent.contentOffset.x / width));
        }}
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
                        bottom: index === 0 ? 5 : -4,
                        width: index === 0 ? 195 : 290,
                      },
                    ]}
                  />
                  <View style={styles.contentImage}>
                    <Image
                      source={item.image}
                      style={[
                        styles.image,
                        {
                          height: index === 0 ? height * 0.4 : height * 0.36,
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
      <TouchableOpacity style={styles.containerButton}>
        <Text style={styles.titleButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1483C2",
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
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
    textAlign: "center",
    marginBottom: 12,
    width: width * 0.7,
  },
  subtitle: {
    fontSize: 19,
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
});
