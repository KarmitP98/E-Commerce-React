import React from 'react';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

export const CartIcon = ({ toggleCartHidden }) => {
	return (
		<div className='cart-icon' onClick={toggleCartHidden}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
