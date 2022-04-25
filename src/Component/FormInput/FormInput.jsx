import React from "react";
import "./FormInput.scss";

const FormInput = ({ label, ...restOfProps }) => {
    return (
        <div className="group">
            <input {...restOfProps} />
            {label ? (
                <label
                    className={`${
                        restOfProps.value.length ? "shrink" : ""
                    } form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default FormInput;
