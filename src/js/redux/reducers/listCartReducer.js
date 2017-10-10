const listCartReducer = (state = [], action) => {
  const { type, payload } = action;
  // var stateVar = state;
  switch (type){
    case 'CHECKBOX_CHECKED':
      state.push(payload.name);
      // debugger;
      return state;


    case 'CHECKBOX_UNCHECKED':
      state.pop(payload.name);
      // debugger;
      return state;

    default:
      return state;

  }
}

export default listCartReducer;
