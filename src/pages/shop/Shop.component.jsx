import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';
import {Route} from 'react-router';
import Collections from '../../components/collections/collection.component';
import Collection from '../../components/collection/collection.component';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import SpinnerComponent from "../../components/spinner/spinner.component";

const CollectionOverviewWithSpinner = SpinnerComponent(Collections);
const CollectionPageWithSpinner = SpinnerComponent(Collection)

export class ShopComponent extends Component {
  
  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync();
  }
  
  render() {
    const {match, fetching, isLoaded} = this.props;
    return (
      <div className = 'shop-page'>
        <Route
          exact path = {`${match.path}`}
          render = {(props) => <CollectionOverviewWithSpinner isLoading = {fetching} {...props}/>}/>
        <Route
          path = {`${match.path}/:collectionId`}
          render = {(props) => <CollectionPageWithSpinner isLoading = {!isLoaded} {...props}/>}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  fetching: selectIsCollectionFetching,
  isLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopComponent);
