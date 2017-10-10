const handleChangeReducer = (state = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHECKBOX_CHECKED':

      return state + payload.price;

    case 'CHECKBOX_UNCHECKED':
      
      return state - payload.price;


    default:
      return state;
  }
};

export default handleChangeReducer;
