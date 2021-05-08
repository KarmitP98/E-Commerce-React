import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selector';
import {Route} from 'react-router';
import Collections from '../../components/collections/collection.component';
import Collection from '../../components/collection/collection.component';

export const ShopPage = ({match}) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={Collections}/>
            <Route path={`${match.path}/:collectionId`} component={Collection}/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
