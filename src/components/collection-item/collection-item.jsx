import React from 'react';
import Button from '../button/button';
import './collection-item.styles.scss';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

export const CollectionItem = ({item, addItem}) => {
	const {name, price, imageUrl} = item;
	return (
		<div className="collection-item">
			<div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button onClick={() => addItem(item)} inverted>
				Add to Cart
			</Button>
		</div>
	);
};

const mapDispatchToProp = (disptach) => ({
	addItem: (item) => disptach(addItem(item)),
});

export default connect(null, mapDispatchToProp)(CollectionItem);
