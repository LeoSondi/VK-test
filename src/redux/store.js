import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartReducer";

// Начальное состояние с данными о продуктах
const initialState = {
  cart: {
    cartItems: [
      {
        id: 1,
        img: "pecenka.png",
        title: "Печенье со сгущенкой",
        description: "Перекус",
        count: 1,
        price: 250,
      },
      {
        id: 2,
        img: "apple-juice.jpeg",
        title: "Яблочный сок 0.5л",
        description: "Напиток",
        count: 1,
        price: 90,
      },
      {
        id: 3,
        img: "bombbar.jpg",
        title: "Протеиновый батончик",
        description: "Снэк",
        count: 1,
        price: 130,
      },
      {
        id: 4,
        img: "mindal.jpg",
        title: "Миндаль 100г",
        description: "Снэк",
        count: 1,
        price: 200,
      },
    ],
  },
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: initialState, // Используем начальное состояние
});

export default store;
