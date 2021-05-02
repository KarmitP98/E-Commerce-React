// Add any utility function
export const addItemToCart = (cartItems, newItem) => {
	const existing = cartItems.find((cartItem) => cartItem.id === newItem.id);
	if (existing) {
		return cartItems.map((item) => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item));
	}

	return [...cartItems, { ...newItem, quantity: 1     }];
};
