import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Component/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import SignInUp from "./pages/SignInUp/SignInUp";
import {
    auth,
    createUserProfileDocument,
    // firestore,
} from "./firebase/firebase";
import { connect } from "react-redux";
import { setCurrnetUser } from "./Redux/user/user.action";
import { selectCurrentUser } from "./Redux/user/userSelector";
import { createStructuredSelector } from "reselect";

const App = ({ setCurrnetUser, currentUser }) => {
    useEffect(() => {
        auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot((snapshot) => {
                    setCurrnetUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            } else {
                setCurrnetUser(null);
            }
        });
    });

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route
                    exact
                    path="/signin"
                    render={() => {
                        return currentUser ? <Redirect to="/" /> : <SignInUp />;
                    }}
                />
            </Switch>
        </BrowserRouter>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrnetUser: (user) => dispatch(setCurrnetUser(user)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
