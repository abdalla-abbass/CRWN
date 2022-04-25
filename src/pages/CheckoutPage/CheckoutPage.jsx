import React from "react";
import "./CheckoutPage.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../Component/CheckoutItem/CheckoutItem";
import Stripe from "../../Component/Stripe/Stripe";
import {
    selectCartItems,
    selectCartItemsTotal,
} from "../../Redux/cart/cartSelector";

function CheckoutPage({ cartItems, total }) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
            })}
            <div className="total">TOTAL: ${total}</div>

            <Stripe price={total} />
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
