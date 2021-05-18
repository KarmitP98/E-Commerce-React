import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selector';
import {Route} from 'react-router';
import Collections from '../../components/collections/collection.component';
import Collection from '../../components/collection/collection.component';
import {convertCollectionsSnapShotToMap, firestore} from '../../firebase/firebase.utils.js';
import {updateCollections} from '../../redux/shop/shop.actions';
import SpinnerComponent from "../../components/spinner/spinner.component";

const CollectionOverviewWithSpinner = SpinnerComponent(Collections);
const CollectionPageWithSpinner = SpinnerComponent(Collection)

export class ShopComponent extends Component {
  unsubscribe = null;
  
  state = {
    loading: true
  }
  
  componentDidMount() {
    const {updateCollections} = this.props;
    
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapShotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({loading: false})
    });
  }
  
  componentWillUnmount() {
  
  }
  
  
  render() {
    const {match} = this.props;
    return (
      <div className = 'shop-page'>
        <Route
          exact path = {`${match.path}`}
          render = {(props) => <CollectionOverviewWithSpinner isLoading = {this.state.loading} {...props}/>}/>
        <Route
          path = {`${match.path}/:collectionId`}
          render = {(props) => <CollectionPageWithSpinner isLoading = {this.state.loading} {...props}/>}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopComponent);
