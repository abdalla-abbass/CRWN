import React, { useState } from "react";
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle, auth } from "../../firebase/firebase";

const SignIn = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const { email, password } = credentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({ email: "", password: "" });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    console.log(credentials.email);
    return (
        <div className="sign-in">
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    value={email}
                    className="form-input"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    value={password}
                    className="form-input"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
