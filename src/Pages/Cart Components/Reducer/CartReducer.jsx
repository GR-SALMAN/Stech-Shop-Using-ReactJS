export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = state.find((el) => el.id === action.payload.id);
      return product
        ? state.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          )
        : [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_THE_ITEM":
      return state.filter((el) => el.id !== action.payload.id);

    case "MODIFY_ITEM_QUANTITY":
      return state.map((el) =>
        el.id === action.payload.id
          ? { ...el, quantity: action.payload.quantity }
          : el
      );
    case "CLEAR CART":
      return [];
    default:
      return state;
  }
};
