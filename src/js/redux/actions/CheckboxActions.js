export function addItemToCart(price){
  return {
    type: 'CHECKBOX_CHECKED',
    payload: price,
  };
}

export function removeItemFromCart(price){
  return {
    type: 'CHECKBOX_UNCHECKED',
    payload: price,
  };
}

export function buyCart(total){
  return {
    type: 'CART_BOUGHT',
    payload: total,
  }
}
