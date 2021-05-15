import React from 'react';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceForStrip = price * 100;
    const publishableKey =
        'pk_test_51I1NGTLu44nxgAf54ypyhjnp6FJ4dm4e340BxkrFVn8RaLpwsYrQaByFxAvA21EzLutJpkMedGhmIDOEj3jPhPHq005VcRidxz';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    };


    return (
        <StripeCheckout
            label={'Pay Now'}
            name={'CRWN Clothing Ltd.'}
            billingAddress
            shippingAddress
            image="https://sendeyo.com/en/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStrip}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />

    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StripeButton);
