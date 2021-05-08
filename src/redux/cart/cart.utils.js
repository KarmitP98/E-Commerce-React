// Add any utility function
export const addItemToCart = (cartItems, newItem) => {
    const existing = cartItems.find((cartItem) => cartItem.id === newItem.id);
    if (existing) {
        return cartItems.map((item) => (item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item));
    }

    return [...cartItems, {...newItem, quantity: 1}];
};

export const updateItemQuantity = (cartItems, payload) => {
    const quantity = payload.item.quantity;

    if (quantity === 1 && payload.type === -1) {
        return cartItems.filter((item) => item.id !== payload.item.id);
    }
    return cartItems.map((item) =>
        item.id === payload.item.id ? {...item, quantity: item.quantity + payload.type} : item
    );
};
