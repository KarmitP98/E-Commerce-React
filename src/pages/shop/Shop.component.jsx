import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview.container";
import CollectionContainer from "../../components/collection/collection.container";

export class ShopComponent extends Component {
  
  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync();
  }
  
  render() {
    const {match} = this.props;
    return (
      <div className = 'shop-page'>
        <Route
          exact path = {`${match.path}`}
          component = {CollectionsOverviewContainer}/>
        <Route
          path = {`${match.path}/:collectionId`}
          component = {CollectionContainer}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopComponent);
