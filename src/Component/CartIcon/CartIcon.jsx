import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleHidden } from "../../Redux/cart/cartActions";
import { selectCartItemsCount } from "../../Redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";

function cartIcon({ toggle, itemCount }) {
    return (
        <div className="cart-icon" onClick={toggle}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{`${itemCount}`}</span>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => dispatch(toggleHidden()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
