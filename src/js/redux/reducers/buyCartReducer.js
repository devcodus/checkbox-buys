const buyCartReducer = (state = 9000, action) => {
  // debugger;
  const { type, payload } = action;
  switch (type) {
    case 'CART_BOUGHT':

      return state - payload.total;

    default:
      return state;
  }
};

export default buyCartReducer;
