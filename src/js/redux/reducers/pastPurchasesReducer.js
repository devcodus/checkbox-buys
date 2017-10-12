const pastPurchasesReducer = (state = "", action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CART_BOUGHT':

      return state + payload.list;

    default:
      return state;
  }
};

export default pastPurchasesReducer;
