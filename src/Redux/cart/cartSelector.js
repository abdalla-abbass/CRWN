import { createSelector } from "reselect";

const selectcart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectcart],
    (cart) => cart.cartItems
);

export const selectHidden = createSelector([selectcart], (cart) => {
    return cart.hidden;
});

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity;
        }, 0);
    }
);

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((acc, cartItem) => {
            const { price, quantity } = cartItem;
            return acc + price * quantity;
        }, 0);
    }
);
