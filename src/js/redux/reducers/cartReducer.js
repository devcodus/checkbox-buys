const cartReducer = (state = 9000, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CART_BOUGHT':
      return state - payload;

    default:
      return state;
  }
};

export default cartReducer;
