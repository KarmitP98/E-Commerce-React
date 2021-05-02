import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import Button from '../button/button';

export const CartDropDown = (props) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'></div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);
