export const addItemTocart = (cartItems, cartItemToAdd) => {
    const existingcartItem = cartItems.find((cartItem) => {
        return cartItem.id === cartItemToAdd.id;
    });

    if (existingcartItem) {
        return cartItems.map((cartItem) => {
            return cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem;
        });
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === cartItemToRemove.id;
    });

    if (existingCartItem.quantity === 1) {
        // return cartItems;
        return cartItems.filter((cartItem) => {
            return cartItem.id !== cartItemToRemove.id;
        });
    } else {
        return cartItems.map((cartItem) => {
            if (cartItem.id === cartItemToRemove.id) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else {
                return cartItem;
            }
        });
    }
};
