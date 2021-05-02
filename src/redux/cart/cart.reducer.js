import { CartActionTypes } from './cart.types';
import { addItemToCart,updateItemQuantity } from './cart.utils';

const initialState = {
	hidden: true,
	cartItems: [],
};

const CartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden };
		case CartActionTypes.ADD_ITEM:
			return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
		case CartActionTypes.REMOVE_ITEM:
			return { ...state, cartItems: state.cartItems.filter((item) => item.id !== payload.id) };
		case CartActionTypes.UPDATE_ITEM_QUANTITY: {
			return {
				...state,
				cartItems: updateItemQuantity(state.cartItems, payload),
			};
		}
		default:
			return state;
	}
};

export default CartReducer;
