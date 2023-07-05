import { ImageSourcePropType } from "react-native";

interface Images {
  img: ImageSourcePropType;
}

export interface Shoe {
  title: string;
  price: string;
  image: ImageSourcePropType;
  images: Images[];
  id: number;
  description: string;
}
