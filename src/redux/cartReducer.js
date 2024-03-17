const initialState = {
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
};

const MAX_QUANTITY_PER_ITEM = 10;

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id && item.count < MAX_QUANTITY_PER_ITEM
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
