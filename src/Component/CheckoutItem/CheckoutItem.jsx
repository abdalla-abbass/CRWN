import React from "react";
import "./CheckoutItem.scss";
import {
    clearItemFromCart,
    removeItem,
    addItem,
} from "../../Redux/cart/cartActions";
import { connect } from "react-redux";

function CheckoutItem({
    cartItem,
    clearItem,
    addItemToCart,
    removeItemToCart,
}) {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div
                    className="arrow"
                    onClick={() => {
                        removeItemToCart(cartItem);
                    }}
                >
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div
                    className="arrow"
                    onClick={() => {
                        addItemToCart(cartItem);
                    }}
                >
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>
            <span className="remove-button" onClick={() => clearItem(cartItem)}>
                &#10005;
            </span>
        </div>
    );
}
const mapStateToDispatch = (dispatch) => {
    return {
        clearItem: (item) => dispatch(clearItemFromCart(item)),
        addItemToCart: (item) => dispatch(addItem(item)),
        removeItemToCart: (item) => dispatch(removeItem(item)),
    };
};
export default connect(null, mapStateToDispatch)(CheckoutItem);
