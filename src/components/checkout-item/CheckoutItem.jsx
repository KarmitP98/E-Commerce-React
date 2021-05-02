import './checkoutitem.styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import { removeItem, updateItemQuantity } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, removeItem, updateItemQuanitity }) => {
	const { name, price, quantity, imageUrl } = item;
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='Item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<span className='q-controls' onClick={() => updateItemQuanitity(item, -1)}>
					&#10094;
				</span>
				{quantity}
				<span className='q-controls' onClick={() => updateItemQuanitity(item, 1)}>
					&#10095;
				</span>
			</span>
			<span className='price'>${price}</span>
			<div className='remove-button' onClick={() => removeItem(item)}>
				&#10005;
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	removeItem: (item) => dispatch(removeItem(item)),
	updateItemQuanitity: ( item, type ) => dispatch(updateItemQuantity(
        {item, type} )),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
