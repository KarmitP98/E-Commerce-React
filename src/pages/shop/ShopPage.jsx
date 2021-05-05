import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selector';
import { Route, Switch } from 'react-router';
import Collections from '../../components/collections/collection.component';
import Category from '../../components/category/category.component';

export const ShopPage = ({ match }) => (
	<div className='shop-page'>
		<Switch>
			<Route exact path={`${match.path}`} component={Collections} />
			<Route path={`${match.path}/:cat`} component={Category} />
		</Switch>
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
