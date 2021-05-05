import './collections-overview.styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from '../preview-collection/collection-preview';

export const Collections = ({ collections, history }) => {
	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} history={history} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
