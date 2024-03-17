export const removeFromCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};

export const increaseQuantity = (item) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: item,
  };
};

export const decreaseQuantity = (item) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: item,
  };
};

export const loadProducts = (products) => {
  return {
    type: "LOAD_PRODUCTS",
    payload: products,
  };
};
