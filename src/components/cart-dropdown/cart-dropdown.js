import React from 'react';
import {connect} from 'react-redux';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

export const CartDropDown = ({cartItems, history, dispatch}) => {
  return (
    <div className = 'cart-dropdown'>
      <div className = 'cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key = {item.id} item = {item}/>)
        ) : (
          <span className = 'empty-message'>The cart is empty</span>
        )}
      </div>
      <Button
        onClick = {() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
