import React from "react";
import StripeCheckout from "react-stripe-checkout";
function Stripe({ price }) {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51JTJdAAWqcJzULJl7PuF9G7DxBUDZyRXzXchvOSkuFHLri8k09Qg1XWgCn4m9jv9drcEtUkH29CFxl3pRQSdFMre00tFny6pFs";

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful ");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Crwn Clothing EGY"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default Stripe;
