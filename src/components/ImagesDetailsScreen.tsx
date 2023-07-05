import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Shoe } from "../interface/interfaceShoe";

const { width } = Dimensions.get("window");

type Prop = {
  shoe: Shoe;
};

export default function ImagesDetailsScreen({ shoe }: Prop) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<FlatList | null>(null);

  return (
    <View>
      <FlatList
        data={shoe.images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        //saco el index de cada item
        onMomentumScrollEnd={(e) => {
          setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / width));
        }}
        ref={ref}
        renderItem={({ item }) => (
          <View>
            <Image source={item.img} style={styles.image} />
          </View>
        )}
      />

      {/* imagen circular que va debajo de la zapatilla */}
      <View style={styles.contentEllipse}>
        <Image
          source={require("../../assets/Ellipse-Details.png")}
          style={styles.ellipse}
        />
        {/* botones para ir hacia adelante o atras */}
        <View style={styles.contentArrows}>
          <MaterialIcons
            name="arrow-back-ios"
            size={18}
            color="#fff"
            style={{ left: 3 }}
            onPress={() => {
              ref.current?.scrollToOffset({
                offset: (currentIndex - 1) * width,
                animated: true,
              });
              setCurrentIndex(currentIndex - 1);

              //no puedo ir hacia atras si ya estoy en el primer index
              currentIndex === 0 && setCurrentIndex(0);
            }}
          />
          <MaterialIcons
            name="arrow-forward-ios"
            size={18}
            color="#fff"
            onPress={() => {
              ref.current?.scrollToOffset({
                offset: (currentIndex + 1) * width,
                animated: true,
              });
              setCurrentIndex(currentIndex + 1);

              //si llego al ultimo index que no avance mas
              currentIndex === shoe.images.length - 1 &&
                setCurrentIndex(shoe.images.length - 1);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width,
    alignSelf: "center",
    height: 240,
  },
  contentEllipse: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  ellipse: {
    width: width - 44,
    height: 95,
    resizeMode: "contain",
  },
  contentArrows: {
    position: "absolute",
    bottom: 1,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "#707b81",
    width: 60,
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 100,
  },
});
