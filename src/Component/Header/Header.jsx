import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../Redux/user/userSelector";
import { selectHidden } from "../../Redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from "./Header.style";

function Header({ currentUser, hidden }) {
    return (
        <HeaderContainer>
            <LogoContainer className="logo-container" to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer className="options">
                <OptionLink className="option" to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink className="option" to="/shop">
                    CONTACT
                </OptionLink>
                {currentUser ? (
                    <OptionLink
                        as="div"
                        className="option"
                        onClick={() => auth.signOut()}
                    >
                        Sign Out
                    </OptionLink>
                ) : (
                    <OptionLink className="option" to="/signin">
                        Sign in
                    </OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            {!hidden ? <CartDropdown /> : null}
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden,
});

export default connect(mapStateToProps)(Header);
