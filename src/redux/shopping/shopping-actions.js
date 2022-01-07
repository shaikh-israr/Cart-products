import * as actionType from './shopping-types';

export const addProductData = (item) => {
  return {
    type: actionType.ADD_PRODUCT_DATA,
    payload: item,
  };
};

export const addToCart = (itemID) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionType.LOAD_CURRENT_ITEM,
    payload: {
      id: item,
    },
  };
};
