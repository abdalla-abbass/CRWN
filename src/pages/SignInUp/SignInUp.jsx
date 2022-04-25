import React from "react";
import "./SignInUp.scss";
import SignIn from "../../Component/SignIn/SignIn";
import SignUp from "../../Component/SignUp/SignUp";

function SignInUp() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInUp;
