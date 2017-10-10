const handleChangeReducer = (state = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHECKBOX_CHECKED':
      return state + payload;

    case 'CHECKBOX_UNCHECKED':
      return state - payload;

    default:
      return state;
  }
};

export default handleChangeReducer;
