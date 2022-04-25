import React from "react";
import "./CustomButton.scss";
function CustomButton({ children, inverted, isGoogleSignIn, ...otherProps }) {
    return (
        <button
            className={`${
                isGoogleSignIn ? "google-sign-in " : ""
            } custom-button ${inverted ? "inverted" : ""}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default CustomButton;
