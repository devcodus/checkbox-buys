export function addItemToCart(price, name){
  return {
    type: 'CHECKBOX_CHECKED',
    payload: {
      price: price,
      name: name,
    }
  };
}

export function removeItemFromCart(price, name){
  return {
    type: 'CHECKBOX_UNCHECKED',
    payload: {
      price: price,
      name: name,
    }
  };
}

export function buyCart(total){
  return {
    type: 'CART_BOUGHT',
    payload: total,
  }
}
