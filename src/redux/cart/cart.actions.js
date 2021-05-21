import {CartActionTypes} from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (payload) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: payload,
});

export const removeItem = (payload) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload,
});

export const updateItemQuantity = (payload) => ({
  type: CartActionTypes.UPDATE_ITEM_QUANTITY,
  payload,
});
