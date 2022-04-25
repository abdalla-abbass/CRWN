import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../Redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleHidden } from "../../Redux/cart/cartActions";

function cartDropdown({ cartItems, history, dispatch }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => {
                        return <CartItem key={cartItem.id} item={cartItem} />;
                    })
                ) : (
                    <span className="empty-message">Your Cart Is Empty </span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push("./checkout");
                    dispatch(toggleHidden());
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(cartDropdown));
