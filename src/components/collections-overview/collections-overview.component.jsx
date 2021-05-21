import './collections-overview.styles.scss';
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../preview-collection/collection-preview';

export const CollectionsOverview = ({collections, history}) => {
  return (
    <div className = 'collections-overview'>
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key = {id} {...otherCollectionProps} history = {history}/>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsOverview);
