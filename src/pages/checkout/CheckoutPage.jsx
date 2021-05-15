import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, totalValue}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header ">
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
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} item={cartItem}/>
            ))}
            <div className="total">Total: ${totalValue}</div>
            <div className="warning">
                *Please use 4242 4242 4242 - EXP: 01/20 - CVV:123
            </div>
            <StripeButton price={totalValue} className={'bottom-right'}/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue: selectCartTotal,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
