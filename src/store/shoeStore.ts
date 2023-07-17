import { create } from "zustand";
import { Shoe } from "../interface/interfaceShoe";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  shoeInCart: Shoe[];
};

type Actions = {
  addShoeToCart: (Shoe: Shoe) => void;
  removeShoeFromCart: (shoeId: number) => void;
  removeShoeProductOneFromCart: (shoeId: number) => void;
};

export const useShoeStore = create(
  persist<State & Actions>(
    (set) => ({
      shoeInCart: [],

      addShoeToCart: (shoe: Shoe) => {
        set((state) => {
          const itemInCart = state.shoeInCart.find(
            (item) => item.id === shoe.id
          );

          if (itemInCart) {
            return {
              shoeInCart: state.shoeInCart.map((item) =>
                item.id === shoe.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              shoeInCart: [...state.shoeInCart, { ...shoe, quantity: 1 }],
            };
          }
        });
      },

      removeShoeFromCart: (shoeId: number) => {
        set((state) => ({
          shoeInCart: state.shoeInCart.filter((item) => item.id !== shoeId),
        }));
      },

      removeShoeProductOneFromCart: (shoeId: number) => {
        set((state) => {
          const shoeToDelete = state.shoeInCart.find(
            (item) => item.id === shoeId
          );

          if (shoeToDelete?.quantity! > 1) {
            return {
              shoeInCart: state.shoeInCart.map((item) =>
                item.id === shoeId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            };
          } else {
            return {
              shoeInCart: state.shoeInCart.filter((item) => item.id !== shoeId),
            };
          }
        });
      },
    }),
    { name: "shoe-zustand", storage: createJSONStorage(() => AsyncStorage) }
  )
);
